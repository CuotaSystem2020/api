import * as express from 'express';
import * as mongoose from 'mongoose';
import { alumnos } from './../schemas/alumnos';

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
  console.log("Reqqq: ", req.params.id);
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

export = router;
