import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'

export const useFormStore=defineStore('form',()=>{
    const formData=reactive({
        "recruitmentType": "",
        "clubName": "",
        "clubDescription": [
          {
            "id":1,
            "department": "",
            "description": ""
          },
        ],
        "tags": [],
        "recruitmentCampus": "",
        "recruitmentPeriod": {
          "startDate": "",
          "endDate": ""
        },
        "recruitmentContact": {
          "wechatID": "",
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