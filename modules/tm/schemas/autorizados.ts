import * as mongoose from "mongoose";

let schema = new mongoose.Schema({
  relacion: String,
  nombreCompleto: String,
  documento: String
});

export = schema;
