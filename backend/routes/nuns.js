const router = require("express").Router();
let Nun = require("../models/nun.model");

router.route("/").get((req, res) => {
  Nun.find()
    .then((nuns) => res.json(nuns))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Nun.findById(req.params.id)
    .then((nun) => res.json(nun))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Nun.findByIdAndDelete(req.params.id)
    .then(() => res.json("Nun deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Nun.findById(req.params.id)
    .then((nun) => {
      nun.codigo = req.body.codigo;
      nun.nombre = req.body.nombre;
      nun.congregacion = req.body.congregacion;
      nun.conventoMonasterio = req.body.conventoMonasterio;
      nun.FundacionReal = req.body.FundacionReal;
      nun.tecnica = req.body.tecnica;
      nun.categoria = req.body.categoria;
      nun.fechaNacDef = req.body.fechaNacDef;
      nun.autor = req.body.autor;
      nun.tipologia = req.body.tipologia;
      nun.subtipología = req.body.subtipología;
      nun.palabrasClave = req.body.palabrasClave;
      nun.lugar = req.body.lugar;
      nun.localizacion = req.body.localizacion;
      nun.web = req.body.web;
      nun.inscripcion = req.body.inscripcion;
      nun.latin = req.body.latin;
      nun.fechaObra = req.body.fechaObra;
      nun.siglo = req.body.siglo;
      nun.representacion = req.body.representacion;
      nun.anotaciones = req.body.anotaciones;
      nun.bibliografia = req.body.bibliografia;
      nun.imagenes = req.body.imagenes;

      nun
        .save()
        .then(() => res.json("Nun updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
