<template>
    <img src="../assets/1.png" alt="背景" class="bg"/>
    <div class="main">
      <h1>琴理工作室</h1>
      <p>工作室成立于2016年</p>
      <p>是由沈阳理工大学教务处组建的学生开发团队</p>
      <p>现设有前端组，后端组，运维组，算法组，产品组，视觉组和运营组</p>
      <el-button @click="router_jump" class="el-button-new" type="primary">联系我们</el-button>
    </div>
  </template>
  
  <style scoped lang="less">
    .bg {
      position: absolute;
      left: 0;
      display: block;
      top: 0;
      z-index:0;
      width: 100%;
      height: 100%;
    }
    .main {
      top: 12%;
      left: 7%;
      position: absolute;
      z-index: 100;
      color: white;
      text-align: left;
      display:block;
    }
    .el-button-new {
      background-color:#794ff7;
      color: white;
    }
  </style>
  
  <script setup lang="ts">
    import router from '../router';
    function router_jump():void {
      router.push("baoming");
    }
  </script>