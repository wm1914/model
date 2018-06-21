var express = require('express')
var login = require('../api/login')
var getDeviceTreeInfo = require('../api/get_device_tree_info')
var getPermission = require('../api/get_permission')

var router = express.Router()

router.post('/login', function (req, res) {
  res.json(login)
  // res.status(403).json(login);
})

router.get('/person/getDeviceTreeInfo', function (req, res) {
  res.json(getDeviceTreeInfo)
})

router.get('/permission/getPermission', function (req, res) {
  res.json(getPermission)
})

module.exports = router
