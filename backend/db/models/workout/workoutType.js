const mongoose = require('mongoose');

const workoutTypeSchemda = new mongoose.Schema({
  workoutType: {
    type: String,
    required: true,
  },
  sets: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  },
  reps: {
    type: Number,
    required: true,
    min: 1,
    max: 100
  }
})

// collection
module.exports = mongoose.model('workoutType', workoutTypeSchemda)