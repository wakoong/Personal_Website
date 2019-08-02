const mongoose = require('mongoose');

const bodyTypeSchemda = new mongoose.Schema({
  bodyType: {
    type: String,
    required: true,
    // unique: true
  },
  workoutType: [{type: mongoose.Schema.Types.ObjectId, required: true, ref: 'workoutType'}]
})

module.exports = mongoose.model('bodyType', bodyTypeSchemda)