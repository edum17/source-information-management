const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const nunSchema = new Schema({
    Codigo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3
    },
  }, {
    timestamps: true,
});
  

const Nun = mongoose.model('Nun', nunSchema);

module.exports = Nun;