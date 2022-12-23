<template>
    <div class="Main">
        <img class="img" src="../assets/logo.png"/>
        <div class="rout" style="margin-left: 10px;">
            <router-link to="/index">首页</router-link>
        </div>
        <div class="rout">
            <router-link class="router-link" to="/allB">部门</router-link>
        </div>
        <div class="rout">
            <router-link class="router-link" to="/download">下载</router-link>
        </div>
        <div class="rout">
            <router-link class="router-link" to="/us">我们</router-link>
        </div>
        <div class="rout">
            <router-link class="router-link" to="/talk">联系</router-link>
        </div>
        <img class="img" src="../assets/logo.png"/>
    </div>
    <router-view></router-view>
  </template>
  
  <style scoped>
    .img {
        height: 100%;
        width: 10%;
    }
    .Main{
        padding-top: 15px;
        height: 4%;
        text-align: center;
        width: 100%;
        position: absolute;
        top: 0%;
        right: 0;
        left: 0;
        display: flex;
        font-size: 24px;
        justify-content: center;
        z-index: 1;
    }
    .rout {
        text-align: center;
        background-color: inherit;
        flex-grow: 1;
        margin-right: 10px;
    }
    .rout:hover {
        border-bottom: 5px;
        border-top:0px;
        border-left: 0px;
        border-right: 0px;
        border-color: chartreuse;
        border-style:solid;
        transition: all 1s;
    }
    router-view {
        width: 100%;
        height: auto;
    }
  </style>