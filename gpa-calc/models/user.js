const mongoose = require('mongoose')

const userSchemaTemp = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
    occupation: {
      type: String,
      required: true,
    }
  })

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    totalCredits: {
        type: Number,
        required: true
    },
    earnedCredits: {
        type: Number,
        required: true
    }
})

const course = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    courseGrade: {
        type: Number,
        required: true
    },
    courseWeight: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', userSchema)
