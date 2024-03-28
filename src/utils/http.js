import { useMemberStore } from '@/stores/modules/member'

const baseURL = 'http://127.0.0.1:8000'

//配置请求拦截
const httpInterceptor = {

    //拦截前触发
    invoke(options) {
        console.log("http.js--options:", options);

        //1. 非http/https开头需要拼接地址，例如index/getData
        if (!options.url.startsWith('http')) {
            options.url = baseURL + options.url
        }
        //2. 请求超时设置
        options.timeout = 10000

        //3. 添加小程序请求头标识，为了不覆盖原来的，所以用解构赋值语法获取原来的值
        options.header = {
            ...options.header,
            'source-client': 'miniapp'
        }

        //4. 利用pinia中的useMemberStore给返回的对象来设置token
        const memberStore = useMemberStore()
        console.log("http.js--memberStore.profile:", memberStore.profile);
        // const token = memberStore.profile.token
        // if (token) {
        //     options.header.Authorization = token
        // }
    }
}

//拦截request请求
uni.addInterceptor('request', httpInterceptor)

//拦截uploadFile 文件上传
uni.addInterceptor('uploadFile', httpInterceptor)


//封装promise的请求函数
export const http = (options) => {
    return new Promise((resolve, reject) => {
        uni.request({
            ...options,
            success(res) {
                if (res.statusCode >= 200 && res.statusCode < 300) {
                    resolve(res)
                }
                else if (res.statusCode == 401) {
                    const memberStore = useMemberStore()
                    memberStore.clearProfile()
                    uni.navigateTo({
                        url: '/pages/login/login'
                    })
                    reject(res)
                } else {
                    uni.showToast({
                        icon: 'none',
                        title: res.data.msg
                    })
                    reject(res)
                }
            },
            fail(err) {
                uni.showToast({
                    icon: 'none',
                    title: "网络错误"
                })
                reject(err)
            }
        })
    })
}