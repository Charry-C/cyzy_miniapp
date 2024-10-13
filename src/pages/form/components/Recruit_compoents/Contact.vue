<script setup>
//
import {useFormStore} from '@/stores/modules/formInfo'
import {ref,onMounted} from 'vue'
const emit=defineEmits(['get-allow'])
const formData=useFormStore().formData


let contact=ref('')



const selectImg = ()=>{
    uni.chooseImage({
    count: 1,
    sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
    sourceType: ['album'], //从相册选择
    success: function (res) {
      console.log(res);
        var tempFilePaths = res.tempFilePaths;
        uni.saveFile({
          tempFilePath: tempFilePaths[0],
          success: function (res) {
            console.log(res);
            var savedFilePath = res.savedFilePath;
            formData.recruitmentContact.groupQRCode.push(savedFilePath)
            console.log(formData.recruitmentContact.groupQRCode);
          }
      });
    }
  });
}

const upload = ()=>{
  uni.uploadFile({
			url: 'http://127.0.0.1:3000/upload', //测试通过
			filePath: formData.recruitmentContact.groupQRCode[0],
			name: 'file',
			formData: {
				'user': 'test'
			},
			success: (uploadFileRes) => {
				console.log(uploadFileRes.data);
			}
		});
}


  //表单处理逻辑
const checkContact=()=>{
  if(contact.value.length > 0 && contact.value.length < 20){
      formData.recruitmentContact.wechatID = contact.value
      emit('get-allow',true)
  }
  else{
      emit('get-allow',false)
  }
}


//endregion method
onMounted(()=>{
  // 获取缓存并渲染
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
            <view @click="selectImg">点我上传</view>
        </view>
        <image
              v-for="(imgUrl,index) in formData.recruitmentContact.groupQRCode"
              :key="index"
              :src="imgUrl"
            ></image>
        <button @click="upload">点我upload</button>
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
image {
  width: 100px;
  height: 100px;
}

</style>
