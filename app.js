const ptu = require('./utils/ptu.js')
const wx = require('./utils/wechat.js')

App({
  onLaunch: function () {
  },

  ptu: ptu,
  wx: wx,
  
  globalData: {
    userInfo: null
  }
})
