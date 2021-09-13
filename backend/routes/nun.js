const router = require('express').Router();
let Nun = require('../models/nun.model');

router.route('/').get((req, res) => {
    console.log("get all Nuns");
    Nun.find()
    .then(nuns => res.json(nuns))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;