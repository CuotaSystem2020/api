import { alumnos } from './../schemas/alumnos';

export async function deleteHermano(req) {
	const { id } = req.params;

	const alumno: any = await alumnos.findById(id);
	const hermano: any = await alumnos.findById(req.body.hermano._id);

	hermano.hermanos = hermano.hermanos.filter((hermano) => hermano._id != id);
	await saveAlumno(hermano);

	alumno.hermanos = alumno.hermanos.filter((hermano) => hermano._id != req.body.hermano._id);
	let alumnoNuevo = await saveAlumno(alumno);

	return alumnoNuevo;
}

function saveAlumno(alumno) {
	return new Promise((resolve, reject) => {
		alumno.save((error, data) => {
			if (error) {
				reject(error);
			}
			resolve(data);
		});
	});
}
