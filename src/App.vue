<template>
  <div id="app">
    <transition name="el-zoom-in-top" v-if='show'>
      <div class="dis_column_center_center defult">
        <i class="el-icon-loading icon_css"></i>
        <span class="span_index">Hello! 欢迎来到慕校

        </span>
      </div>
    </transition>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      show: false
    }
  },
  mounted(){
    setTimeout(()=>{
      this.show = false
    }, 2000)
  }
}
</script>

<style lang='stylus'>
html,body{
    /* cursor: url('./img/iconImg/Xy.png'),auto; */
}
.defult{
  width 100vw
  height 100vh
  background-color #6C98FB
  position absolute
  z-index 1000
}
.span_index{
  display block
  color #588BFD
  width 350px
  height 60px
  margin-top 20px
  background-color #DFE7F9
  border-radius 10px
  line-height 60px
  text-align center
  font-size 30px
}
.icon_css{
  display block
  font-size 80px
  color #ffffff
}
</style>
