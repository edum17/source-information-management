const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const nunSchema = new Schema(
  {
    codigo: {
      type: String,
      required: true,
    },
    nombre: {
      type: String,
      required: true,
    },
    congregacion: {
      type: String,
      required: true,
    },
    conventoMonasterio: {
      type: String,
      required: true,
    },
    FundacionReal: {
      type: String,
      required: true,
    },
    tecnica: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
      required: true,
    },
    fechaNacDef: {
      type: String,
      required: true,
    },
    autor: {
      type: String,
      required: true,
    },
    tipologia: {
      type: String,
      required: true,
    },
    subtipología: {
      type: String,
      required: true,
    },
    palabrasClave: {
      type: String,
      required: true,
    },
    lugar: {
      type: String,
      required: true,
    },
    localizacion: {
      type: String,
      required: true,
    },
    web: {
      type: String,
      required: true,
    },
    inscripcion: {
      type: String,
      required: true,
    },
    latin: {
      type: String,
      required: true,
    },
    fechaObra: {
      type: String,
      required: true,
    },
    siglo: {
      type: String,
      required: true,
    },
    representacion: {
      type: String,
      required: true,
    },
    anotaciones: {
      type: String,
      required: true,
    },
    bibliografia: {
      type: String,
      required: true,
    },
    imagenes: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const Nun = mongoose.model("Nun", nunSchema);

module.exports = Nun;
