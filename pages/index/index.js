//index.js
//获取应用实例
const app = getApp()
var localData = require("../../data/input.js")
Page({
  data: {
    length: 0,
    answer: []
  },

  onLoad: function () {
    this.setData({
      showJsonList: localData.testJsonList
    })
    for (var question in this.data.showJsonList) {
      this.data.length++;
      this.data.answer.push('')
    }
    //console.log(length)
    
  },

  radioChange(e) {
    //用户点选radio，会返回“题号-选项”格式的数据，以下代码将数据分割后存入data
    var str = e.detail.value
    var split = str.search(/-/i)
    var id = str.substring(0, split)
    var chosen = str.substring(split + 1)
    this.data.answer[Number(id)] = chosen
  },

  bindSubmitTap: function () {
    console.log(JSON.stringify(this.data.answer))
    var complete = 1
    //检查问卷是否填写完成
    for (var cnt = 0; cnt < this.data.length; cnt++) {
      //console.log(this.data.answer[cnt].chosen)
      if (!this.data.answer[cnt]) {
        complete = 0;
        wx.showToast({
          title: '未填写完成',
          icon: 'none'
        })
      }
    }
    //console.log(complete)
  }
})