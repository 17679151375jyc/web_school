<template>
   <div>
        <div class="header_css">
            <div class="dis_column_center_center box_img_but_css">
                <div class="box_img">
                    <img :src="info.imgList" class="header_img_css">
                </div>
                <span class='account_css'><span style="color:#38f">-</span>{{info.nameNumber}}<span style="color:#38f">-</span></span>
                <el-button type="primary" plain class="but_css" @click="setHeaderImg">更改资料</el-button>
            </div>
            <div class="box_name_css">
                <span class="name_css">{{ info.name }}</span>
                
                <ul>
                    <li><span class="age_css">性别：</span><span class="val_css">女</span></li>
                    <li><span class="age_css">年龄：</span><span class="val_css">24</span></li>
                    <li><span class="age_css">地区：</span><span class="val_css">江西省-宜春市</span></li>
                    <li><span class="age_css">学校：</span><span class="val_css">清华大学</span></li>
                    <li><span class="age_css">个性签名：</span><span class="val_css text_css">慕校网，帮你寻找你喜欢的学校</span></li>
                </ul>
            </div>
            <div class="new_css">
                <h2 style="color:#38f;margin-top:10px">我的主页</h2>
                <!-- <div class="friend_css"></div> -->
            </div>
        </div>
       <div class="conter_css"></div>
        <Edit @editClose="editClose" :dialogVisible='dialogVisible'/>
        <Back/>
   </div>
</template>

<script>
import Edit from './edit'
import Back from '_c/back'
export default {
   name: 'home',
   components:{
       Edit,
       Back
   },
   data() {
       return {
           dialogVisible: false,
           info: {
               name: '偷猪的女孩',
               nameNumber: '78932697',
               imgList: require('_imgList/10.jpg')
           }
       }
   },
   methods:{
       setHeaderImg(){
           this.dialogVisible = true
       },
       editClose(){
           this.dialogVisible = false
       }
   }
}

</script>
<style lang='stylus' scoped>
.header_css{
    width 1500px
    margin  0 auto
    padding 3vh 1vw
    min-height 280px
    border-bottom 2px solid #fff
    // background-color transparent
    background-color #fff
}
.box_img_but_css{
    height 282px    
    width 200px
    float left
    background-color #BAE1FD
    border-radius 5px
}
.but_css{
    width 80%
}
.box_img{
    position relative    
    width 160px
    height 160px
    border 3px solid #38f
    border-radius 50%
    float left
    margin-bottom 30px
}
.header_img_css{
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    border-radius 50%
}
.box_name_css{
    width 440px
    height 262px
    display block
    float left
    margin-left -5px
    text-align center
    padding 10px
    background-color #BAE1FD
    border-radius 5px
}
.box_name_css ul li{
    margin-top 10px
    clear both
    height 20px
}
.name_css{
    font-size 40px
    color #3388ff
}
.age_css{
    border-radius 3px
    background-color #F9FAEF
    color #555
    font-size 16px
    display block
    width 100px
    text-align right 
    float left
    font-size 14px
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.val_css{
    border-radius 2px
    font-size 14px
    display block 
    background-color #F9FAEF
    color #2A4877
    width 310px
    float left
    margin-left 10px
    padding 0 10px
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    text-align left 
}
.text_css{
    width 310px
    max-height 50px
    line-height 25px
    padding 0 10px
}
.new_css{
    width 750px
    height 282px 
    padding 0 20px   
    background-color #BAE1FD
    border-radius 5px
    margin-left 2vw
    float left
}
// .friend_css{
//     width 550px
//     margin-top 10px
//     height 200px
//     background-color #F9FAEF
//     border-radius 5px
//     box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
// }
.conter_css{
    width 1540px
    height 55vh
    background-color #BAE1FD
    margin 0 auto
    margin-top 30px
    border-radius 5px
}
.account_css{
    display block
    color #555
    font-size 18px
    margin -20px auto 10px auto
}
</style>