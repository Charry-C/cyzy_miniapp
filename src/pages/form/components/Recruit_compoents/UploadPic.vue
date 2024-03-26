<script setup>
//
import * as qiniu from 'qiniu-js'
import {useFormStore} from '@/stores/modules/formInfo'
import {ref,reactive} from 'vue'
let imageValue=reactive([])
const formData=useFormStore().formData
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
        const observable =qiniu.upload(e.tempFilePaths[0], null, 'A_B247s5kQyIZToHdZV0JMbxSw7NHcPaCE__k85s:e63v0YW0eRWMdNxaSmKMuXr1PmI=:eyJzY29wZSI6ImNoYXJyeWMiLCJkZWFkbGluZSI6MTcxMTU1ODI5OH0=')
        const observer = {
        next(res){
            // ...
            console.log("res",res);
        },
        error(err){
            // ...
        },
        complete(res){
            // ...
        }
        }
        const subscription = observable.subscribe(observer) // 上传开始
        console.log("subscription",subscription);
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
//endregion method
</script>

<template>
    <view class="upload-pic">
        <view class="tip">还可以上传{{formData.recruitmentType=="社团招募"?"社团相册":"团队相册"}}呀~</view>
        
        <view class="upload-info">
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
//
.upload-pic{
    padding: 3vw;
    .tip{
        text-align: center;
        font-size: 6vw;
        margin: 5vw;
    }
        .small-tip{
            font-size: 4vw;
            font-weight: bold;
            background-color: rgb(247, 250, 247);
            padding: 4vw 5vw;
            border-radius: 2vw;
            margin: 2vw 5vw;
            text-align: center;
        }
    .upload-info{
        margin: 3vw 0;
        
    }
}




</style>