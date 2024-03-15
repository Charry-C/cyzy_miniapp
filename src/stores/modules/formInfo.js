import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'

export const useFormStore=defineStore('form',()=>{
    const formData=reactive({
        "recruitmentType": "",
        "clubName": "",
        "clubDescription": [
          {
            "id":1,
            "department": "外联部",
            "description": "外联部负责社团的对外联系和合作。"
          },
          {
            "id":2,
            "department": "宣传部",
            "description": "宣传部负责社团的宣传工作。"
          },
          {
            "id":3,
            "department": "学术部",
            "description": "学术部负责组织学术活动。"
          }
        ],
        "tags": ["免早", "积累经验", "学习技能"],
        "recruitmentCampus": "佛山校区",
        "recruitmentPeriod": {
          "startDate": "",
          "endDate": ""
        },
        "recruitmentContact": {
          "wechatID": "charryc777",
          "groupQRCode": ["二维码1", "二维码2"]
        },
        "clubAlbum": ["照片1", "照片2"]
  })

  for(let key in formData){
    console.log(key+':'+formData[key]);
  }


    
    return {
        formData,

    }
})



// 选项式写法,传入的是对象,类似于
// export const useFormStore=defineStore('form',{
    
// })