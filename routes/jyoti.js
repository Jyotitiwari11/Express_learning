const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('This is jyoti webpage')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('i am pursuing btech in cse')
})

// define the about route
// create dynamic
router.get('/new/:a', (req, res) => {
  res.send(`i am aiming for ${req.params.a}`)
})

module.exports = router