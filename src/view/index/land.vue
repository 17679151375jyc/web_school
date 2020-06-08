<template>
  <div>
      <!-- 登录页面 -->
    <el-drawer
        :visible.sync="drawer"
        :direction="direction"
        :before-close="handleClose"
        :withHeader="withHeader"
        :wrapperClosable='wrapperClosable'>
        <i @click="closeBox" class="iconfont iconchuyidong1 icon_css"></i>
        <div class="dis_column_center_center cont_box">
            <div class='dis_column_around_center log_img_css'>
                <img class="img_logo" :src="require('_icon/logo1.png')" alt="图片加载失败">
                <span class="he_css" v-if="spanTitleShow == 0">登陆你的账号</span>
                <span class="he_css" v-if="spanTitleShow == 1">注册你的账号</span>
                <span class="he_css" v-if="spanTitleShow == 2">找回你的密码</span>
            </div>
            <div class="dis_row_center_center div_form_css" v-if="spanTitleShow == 0">
                <el-form style="margin-top:50px" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
                    <el-form-item label="账号" prop="nameNumder">
                        <el-input v-model="ruleForm.nameNumder" clearable placeholder="请输入你的账号或手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="ruleForm.password" show-password placeholder="请输入你的密码"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <span class="lianjie_css" @click="pageForget">忘记密码？</span>
                        <span class="lianjie_css" style="margin-left: 140px" @click="pageRegister">没有账号？</span>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary"  @click="confirmClick" style="width:100%">登录</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <Register @registerClose="backLand" v-if="spanTitleShow == 1"/>
            <Forget @forgetClose="backLand" v-if="spanTitleShow == 2"/>
            
        </div>
    </el-drawer>

   </div>
</template>
<script>
import Register from './register'
import Forget from './forget'
export default {
   name: 'land',
   components:{
       Register,
       Forget
   },   
   data() {
       return {
           direction: 'rtl',
           wrapperClosable: true,//遮罩层
           withHeader: false,//标题栏
           spanTitleShow: 0,
           token: '登录后拿到的token',
           ruleForm: {
               nameNumder: null,
               password: null,   
           },
           rules: {
               nameNumder:[
                    { required: true, message: '请输入账号', trigger: '' }
               ],
               password:[
                   { required: true, message: '请输入密码', trigger: 'blur' },
                  { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
               ]
           },

       }
   },
   props:{
        drawer:{    //抽屉开关
            type: Boolean,
            default: false,
        },
   },
   methods:{
        confirmClick(){
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    let { nameNumder, password } = this.ruleForm
                    if( nameNumder == 'muxiao521' && password == 'q123456' ){
                        this.$store.dispatch('setToken', this.token);
                        this.$message({
                            message: '登录成功',
                            type: 'success',
                            center: true,
                            duration: 1000,
                            offset: 200
                        });
                        this.$emit("handleClose", 'success');
                    }else{
                        this.$message.error('登录失败');
                    }
                } else {
                    return false;
                }
            })
        },
       handleClose(){
           if(false){
                this.$confirm('输入的信息将会被清除，是否离开？').then(()=> {
                    this.$emit("handleClose");
                })
                .catch(_ => {
                    this.$emit("handleClose");
                });
           }else{
               this.$emit("handleClose");
           }
           
       },
       backLand(){
           this.spanTitleShow = 0
       },
       pageRegister(){
           this.spanTitleShow = 1
       },
       pageForget(){
           this.spanTitleShow = 2
       },
       closeBox(){
           this.handleClose()
       },
   }
}

</script>
<style lang="stylus" scoped>
@import '~@/style/index.stylus';
</style>