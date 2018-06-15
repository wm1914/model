var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)

// 测试socket
var test = io.of('/test')
test.on('connect', function (socket) {
  console.log('test socket connect')
  // emit名称和页面发送的数据保持一致
  socket.emit('get_test_msg', {
    msg: 'socket测试连接成功'
  })

  socket.on('disconnect', function (e) {
    console.log('test socket stop')
  })
})

http.listen(8088, function () {
  console.log('socket port:8088')
})
