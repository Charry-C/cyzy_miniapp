<script setup>
//
import {useFormStore} from '@/stores/modules/formInfo'
import {ref,reactive,onMounted} from 'vue'
const emit=defineEmits(['get-allow'])
const formData=useFormStore().formData


let imageValue=reactive([])
let contact=ref('')


const listStyle=reactive({
	"height": 100,	// 边框高度
	"width": 100,	// 边框宽度
	"border":{ // 如果为 Boolean 值，可以控制边框显示与否
		"color":"#ccc",		// 边框颜色
		"width":"2px",		// 边框宽度
		"style":"solid", 	// 边框样式
		// "radius":"50%", 		// 边框圆角，支持百分比
        "padding":"5vw"
	}
})

//region method
    function select(e){
		console.log('选择文件：',e)
	}
	// 获取上传进度
	function progress(e){
		console.log('上传进度：',e)
	}
	
	// 上传成功
	function success(e){
		console.log('上传成功')
	}
	
	// 上传失败s
	function fail(e){
		console.log('上传失败：',e)
	}

    function upload(e){
        console.log(e);
        const tempFilePaths = e.tempFilePaths
        uni.uploadFile({
            url: '/server',
            fileType: 'image',
            filePath: tempFilePaths[0],
            name: 'file',
            success: ({ data, statusCode }) => {
                console.log(data,statusCode);
            },
            fail: (error) => {
                console.log(222);

            }
        })
    }


    //表单处理逻辑
    const checkContact=()=>{
        console.log("contact.value",contact.value);
        if(contact.value.length>0 ){
        formData.recruitmentContact.wechatID=contact.value
        emit('get-allow',true)
    }else if(contact.value.length>=20){
        formData.recruitmentContact.wechatID=''
        emit('get-allow',false)
    }else{
        formData.recruitmentContact.wechatID=''
        emit('get-allow',false)
    }
    }


//endregion method
    onMounted(()=>{
        if(formData.recruitmentContact.wechatID!==''){
            contact.value=formData.recruitmentContact.wechatID
        }
        checkContact()
    })
</script>

<template>
  <view class="contact-form">
    <view class="tip">请提供联系方式</view>
    <input class="uni-input" placeholder="请您的微信号/手机号" v-model="contact" @input="checkContact"/>
    <view class="upload-info">
        <view class="small-tip">上传群二维码</view>
            <uni-file-picker 
            v-model="imageValue" 
            fileMediatype="image"
            :imageStyles="listStyle" 
            mode="grid" 
            @select="upload" 
            @progress="progress" 
            @success="success" 
            @fail="fail" 
            />
        </view>
  </view>
</template>



<style lang="scss">
.contact-form{
    padding: 0 3vw;
    .tip{
        font-size: 6vw;
        margin: 10vw 0;
        text-align: center;
    }
    .uni-input{
        height: 6vh;
        line-height: 6.5vh;
        padding: 0 2vw;
        font-size: 3.5vw;
        border: 0.5vw solid #ccc;
        border-radius: 1vw;
    }
    .upload-info{
        margin-top: 5vh;
        .small-tip{
            margin-bottom: 3vh;
        }
    }
}

</style>