<template>
    <div class="upMenu">
        <img src="../assets/bl.png" class="img"/>
        <img src="../assets/dy.png" class="img"/>
        <img src="../assets/gzh.jpg" class="img"/>
        <img src="../assets/qqq.png" class="img"/>
        <img src="../assets/bd.png" class="img"/>
        <img src="../assets/xhs.png" class="img"/>
        <img src="../assets/zh.png" class="img"/>
        <img src="../assets/ks.png" class="img"/>
    </div>
    <div class="downMenu">
      <img class="imgSet" src="../assets/logo.png" title="琴理工作室" alt="琴理工作室"/>
      <div class="botton_div">
        <p>琴理工作室
          联系邮箱：ql@sylu.edu.cn</p>
          <p>地址：沈阳理工大学综合楼C312</p>
      </div>
    </div>
  </template>
  
  <style scoped>
  .botton_div{
    margin-top: 240px;
    flex-grow: 1;
    margin-bottom: 0;
    text-align: right;
    color: aliceblue;
  }
    .upMenu {
      display: flex;
      flex-direction: row;   
      height: 70%;
      width: 100%;                                     
    }
    .downMenu {
      height: 30%;
      width: 100%;    
      display: flex;  
    }
    .imgSet {
      float: left;
      height: 100%;
      width: 30%;
      margin-top: 240px;
      margin-bottom: 0;
      margin-left: 0;
    }
    .img {
      flex-grow: 1;
      margin-left: 100px;
      text-align: center;
      z-index: 10;
      max-width: 120px;
      max-height: 120px;
    }
  </style>