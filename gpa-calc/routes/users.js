const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  // TODO: return all users;
  User.find({}, (err, users) => {
    if(err) {
      res.sendStatus(500);
      return;
    }
    res.send(users);
  });
})

router.post('/', async (req, res) => {
  // TODO: create a user
  let newUser = new User({
    username: req.body.username,
    password: req.body.password,
    totalCredits: req.body.totalCredits,
    earnedCredits: req.body.earnedCredits
  });
  newUser.save(async err => {
    if(err) {
      res.sendStatus(400);
    } else {
      res.sendStatus(201);
    }
  });
})

router.get('/:id', (req, res) => {
  // TODO: return a single user by id
  User.findOne({_id: req.params.id}, (err, user) => {
    if(err) {
      res.sendStatus(404);
      return;
    }
    res.send(user);
    return;
  });
})

router.put('/:id', async (req, res) => {
  // TODO:update a user
  User.findById(req.params.id, (err, user) => {
    if(err || user === null) {
      res.sendStatus(404);
      return;
    }
    if(req.body.username) {
      user.username = req.body.username;
    }
    if(req.body.password) {
      user.password = req.body.password;
    }
    if(req.body.totalCredits) {
      user.totalCredits = req.body.totalCredits;
    }
    if(req.body.earnedCredits) {
      user.earnedCredits = req.body.totalCredits;
    }
    user.save((err) => {
      if(err) {
        res.sendStatus(500);
        return;
      }
      res.sendStatus(200);
    });
  });
})

router.delete('/:id', async (req, res) => {
  // TODO:delete a user
  User.findByIdAndDelete(req.params.id, (err, user) => {
    if(err) {
      res.sendStatus(404);
    } else {
      res.sendStatus(200);
    }
  });
})

router.post('/login', async (req, res) => {
  const {errors, isValid} = validateLoginInput(req.body);
  if(!isValid) {
    return res.status(400).json(errors);
  }
})

// async function getUser(req, res, next) {
//   // Not required, but could be used to get users with a specific id or all users
  
// }

module.exports = router 