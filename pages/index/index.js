const app = getApp();

Page({
  data: {
    templates: []
  },

  onLoad () {
    app.ptu.getTemplates().then(templates => {
      this.setData({ templates: templates })
    })
  }
})
