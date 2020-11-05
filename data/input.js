var json = [
  /* <----question example---->
  {
    "id": "",
    "content": "",
    "answers": [{
        "value": "a",
        "content": ""
      },
      {
        "value": "b",
        "content": ""
      },
      {
        "value": "c",
        "content": ""
      },
      {
        "value": "d",
        "content": ""
      },
      {
        "value": "e",
        "content": ""
      }
    ]
  }, 
  */
 wx.request({
  url: 'http://localhost:8081/questionnaire/selectAll', //仅为示例，并非真实的接口地址
  data: {
    
  },
  header: {
    'content-type': 'application/json' // 默认值
  },
  success (res) {
    console.log(res.data)
  }
}),
  {
    "id": "1",
    "content": "公司是否在业务计划和经营方针中明确了知识产权方针?",
    "answers": [{
        "value": "a",
        "content": "暂无"
      },
      {
        "value": "b",
        "content": "是，文件中曾出现过知识产权方针，但大部分员工现在都记不清了"
      },
      {
        "value": "c",
        "content": "是，知识产权人员都清楚知识产权方针"
      },
      {
        "value": "d",
        "content": "是，技术人员都清楚知识产权方针"
      },
      {
        "value": "e",
        "content": "管理层都清楚知识产权方针"
      }
    ]
  }, {
    "id": "2",
    "content": "公司是否在管理人员会议等高层会议上讨论知识产权战略?",
    "answers": [{
        "value": "a",
        "content": "暂无"
      },
      {
        "value": "b",
        "content": "是，曾召开过此类会议"
      },
      {
        "value": "c",
        "content": "是，定期召开此类会议"
      },
      {
        "value": "d",
        "content": "是，只要涉及重大项目的会议都会有知产战略议题"
      },
      {
        "value": "e",
        "content": "是， 只要涉及企业战略的会议都会有知产战略议题"
      }
    ]
  }
]

//数据output
module.exports = {
  testJsonList: json
}