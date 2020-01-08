import * as mongoose from "mongoose";
import * as constantes from "../../../utils/constantes";
import * as contactoSchema from "../../tm/schemas/contacto";
import * as escuelaSchema from "../../tm/schemas/escuela";
import * as autorizadosSchema from "../../tm/schemas/autorizados";
import * as hermanosSchema from "../schemas/hermanos";

export let alumnoSchema = new mongoose.Schema({
  nombre: String,
  apellido: String,
  documento: String,
  fechaNacimiento: Date,
  direccion: { type: mongoose.SchemaTypes.Mixed },
  localidad: String,
  contacto: [contactoSchema], // Telefono - Mail
  escuela: { type: escuelaSchema },
  grado: constantes.GRADO,
  libretaSanitaria: Boolean,
  activo: Boolean,
  tipoAlumno: constantes.TIPOALUMNO,
  anoInicio: Number,
  autorizados: [autorizadosSchema],
  hermanos: [hermanosSchema],
  observaciones: String,
  alumnoImage: {
    size: String,
    path: String,
    filename: String,
    destination: String,
    mimetype: String,
    encoding: String,
    originalname: String,
    fieldname: String
  }
});

export let alumnos = mongoose.model("alumno", alumnoSchema, "alumnos");