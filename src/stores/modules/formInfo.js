import {defineStore} from 'pinia'
import {ref,reactive} from 'vue'

export const useFormStore=defineStore('form',()=>{
    const formData=reactive({
        "recruitmentType": "",
        "clubName": "",
        "gameName":"",
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

  let choose=ref(0)

  const reSet = () => {
    for (let key in formData) {
        if (Array.isArray(formData[key])) {
            formData[key] = [] // 重置数组为空数组
        } else if (typeof formData[key] === 'object' && formData[key] !== null) {
            // 如果是对象，则递归调用重置方法
            reSetObject(formData[key])
        } else {
            formData[key] = '' // 重置其他属性为空字符串
        }
    }
}

const reSetObject = (obj) => {
    for (let key in obj) {
        if (Array.isArray(obj[key])) {
            obj[key] = [] // 重置数组为空数组
        } else if (typeof obj[key] === 'object' && obj[key] !== null) {
            // 如果是对象，则递归调用重置方法
            reSetObject(obj[key])
        } else {
            obj[key] = '' // 重置其他属性为空字符串
        }
    }
}



const formData2=reactive({
    "contacts": [    ]
})

    
    return {
        formData,
        formData2,
        choose,
        reSet
    }
})



// 选项式写法,传入的是对象,类似于
// export const useFormStore=defineStore('form',{
    
// })