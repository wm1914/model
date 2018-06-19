var express = require('express')
var login = require('../api/login')
var getDeviceTreeInfo = require('../api/get_device_tree_info')

var router = express.Router()

router.post('/login', function (req, res) {
  res.json(login)
  // res.status(403).json(login);
})

router.get('/person/getDeviceTreeInfo', function (req, res) {
  res.json(getDeviceTreeInfo)
})

module.exports = router
