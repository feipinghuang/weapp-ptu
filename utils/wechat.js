function request(url, method, params) {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      method,
      data: Object.assign({}, params),
      success: resolve,
      fail: reject
    })
  })
}

function uploadFile(url, params) {
  return new Promise((resolve, reject) => {
    wx.uploadFile({
      url,
      filePath: params['filePath'],
      name: params['name'],
      formData: Object.assign({}, params['formData']),
      success: resolve,
      fail: reject
    })
  })
}

function login () {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}

function getUserInfo () {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

function setStorage (key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

function getStorage (key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

function getLocation (type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

function getImageInfo (src) {
  return new Promise((resolve, reject) => {
    wx.getImageInfo({src, success: resolve, fail: reject})
  })
}

function saveImageToPhotosAlbum (filePath) {
  return new Promise((resolve, reject) => {
    wx.saveImageToPhotosAlbum({filePath, success: resolve, fail: reject})
  })
}

module.exports = {
  login,
  getUserInfo,
  setStorage,
  getStorage,
  getLocation,
  request,
  uploadFile,
  getImageInfo,
  saveImageToPhotosAlbum,
  original: wx
}
