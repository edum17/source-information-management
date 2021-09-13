const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nunSchema = new Schema({
    Codigo: {type: String, required: true},
});

const Nun = mongoose.model('Nun', nunSchema);

module.exports = Nun;