import * as mongoose from "mongoose";

export let gradosSchema = new mongoose.Schema({
  nombre: String
});

export let grados = mongoose.model("grados", gradosSchema, "grados");