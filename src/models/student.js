const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  subject: String,
  marks: Number,
});

module.exports = mongoose.model('Student', studentSchema);
