const constantes = {
  GRADO: {
    type: String,
    enum: [
      "",
      "1er Grado",
      "2do Grado",
      "3er Grado",
      "4° Grado",
      "5° Grado",
      "6° Grado",
      "7° Grado",
      "1er Año",
      "2do Año",
      "3er Año",
      "4° Año",
      "5° Año",
      "Sala de 4",
      "Sala de 5"
    ]
  },
  TIPOALUMNO: {
    type: String,
    enum: ["", "regular", "individual", "bipersonal"]
  },
  PARENTESCO: {
    type: String,
    enum: ["progenitor/a", "hijo", "hermano", "tutor"]
  },
  CONTACTO: {
    type: String,
    enum: ["fijo", "celular", "email"]
  },
  CONCEPTOS: {
    type: String,
    enum: [
      "cuota",
      "matricula",
      "examen",
      "horas",
      "matr_nuevo_2017",
      "matr_dh_2017",
      "examen_internacional"
    ]
  },
  FORMADEPAGO: {
    type: String,
    enum: ["", "debito", "efectivo", "transferencia"]
  },
  TIPOFACTURA: {
    type: String,
    enum: ["", "a", "b", "x"]
  },
  TIPODESCUENTO: {
    type: String,
    enum: [null, "0%", "10%", "15%"]
  },
  TIPORECARGO: {
    type: String,
    enum: [null, "0%", "10%"]
  },
  MESES: {
    type: String,
    enum: [
      "",
      "enero",
      "febrero",
      "marzo",
      "abril",
      "mayo",
      "junio",
      "julio",
      "agosto",
      "septiembre",
      "octubre",
      "noviembre",
      "diciembre"
    ]
  }
};
export = constantes;
