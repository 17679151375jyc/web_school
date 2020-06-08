<template>
  <div>
    <el-dialog
      title="编辑资料"
      :center="true"
      :before-close="handleClose"
      :visible.sync="dialogVisible"
      :close-on-click-modal="false"
      width="40%"
      top="50px"
    >
      <div class="contant_css">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="名称">
            <el-input style="width:320px" v-model="ruleForm.name" clearable placeholder="请输入你的名称"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input
              type="number"
              :maxlength="100"
              style="width:320px"
              v-model="ruleForm.age"
              clearable
              placeholder="请输入你的年龄"
            ></el-input>
          </el-form-item>
          <el-form-item label="地区">
            <el-cascader
              style="width:320px"
              size="large"
              :options="options"
              v-model="selectedOptions"
              @change="handleChange"
            ></el-cascader>
          </el-form-item>
          <el-form-item label="学校名称">
            <el-input
              style="width:320px"
              v-model="ruleForm.schoolName"
              clearable
              placeholder="请输入你的学校名称"
            ></el-input>
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input
              :maxlength="40"
              type="textarea"
              style="width:320px;"
              v-model="ruleForm.nameText"
              clearable
              placeholder="请输入你的个性签名(最长40个字符)"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="confirmClick">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { regionData } from "element-china-area-data";
export default {
  name: "",
  data() {
    return {
      options: regionData,
      selectedOptions: [],
      ruleForm: {
        nameNumder: null,
        password: null,
        age: null,
        nameText: null,
        naem: null,
        provinceCode: null,
        cityCode: null,
        areaCode: null
      },
      rules: {
        name: [
          { required: true, message: "请输入你的名称", trigger: "blur" },
          { max: 6, message: "名称长度最大为6个字符", trigger: "blur" }
        ],
        age: [{ required: true, message: "请输入年龄", trigger: "blur" }],
        schoolName: [
          { required: true, message: "请输入学校名称", trigger: "blur" }
        ],
        nameText: [
          { required: true, message: "请输入个性签名", trigger: "blur" }
        ]
      }
    };
  },
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    handleChange(value) {
        this.ruleForm.provinceCode =value[0]
        this.ruleForm.cityCode =value[1]
        this.ruleForm.areaCode =value[2]
    },
    confirmClick() {
      
    },
    handleClose() {
      this.$emit("editClose");
    }
  }
};
</script>
<style lang='stylus' scoped>
.contant_css {
  min-height: 300px;
  width: 96%;
  border: 1px solid #38f;
  border-radius: 5px;
  padding: 0 2%;
  padding-top: 10px;
  margin: 0 auto;
}
</style>