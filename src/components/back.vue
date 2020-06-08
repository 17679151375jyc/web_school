<template>
   <div>
       <div class="fixd_back" @click="bankClick">
            <i class="iconfont iconbefore" style="font-size: 40px"></i>
        </div>
   </div>
</template>

<script>
export default {
   name: '',
   data() {
       return {
           
       }
   },
   methods:{
       bankClick(){
           this.$router.go(-1);
       },
   }
}

</script>
<style lang='stylus' scoped>
.fixd_back{
    position fixed
    top 3vh
    left  3vh
    width 5vw
    height 5vw
    border-radius 50%
    background-color #BAE1FD
    cursor pointer
    color #53B3F8
    line-height 5vw
    text-align center
}

</style>