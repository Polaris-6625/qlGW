<template>
    <div class="root">
      <h1>掌上沈理</h1>
      <div class="main_flex">
        <img src="../assets/2.png"/>
        <div class="chilld_flex">
          <div  style="text-align: left;">
            <h2>1. 课程表查询：</h2>
            <p>
              更快更准确的查询上课的教室地点，授课老师等详细信息</p>                
          </div>
      
          <div style="text-align: left;">
            <h2>
              2. 成绩查询 :                
            </h2>
            <p>
              APP直连学校成绩数据库，更准确的更早的查询学习成绩；更先进的绩点算法，经过研发人员的多次测试以达到与学校绩点相同的标准                </p>                
          </div>
      
          <div  style="text-align: left;">
            <h2> 
              3. 报告会通知：                
            </h2>
            <p>
              快速准确的知道报告会，提前预约参加，大创学分再也不愁                
            </p>                
          </div>
      
          <div  style="text-align: left;">
            <h2> 
              4. 教务通知：                                
            </h2>
            <p>
              查询学校通知再也不用到官网了，掌上沈理直接可阅                                
            </p>                
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <style scoped>
  .root {
    color: white;
  }
  .main_flex {
    display: flex;
    flex-direction: row;
  }
  .chilld_flex {
    display: flex;
    flex-direction: column;
    animation: move_1 1s;
  }
    @keyframes moveH {
      from{margin-left: -1000%;}
      to{margin-left: 0;}
    }
    @keyframes move_1 {
      from{margin-left: 100%;}
      to{margin-left: 0;}
    }
    h1 {
      animation: moveH 2s;
    }
    .sun {
      animation: move_1 1s;
    }
  </style>