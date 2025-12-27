const express = require('express')
const router = express.Router()
// new router object
// creates in router object to handle req in modular and organized way;
// if the express application grows maintaing all routes in one file is unmangeable
// define the home page route
router.get('/', (req, res) => {
  res.send('Blog home page')
})

// define the about route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the about route
// create dynamic
router.get('/new/:a', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.a}`)
})

module.exports = router
// exprot the router object