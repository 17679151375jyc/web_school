<template>
  <div>
    <!-- 注册页面 -->
    <!-- <ul class="dis_column_center_center ul_css">
      <li class="dis_row_around_center li_css">
        <span class="lable_span_css">请输入你的账号：</span>
        <el-input v-model="input" clearable placeholder="请输入你的账号"></el-input>
      </li>
      <li class="dis_row_around_center li_css">
        <span class="lable_span_css">请输入你的密码：</span>
        <el-input v-model="input" show-password placeholder="请输入你的密码"></el-input>
      </li>
      <li class="dis_row_around_center li_css">
        <span class="lable_span_css">请确认你的密码：</span>
        <el-input v-model="input" show-password placeholder="请确认你的密码"></el-input>
      </li>
      <li class="dis_row_between_center li_css">
        <span class="lable_span_css">请选择你的性别：</span>
        <div class="dis_row_default_center sex_box">
          <template>
            <el-radio v-model="radio" label="1">帅哥</el-radio>
            <el-radio v-model="radio" label="2">美女</el-radio>
          </template>
        </div>
      </li>
      <li class="dis_row_between_center li_css">
        <span class="lable_span_css">请选则年龄层次：</span>
        <div class="dis_row_default_center sex_box">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </li>
      <li class="dis_row_end_center li_css">
        <el-button @click="backLand">返回登录</el-button>
        <el-button type="primary" class="register_css">注册</el-button>
      </li>
    </ul>-->
    <div class="dis_row_center_center div_form_css">
      <el-form
        style="margin-top:20px"
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="80px"
        class="demo-ruleForm"
      >
        <el-form-item label="账号" prop="nameNumder">
          <el-input v-model="ruleForm.nameNumder" clearable placeholder="请输入你的账号"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="phone">
          <el-input v-model="ruleForm.phone" placeholder="请输入你的手机号"></el-input>
        </el-form-item>
        <el-form-item label="验证码：" prop="code">
          <el-input v-model="ruleForm.code" style="width:120px" placeholder="请输入验证码"></el-input>
            <el-button type="primary" plain :disabled="loading"  :loading="loading" style="width:130px;margin-left:15px" @click="getPhoneCode">{{ text }}</el-button>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" show-password placeholder="请输入你的密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="passwordAglan" v-if="passShow">
          <el-input v-model="ruleForm.passwordAglan" show-password placeholder="请确认你的密码"></el-input>
        </el-form-item>
        <el-form-item  label="性别">
          <template>
            <el-radio v-model="ruleForm.radio" label="0">帅哥</el-radio>
            <el-radio v-model="ruleForm.radio" label="1">美女</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="年龄段" prop="ageList">
          <el-select v-model="ruleForm.ageList" placeholder="请选择你的年龄段">
            <el-option
              v-for="item in options"
              :key="item.ageList"
              :label="item.label"
              :value="item.ageList"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="backLand">返回登录</el-button>
          <el-button type="primary" style="float:right;width:100px" @click='confirmClick'>注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      input: "",
      value: 1,
      text: "获取验证码",
      loading: false,
      passShow: false,
      ruleForm: {
        nameNumder: null,
        passwordAglan: null,
        password: null,
        radio: "0",
        ageList: 1
      },
      rules: {
        nameNumder: [
          { required: true, message: "请输入账号", trigger: "blur" }
        ],
        code:[
          { required: true, message: "请输入手机接收的验证码", trigger: "blur" },
          { min: 4, max: 4, message: "验证码长度为4位数字", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 12, message: "长度在 6 到 12 个字符", trigger: "blur" }
        ],
        passwordAglan: [
          { required: true, message: "请再次输入你的密码", trigger: "blur" },
          {
            validator:  (rule, value, callback) => {              
              setTimeout(() => {
                if (this.ruleForm.password !== value ) {
                  callback(new Error('两次输入的密码不一致'))
                } else {
                  callback();
                }
              }, 0)
            }
          }
        ],
        phone:[
          { required: true, message: "手机号不能为空", trigger: "blur" },
          {
            validator:  (rule, value, callback) => {
              setTimeout(() => {
                let res = /^1[3|4|5|6|7|8][0-9]{9}$/
                if (!res.test(value)) {
                  callback(new Error('请输入11手机号'))
                } else {
                  callback();
                }
              }, 0)
            }
          }

        ]
        

      },
      options: [{
          ageList: 0,
          label: "15以下"
        },{
          ageList: 1,
          label: "15~24岁"
        },{
          ageList: 2,
          label: "24~36岁"
        },{
          ageList: 3,
          label: "36~60岁"
        },{
          ageList: 4,
          label: "60岁以上"
        }
      ]
    };
  },
  watch:{
    'ruleForm.password':function (val, oldVal){
      if(val){
        this.passShow = true
      }else{
        this.ruleForm.passwordAglan = null
        this.passShow = false
      }
    }
  },
  props: {},
  methods: {
    confirmClick(){
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          console.log(this.ruleForm)
        } else {
          return false;
        }
      })
    },
    getPhoneCode() {
      this.loading = true;
      let time = 60;
      this.text = `${time}秒之后重试`;
      const setTime = setInterval(() => {
        if (time == 1) {
          clearTimeout(setTime);
          this.loading = false;
          this.text = "获取验证码";
        } else {
          time--;
          this.text = `${time} s后重试`;
        }
      }, 1000);
    },
    backLand() {
      this.$emit("registerClose");
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@/style/index.stylus';
</style>