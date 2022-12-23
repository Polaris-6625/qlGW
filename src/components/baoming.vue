<template>
    <h1>报名界面</h1>
    <div>
        <input type="text" v-model="std_name" placeholder="姓名"/>
        <input type="text" v-model="std_number" placeholder="学号"/>
        <input type="text" v-model="std_xy" placeholder="学院"/>
        <input type="text" v-model="std_zy" placeholder="专业"/>
        <input type="text" v-model="std_forward" placeholder="志愿"/>
        <input type="text" v-model="std_my" placeholder="介绍"/>
        <button @click="send">报名</button>
    </div>
</template>

<script setup lang="ts">
    import { ref , Ref } from "vue";
    import axios from 'axios';
    let std_name:Ref<string> = ref('');
    let std_number:Ref<string> = ref('');
    let std_xy:Ref<string> = ref('');
    let std_zy:Ref<string> = ref('')
    let std_forward:Ref<string> = ref('');
    let std_my:Ref<string> = ref('');
    let result = "success";
    function send():void {
        axios({
            url:"http://localhost:5438/add",
            data:{
                "std_name":std_name.value,
                "std_number":std_number.value,
                "std_xy":std_xy.value,
                "std_zy":std_zy.value,
                "std_forward":std_forward.value,
                "std_my":std_my.value
            },
            method:"post"
        }).then((resp)=>{
            if(resp.data === "successful") {
                console.log("报名成功");
                alert("报名成功")
            }
            else {
                console.log("报名失败");
                alert("报名失败");
            }
        })
    }
</script>