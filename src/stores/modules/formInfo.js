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

  const reSet = (form) => {
    for (let key in form) {
        if (Array.isArray(form[key])) {
            form[key] = [] // 重置数组为空数组
        } else if (typeof form[key] === 'object' && form[key] !== null) {
            // 如果是对象，则递归调用重置方法
            reSetObject(form[key])
        } else {
            form[key] = '' // 重置其他属性为空字符串
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



const applyformData=reactive({
    "applyType":"",
    "applyPosition":"",
    "perDescription":"",
    "salary":"",
    "contacts": [],
    "applyCampus":"",

})

const mode=ref(0)

    
    return {
        formData,
        applyformData,
        choose,
        reSet,
        mode
    }
})



// 选项式写法,传入的是对象,类似于
// export const useFormStore=defineStore('form',{
    
// })