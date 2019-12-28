import * as mongoose from "mongoose";

let schemaHermano = new mongoose.Schema({
  _id: String,
  nombre: String,
  apellido: String,
  documento: String
});

export = schemaHermano;
