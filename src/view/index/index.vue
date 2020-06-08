<template>
  <div>
    <!-- 首页 -->
    <div class="div_box">
      <div class="info_css">
        <span class="out_css" @click="outClick" title="退出登录" v-if="infoShow">
          <i class="iconfont icontuichudenglu1" style="font-size: 25px"></i>
        </span>
        <img
          v-if="!infoShow"
          :src="require('_icon/touxiang.jpg')"
          class="header_img"
          @click="pageLand"
        />
        <img v-if="infoShow" :src="info.imgUrl" class="header_img" @click="pageLand" />
        <div class="info_box_css" v-if="infoShow">
          <div style="height:30px;line-height:30px;">
            <i class="iconfont iconnan" style="color:#1890FF;font-size: 13px;margin-right:5px" v-if="info.sex==0"></i>
            <i class="iconfont iconnv" v-else style="color:#FA20BD;font-size: 13px;margin-right:5px"></i>
            <span style="font-size: 20px;">{{info.name}}</span>
          </div>
          <div class="info_zh_css">
            <span style="font-size: 12px">账号：</span>
            <span style="font-size: 12px;color:#409EFF">{{ info.nameNumber }}</span>
          </div>
        </div>
        <div class="info_box_css" v-if="!infoShow">
          <span class="no_land_css">未登录</span>
        </div>
      </div>
      <el-menu
        style="height:59px;"
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        :background-color="backgroundColor"
        :text-color="textColor"
        :active-text-color="activeTextColor"
        :menu-trigger="menuTrigger"
      >
        <el-menu-item index="1" @click="pageLand">我的主页</el-menu-item>
        <el-menu-item index="2">校园论坛</el-menu-item>
        <el-menu-item index="3">图库一览</el-menu-item>
        <el-menu-item index="4">查找校景</el-menu-item>
        <el-menu-item index="5" :to="{path: '/index'}">慕校首页</el-menu-item>
      </el-menu>
    </div>
    <el-carousel
      style="position absolute;top:0;left:0;"
      ref="carousel"
      height="100vh"
      :autoplay="autoplay"
      :interval="interval"
      :direction="direction"
      :trigger="trigger"
      :initial-index="0"
      :loop="loop"
    >
      <el-carousel-item class="page_backimg">
        <span class="title_span_css">慕校——观看最真实的校图</span>
        <div class="page_box1">
          <div v-for="(item,index) in biyeImgList" :key="index">
            <transition name="el-zoom-in-center">
              <img 
                style="width:500px;height:300px" 
                :src="item.imgUrl" 
                v-if='index == indexShow' 
                alt="图片加载失败">
              </transition>
          </div>
        </div>
        <div class="page_box2">
          <div v-for="(item,index) in kaixueImgList" :key="index">
            <transition name="el-zoom-in-center">
              <img 
                style="width:500px;height:300px" 
                :src="item.imgUrl" 
                v-if='index == indexShow' 
                alt="图片加载失败">
            </transition>
          </div>
        </div>
        <canvas class="myCanvas" id="myCanvas" width='500'></canvas>
        <div class="cont_p_css1"></div>
        <p class="cont_p_css2"></p>
        <ul class="wen_css">
          <li v-for="(item, index) in textXuanChaun" :key='index'>
            <i class="iconfont iconyuandian" style="font-size: 15px;"></i>
            <span>{{ item }}</span>
          </li>
          <li>
            <i class="iconfont iconyuandian" style="font-size: 15px"></i>
            <span style="color:#0DF9E0;font-size: 30px;font-family:'华文行楷'">慕校</span><span>——最懂你的校园</span>
          </li>
        </ul>
        <ul class="defail_css">
          <li v-for="(item, index) in defailText" :key="index">
            <img :src="item.imgUrl" alt="图片加载失败">
            <span>{{ item.name }}</span>
          </li>
        </ul>
        <span class="hengxian_css"></span>
      </el-carousel-item>
      <el-carousel-item class="page_backimg">
        <h3 style='margin-top: 100px'>第二页暂未开发</h3>
      </el-carousel-item>
    </el-carousel>
    <Land :drawer="drawer" @handleClose="Close" />
  </div>
</template>
<script>
import Land from "./land";
export default {
  name: "index",
  data() {
    return {
      autoplay: true,
      interval: 500000,
      direction: "vertical", //竖滑
      trigger: "click", //指示点变化类型
      loop: true, //循环
      backgroundColor: "#EAFBFC", //导航背景
      textColor: "#38f", // 导航文字颜色
      activeIndex: "5",
      activeTextColor: "#0B69FD",
      menuTrigger: "hover",
      token: "",
      indexShow: 0,
      drawer: false,
      infoShow: false,
      biyeImgList:{
        0:{
          imgUrl: require('_imgList/biye1.jpg')
        },
        1:{
          imgUrl: require('_imgList/biye2.jpg')
        },
        2:{
          imgUrl: require('_imgList/biye3.jpg')
        },
        3:{
          imgUrl: require('_imgList/biye4.jpg')
        }
      },
      kaixueImgList:{
        0:{
          imgUrl: require('_imgList/kaixue1.jpg')
        },
        1:{
          imgUrl: require('_imgList/kaixue2.jpg')
        },
        2:{
          imgUrl: require('_imgList/kaixue3.jpg')
        },
        3:{
          imgUrl: require('_imgList/kaixue4.jpg')
        }
      },
      textXuanChaun:[
        '致力于更真实的校园内景', 
        '拒绝学校官方的美化效果', 
        '站内图片来源于在校学生', 
        '站内图片来源于在校学生'
      ],
      defailText: {
        0:{
          name: '位置',
          imgUrl: require('_imgList/weizhi.jpg')
        },
        1:{
          name: '课室',
          imgUrl: require('_imgList/keshi.jpg')
        },
        2:{
          name: '宿舍',
          imgUrl: require('_imgList/sushe.jpg')
        },
        3:{
          name: '操场',
          imgUrl: require('_imgList/caochang.jpg')
        },
        4:{
          name: '食堂',
          imgUrl: require('_imgList/shitang.jpg')
        },
        5:{
          name: '球场',
          imgUrl: require('_imgList/lanqiuchang.jpg')
        },
        6:{
          name: '绿化',
          imgUrl: require('_imgList/lvhua.jpg')
        },
        7:{
          name: '大门',
          imgUrl: require('_imgList/damen.jpg')
        },
        8:{
          name: '其他',
          imgUrl: require('_imgList/sheshi.jpg')
        }
      },
      info: {
        name: null,
        sex: 1,
        nameNumber: null,
        imgUrl: null
      }
    };
  },
  computed:{
    
  },
  watch: {
      
  },
  components: {
    Land
  },
  methods: {
    pageLand() {
      if (this.$store.state.user.token) {
        this.$router.push({ name: "home" });
      } else {
        this.drawer = true;
      }
    },
    handleSelect(key, keyPath) {
      switch (key) {
        case "2":
          this.$router.push({ name: "forum" });
          break;
        case "3":
          this.$router.push({ name: "imgPage" });
          break;
        case "4":
          this.$router.push({ name: "school" });
          break;
      }
    },
    Close(data) {
      this.drawer = false;
      if (data && data == "success") {
        this.infoShow = true;
        this.info = {
          name: "偷猪的女孩",
          nameNumber: "78932697",
          imgUrl: require('_imgList/10.jpg')
        };
      }
    },
    clear(){
        this.info = {}
        this.infoShow = false
    },
    outClick() {
      this.$confirm("您将退出登录，是否继续？", "提示", {
        confirmButtonText: "退出",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        this.$store.dispatch("setToken", "");
        this.$message({
          type: "success",
          message: "退出登录成功!",
          duration: 1000,
          center: true,
          offset: 200
        })
        this.clear()
      });
    },
    //画图形
    cansGunc(){
      let ctx = document.getElementById('myCanvas').getContext('2d');
        //画旗帜
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(500, 0);
        ctx.lineTo(450, 5);
        ctx.lineTo(250, 130);
        ctx.lineTo(50, 5);
        ctx.lineTo(0, 0);
        ctx.fillStyle = '#2E7AE6';
        ctx.fill() ;
        //正方形
        ctx.beginPath();
        ctx.moveTo(70, 3);
        ctx.lineTo(430, 3);
        ctx.lineTo(390, 30);
        ctx.lineTo(110, 30);
        ctx.fillStyle = '#7CB6F6';
        ctx.fill() ;
        // 梯形
        ctx.beginPath();
        ctx.moveTo(120, 35);
        ctx.lineTo(380, 35);
        ctx.lineTo(340, 60);
        ctx.lineTo(160, 60);
        ctx.fillStyle = '#7CB6F6';
        ctx.fill() ;
        // 小三角形
        ctx.beginPath();
        ctx.moveTo(170, 65);
        ctx.lineTo(330, 65);
        ctx.lineTo(250, 115);
        ctx.fillStyle = '#7CB6F6';
        ctx.fill() ;
    },
    lunbo(){
      let that = this
      setInterval(() => {
        that.indexShow = that.indexShow + 1
        if(that.indexShow>=3){
          that.indexShow = 0
        }else if(that.indexShow<=0){
          that.indexShow = 3
        }
      }, 3000);
    }
  },
  mounted() {
    this.token = this.$store.state.user.token;
    if(this.token){
        this.infoShow = true;
        this.info = {
          name: "偷猪的女孩",
          sex: 1,
          nameNumber: "78932697",
          imgUrl: require('_imgList/10.jpg')
        };
    }else{
        this.infoShow = false;
    }
    this.cansGunc()
    this.lunbo()
    }
  }
</script>
<style lang='stylus' scoped>
@import '~@/style/index.stylus';
</style>