const URI = 'http://localhost:3000/'
const wechat = require('./wechat')

function fetchApi (path, params) {
  return wechat.request(`${URI}${path}`, 'GET', params)
}

function postApi (path, params) {
  return wechat.request(`${URI}${path}`, 'POST', params)
}

function uploadApi (path, params) {
  return wechat.uploadFile(`${URI}${path}`, params)
}

/**
 * 根据经纬度获取城市
 * @param  {Number} latitude   经度
 * @param  {Number} longitude  纬度
 * @return {Promise}       包含抓取任务的Promise
 */
function getTemplates() {
  return fetchApi('templates.json')
    .then(res => res.data)
}

function getTemplate(id) {
  return fetchApi(`templates/${id}.json`)
    .then(res => res.data)
}

function detectFace(imageFile) {
  return uploadApi(`actors`, {filePath: imageFile, name: "image"})
    .then(res => JSON.parse(res.data))
}

function mergeFace(templateId, actorId) {
  return postApi(`mergings`, {merging: {template_id: templateId, actor_id: actorId}})
    .then(res => res.data)
}

module.exports = {
  getTemplates,
  getTemplate,
  detectFace,
  mergeFace
}
