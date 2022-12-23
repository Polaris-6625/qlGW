<template>
    <div class="main">
      <div class="grid_main">
        <div class="front-end">
          <h4 class="title">前端<img src="../assets/qd.png" alt="前端logo" style="width: 25px;height:21px;"/></h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;前端组的成员根据产品和视觉组做出的模型图进行代码开发，使一个网站拥有良好的动效和交互式响应，同时实现对后端传来的数据的进一步处理和渲染。工作室现有的技术栈可实现对app、PC端网页及移动端网页的合理开发。
          </p>
        </div>
        <div class="back-end">
          <h4 class="title">后端<img src="../assets/hd.png" alt="前端logo" style="width: 25px;height:21px;"/></h4>
          <p>
            后端组主要负责根据产品和前端的需求设计接口和系统架构、进行数据库的分析与建立、对逻辑进行分析，并不断对工作室现有产品进行维护以及优化。
          </p>
          <p>
            编程语言：Python、Golang,Java
          </p>
          <p>
            数据库：MariaDB、Redis、MongoDB
          </p>
          <p>使用工具：Nginx、Docker、Tomcat、K8S、CephFS 等</p>
          <p>框架：Gin、Gorm、SpringBoot</p>
        </div>
        <div class="Operation-and-maintenance">
          <h4 class="title">运维<img src="../assets/yw.png" alt="运维logo" style="width: 25px;height:21px;"/></h4>
          <p>
            运维主要负责服务器的维护，调整系统架构与内部运行逻辑；优化网络储存架构，简化数据的传输、储存和访问；设计高性能数据库集群；规划分布式与虚拟化应用,打造的强大自动化管理、监控平台；网络安全测试等等。运维组使用的技术：
          </p>
          <p>
          语言:Python、Golang,Java，数据库：MariaDB、Redis、MongoDB，使用工具：Nginx、Docker、Tomcat、K8S、CephFS 等
          </p>
        </div>
        <div class="algorithm">
          <h4 class="title">算法<img src="../assets/sf.png" alt="算法logo" style="width: 25px;height:21px;"/></h4>
          <p>
            在赛场上成为沉着coding得ACMer，锻炼自己的编程能力和算法思想，增加一段不同以往的竞赛体验，甚至享受赛场上思维碰撞解开题目的成就。
          </p>
        </div>
        <div class="product">
          <h4 class="title">产品<img src="../assets/cp.png" alt="产品logo" style="width: 25px;height:21px;"/></h4>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;产品组主要负责对产品做需求分析、形成需求文档，进行初期的软件功能与布局的绘制，之后交给设计部门与技术部门，并在整个研发过程中督促项目的进程，解决技术部门对需求功能的问题。在项目上线后，与运营组共同完成调研工作收集整理bug反馈和用户的新需求，为之后的更新迭代做好准备。
          </p>
        </div>
        <div class="vision">
          <h4 class="title">视觉<img src="../assets/sj.png" alt="视觉logo" style="width: 25px;height:21px;"/></h4>
          <p class="vision_p">
            视觉组主要负责工作室网站和移动端产品的UI设计，并与其他各组相互配合组织设计规范的建立与维护，配合开发团队完成设计的落地工作，参与项目相关HTML页面的制作，与产品，运维，运营等各组配合，结合用户体验对产品进行持续的优化。
          </p>
        </div>
        <div class="operate">
          <h4 class="title">运营<img src="../assets/yy.png" alt="运营logo" style="width: 25px;height:21px;"/></h4>
          <p class="operate_p">
            运营组负责整个工作室的运营工作，包括公众号的运营、撰写各种文案、制作视频，并督促各项目组的进度，与产品组共同进行产品运营，在整个项目周期中协助其他各组的工作。在产品上线后做好宣传工作，并收集各种反馈以便于不断对产品进行更新、优化。另外运营组还负责工作室的各种宣传工作、在工作室招新、培训、举办各种活动时做好后勤工作。
          </p>
        </div>
      </div>
    </div>
    </template>
    
    <style scoped lang="less">
      .title {
        color:white;
        margin-top: 0px;
        text-align: left;
        padding-left: 15px;
      }
      * {
        text-align: left;
        color:white;
      }
      .main {
        margin-top: 20px;
      }
      .grid_main {
        width: 1000px;
        height:800px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      }
      @keyframes show_color {
        from{background-color: #794ff7;}
        to{background-color: #904ff7;}
      }
      .front-end {
        background-color: #794ff7;
        grid-column-start: 1;
        grid-column-end: 21;
        grid-row-start: 1;
        grid-row-end: 10;
        font-size: 23px;
      }
      .front-end:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .back-end {
        background-color: #794ff7;
        grid-column-start: 22;
        grid-column-end: 31;
        grid-row-start: 1;
        grid-row-end: 22;
        font-size: 23px;
      }
      .back-end:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .Operation-and-maintenance {
        background-color: #794ff7;
        grid-column-start: 1;
        grid-column-end: 11;
        grid-row-start: 11;
        grid-row-end: 22;
      }
      .Operation-and-maintenance:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .product {
        background-color: #794ff7;
        grid-column-start: 1;
        grid-column-end: 10;
        grid-row-start: 23;
        grid-row-end: 33;
        font-size: 13px;
      }
      .product:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .algorithm {
        background-color: #794ff7;
        grid-column-start: 12;
        grid-column-end: 21;
        grid-row-start: 11;
        grid-row-end: 22;
        font-size: 23px;
      }
      .algorithm:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .vision {
        background-color: #794ff7;
        grid-column-start: 11;
        grid-column-end: 20;
        grid-row-start: 23;
        grid-row-end: 33;
      }
      .vision_p {
        margin-top: -12px;
      }
      .vision:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      .operate {
        background-color: #794ff7;
        grid-column-start: 21;
        grid-column-end: 31;
        grid-row-start: 23;
        grid-row-end: 33;
        font-size: 12px;
      }
      .operate_p {
        margin-top: -32px;
      }
      .operate:hover {
        background-color:darkturquoise;
        transition: all 1s;
      }
      h4 {
        font-size: 24px;
      }
    </style>