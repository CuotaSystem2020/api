import * as mongoose from "mongoose";
import * as constantes from "../../../utils/constantes";

let schema = new mongoose.Schema({
  tipo: constantes.CONTACTO,
  valor: String,
  ultimaActualizacion: Date
});

export = schema;
