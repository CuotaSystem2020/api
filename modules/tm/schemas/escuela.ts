import * as mongoose from "mongoose";

let escuelaSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  tipoEscuela: String
});

let escuela = mongoose.model("escuela", escuelaSchema, "escuela");

export = escuelaSchema;
