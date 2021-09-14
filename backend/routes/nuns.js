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
  Nun.findById(req.params.id)
    .then(() => res.json("Nun deleted"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Nun.findById(req.params.id)
    .then((nun) => {
      nun
        .save()
        .then(() => res.json("Nun updated"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
