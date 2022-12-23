<template>
  <div class="main">
    <img src="../assets/1.png" alt="背景" class="bg"/>
    <div class="damo">
      <h1>这是我们</h1>
      <div class="damo1">
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
          <img src="../assets/yyr.jpg"/>
      </div>
  </div>
  </div>
  </template>
  
  <style>
  
  h1 {
    color: aquamarine;
  }
  
  .bg {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    display: block;
    top: 0;
    z-index:0;
  }
  
  .main {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  
  .damo {
    position: absolute;
    width: 500px;
    height: 500px;
    margin-right: 333px;
    overflow: hidden;
  }
  
  .damo1 {
    width: 5000px;
    height: 500px;
    margin: 50px auto;
    animation:text 15s infinite  linear;
    font-size: 0px;
  }
  
  .damo1 img {
    width: 500px;
    height: 500px;
    float: left;
  }
  
  @keyframes text {          /*0%-20%是播放下一个图片，0%-10%是图片暂停的时间*/
    0%,5%{
        margin-left:0px;
    }
    10%,15%{
        margin-left:-500px;
    }
    20%,25%{
        margin-left:-1000px;
    }
    30%,35%{
        margin-left:-1500px;
    }
    40%,45%{
        margin-left:-2000px;
    }
    50%,55% {
        margin-left: -2500px;
    }
    60%,65%{
        margin-left: -3000px;
    }
    70%,75% {
        margin-left: -3500px;
    }
  }
  </style>