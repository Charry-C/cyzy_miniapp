<script setup>
import { ref,reactive, nextTick, onMounted } from 'vue'
import contactCard from '@/components/contactCard.vue';
import {useFormStore} from '@/stores/modules/formInfo.js'

const contactType=reactive([ "微信","QQ","手机","邮箱"])
const formData=useFormStore().formData2

let contactsList=reactive(formData.contacts)

const checkIsRight=(e)=>{

}

const addItem=(type)=>{
    uni.vibrateShort()
    const item=ref({})
    for (let i = 0; i < contactType.length; i++) {
        if(contactType[i]==type){
            contactType.splice(i,1)
            break
        }
    }
    item.type=type
    item.value=''
    contactsList.push(item)

}

const delItem=(type)=>{
    for (let i = 0; i < contactsList.length; i++) {
        if(contactsList[i].type==type){
            contactsList.splice(i,1)
            contactType.push(type)
            break
        }
    }
   
}

onMounted(() => {

})
</script>

<template>
    <view class="tip">请选择您的联系方式</view>
    <contactCard v-for="(contact,index) in contactsList" :key="index" v-model="contact.value" :contact="contact" @del-item="delItem"/>
    <view class="add">
        <view class="contact-icon" @click="addItem(type)" v-for="(type,index) in contactType" :key="index">{{ type }}</view>

    </view>
</template>



<style lang="scss">
.tip{
    font-size: 6.5vw;
    font-weight: bold;
    margin-left: 5vw;
    margin-bottom: 3vh;
}
.add{
    display: flex;
    justify-content: space-evenly;
    margin: 5vw 0;
    padding-bottom: 15vh;
    .contact-icon{
        width: 13vw;
        height: 13vw;
        border-radius: 50%;
        color: #fff;
        font-size: 3vw;
        text-align: center;
        line-height: 13vw;
        font-weight: bold;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        &:nth-child(1){
        background-color: #00d24a;
        }
        &:nth-child(2){
            background-color: #0284f5;
            
        }
        &:nth-child(3){
            color: #000000;
            background-color: #efff13;
            
        }
        &:nth-child(4){
            background-color: #000000;
        }
    }
}
</style>