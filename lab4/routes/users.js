const express = require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose');

router.get('/', async (req, res) => {
  // TODO: return all users;
  var myUsers = [];
  console.log(req); 
  console.log("Idk");
  res.send("henlooo");
})

router.post('/', async (req, res) => {
  // TODO: create a user
})

router.get('/:id', (req, res) => {
  // TODO: return a single user by id
})

router.put('/:id', async (req, res) => {
  // TODO:update a user
})

router.delete('/:id', async (req, res) => {
  // TODO:delete a user
})

// async function getUser(req, res, next) {
//   // Not required, but could be used to get users with a specific id or all users
  
// }

module.exports = router 