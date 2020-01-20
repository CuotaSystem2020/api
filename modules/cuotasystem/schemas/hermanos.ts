import * as mongoose from 'mongoose';

let schemaHermano = new mongoose.Schema({
	_id: mongoose.Types.ObjectId,
	nombre: String,
	apellido: String,
	documento: String
});

export = schemaHermano;
