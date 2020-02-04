import * as express from 'express';
import * as mongoose from 'mongoose';
import { alumnos } from './../schemas/alumnos';
import * as alumnoCtrl from './../controllers/alumnosController';

var router = express.Router();

router.get('/alumnos', function(req, res, next) {
	let activo: any = {};

	if (req.query.activo === 'true') {
		activo['activo'] = true;
	}

	let query = alumnos.find(activo).sort({ apellido: 1 });

	query.exec(function(err, data) {
		if (err) {
			return next(err);
		}
		// TODO: refactorizar todo a esta forma res.status(200).json(data);
		res.status(200).json(data);
	});
});

router.get('/alumnos/:id', (req, res, next) => {
	let query = alumnos.findById(req.params.id);

	query.exec(function(err, data) {
		if (err) {
			return next(err);
		}
		res.status(200).json(data);
	});
});

router.post('/alumno', function(req: any, res, next) {
	let alumno = new alumnos(req.body);

	alumno.save(function(err, alumno) {
		if (err) {
			res.status(500).send(err);
		}
		console.log('Alumno: ', alumno);
		res.json(alumno);
	});
});

router.put('/alumno/:_id', function(req, res, next) {
	alumnos.findByIdAndUpdate(req.params._id, req.body, { upsert: true }, function(err, alumno) {
		if (err) {
			return next(err);
		}
		res.status(200).json(alumno);
	});
});

// pasar al controlles
router.patch('/hermano', (req, res, next) => {
	let idAlumno = req.body.idAlumno;

	let hermano = {
		_id: req.body.hermano._id,
		nombre: req.body.hermano.nombre,
		apellido: req.body.hermano.apellido,
		documento: req.body.hermano.documento
	};

	alumnos.findById(idAlumno, function(err, dataLuis: any) {
		dataLuis.hermanos.push(hermano);

		dataLuis.save((error, hermanoCreado) => {
			if (error) {
				return next(error);
			}

			alumnos.findById(hermano._id, (err, dataSilvina: any) => {
				dataSilvina.hermanos.push({
					_id: dataLuis._id,
					nombre: dataLuis.nombre,
					apellido: dataLuis.apellido,
					documento: dataLuis.documento
				});

				dataSilvina.save();
			});
			console.log('Hermano: ', hermanoCreado);
			return res.json(hermanoCreado);
		});
	});
});

router.patch('/alumno/:id', async (req: any, res, next) => {
	const { id } = req.params;

	const alumno: any = await alumnos.findById(id);
	const hermano: any = await alumnos.findById(req.body.hermano._id);

	switch (req.body.op) {
		case 'deleteHermano':
			alumno.hermanos = alumno.hermanos.filter((hermano) => hermano._id != req.body.hermano._id);
			hermano.hermanos = hermano.hermanos.filter((hermano) => hermano._id != id);
	}

	await alumno.save((error, data) => {
		if (error) {
			return next(error);
		}

		res.status(200).json(data);
	});
	await hermano.save();
});

export = router;
