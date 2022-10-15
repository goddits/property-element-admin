<template>
  <div class="login">
    <div class="login-box">
      <h3 class="login-title">系统登录</h3>
      <!-- form表单 -->
      <div class="login-from">
        <el-form
          ref="ruleFormRef"
          :model="userLogin"
          status-icon
          :rules="rules"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="邮箱" prop="email" >
            <el-input v-model="userLogin.email" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password" >
            <el-input
              v-model="userLogin.password"
              :type="pass"
              autocomplete="off"
            />
            <span style="right: 10px; margin-top: 5px; position: absolute">
              <el-icon v-if="!flag" @click="passShow('01')"><View /></el-icon>
              <el-icon v-if="flag" @click="passShow('02')"><Hide /></el-icon>
            </span>
          </el-form-item>
          <el-form-item label="验证码" prop="verification">
            <el-input v-model="userLogin.verification"  />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(ruleFormRef)"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from "vue";
import { LoginParams } from "@/types/login";
import {useRouter} from 'vue-router'
import type { FormInstance } from "element-plus";
const ruleFormRef = ref<FormInstance>()

const userLogin: LoginParams = reactive({
  email: "",
  password: "",
  verification: "",
});

const flag = ref(false);
const pass = ref("password");
const router = useRouter()

const passShow = (v: any) => {
  switch (v) {
    case "01":
      flag.value = !flag.value;
      pass.value = "text";
      break;
    case "02":
      flag.value = !flag.value;
      pass.value = "password";
  }
};

const email = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入邮箱'))
  } else {
    if (userLogin.email !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const password = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (userLogin.password !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}

const verification = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请输入验证码'))
  } else {
    if (userLogin.verification !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const rules = reactive({
  email: [{ validator: email, trigger: 'blur' }],
  password: [{ validator: password, trigger: 'blur' }],
  verification: [{ validator: verification, trigger: 'blur' }],
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      router.push('/home')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

onMounted(() => {
  userLogin.email = "admin@gmail.com";
  userLogin.password = "admin";
  userLogin.verification = `XT88`;
});
</script>

<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  background-color: #505770;
  background-image: url(https://unsplash.it/1600/900?random);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center 0;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  &-box {
    width: 40vw;
    height: 40vh;
    border-radius: 20px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  &-title {
    text-align: center;
    margin-top: 20px;
    font-size: 20px;
    font-weight: bolder;
  }
  &-from {
    width: 40vw;
    height: 35vh;
    line-height: 35vh;
    display: flex;
  }
  .el-form {
    margin: 0 auto;
  }
  .el-form-item {
    margin: 20px;
    text-align: center;
  }
  .el-input {
    width: 20vw;
  }
  .el-button {
    width: 20vw;
    margin: 0 auto;
  }
}
</style>
