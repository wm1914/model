module.exports = {
  message: 'success',
  user: {
    account: 'admin',
    realName: 'lx',
    uid: '123456789'
  },
  permission: [
    {
      name: 'home',
      path: '/home',
      meta: {
        type: '1', // 控制是否显示 1显示 2隐藏
        title: '首页'
      },
      component: 'home',
      children: []
    },
    {
      name: 'car',
      path: '/car',
      meta: {
        type: '1',
        title: '车辆'
      },
      component: 'car',
      children: []
    },
    {
      name: 'video',
      path: '/video',
      meta: {
        type: '2',
        title: '视频'
      },
      component: 'video',
      children: [
        {
          name: 'realtimeVideo',
          path: '/video/realtime',
          meta: {
            type: '1',
            title: '实时视频'
          },
          component: 'realtimeVideo',
          children: []
        },
        {
          name: 'historyVideo',
          path: '/video/history',
          meta: {
            type: '1',
            title: '历史视频'
          },
          component: 'historyVideo',
          children: []
        }
      ]
    },
    {
      name: 'face',
      path: '/face',
      meta: {
        type: '1',
        title: '人脸'
      },
      component: 'face',
      children: []
    }
  ]
}
