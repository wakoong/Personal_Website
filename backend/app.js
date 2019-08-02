const mongoose = require('mongoose');
const express = require('express');
const app = express();
const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');

const BodyType = require('./db/models/workout/bodyType');
const WorkoutType = require('./db/models/workout/workoutType'); 

app.use(morgan('dev'))
app.use(urlencoded({ extended: true }))
app.use(json())

const connect = () => {
  return mongoose.connect('mongodb://localhost:27017/whatever')
}

connect() 
  .then(async connection => {
    console.log("app running on port:5000")
    const workoutType = await WorkoutType.create({workoutType: 'Bench Press', sets: 3, reps: 10})
    const bodyType = await BodyType.create({bodyType: 'Chest', workoutType: [workoutType._id]})

    const match = await BodyType.findById(workoutType._id)
      .populate('workoutType')
      .exec()
    console.log("match: ", match, workoutType, bodyType)
    app.listen(5000)
  })
  .catch(e => console.error(e))


