<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
// import axios from 'axios'

const UserStore = useUserStore()
const router = useRouter()
const gologin = () => {
  router.push('/login')
}

//較驗表單
const formModel = ref({
  username: '',
  email: '',
  tel: '',
  password: '',
  account: ''
})
//校宴規則 注意 formModel跟 rule 內容配置順序
//trigger = 甚麼時候開始教驗
//pattern = 非空叫驗 \S 非空字符
const rules = {
  username: [
    { required: true, message: '請輸入姓名', trigger: 'blur' },
    { min: 2, max: 6, message: '必須輸入正確的姓名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '請輸入6-15位的數字(不能有空格)', trigger: 'blur' }
  ],
  account: [
    { required: true, message: '請輸入帳號', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '請輸入6-15位的數字(不能有空格)', trigger: 'blur' }
  ],
  email: [{ required: true, message: '請輸入電子郵件', trigger: 'blur' }],
  tel: [
    { required: true, message: '請輸入電話', trigger: 'blur' },
    {
      pattern: /^09\d{8}$/,
      message: '請輸入正確的電話號碼(不能有空格)',
      trigger: 'blur'
    }
  ]
}

const form = ref()
const register = () => {
  //登入之前先進行較驗
  form.value.validate(async (valid) => {
    if (valid) {
      await UserStore.SingUp(
        formModel.value.username,
        formModel.value.account,
        formModel.value.password,
        formModel.value.tel,
        formModel.value.email
      )
      if (UserStore.userInformation.success === true) {
        alert(UserStore.userInformation.message)
        router.push('/')
      } else {
        alert(UserStore.userInformation.message)
      }
    }
  })
}
</script>

<template>
  <div class="bgc">
    <div class="container" id="container">
      <div class="form-container sign-in">
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="formModel"
          :rules="rules"
          ref="form"
        >
          <h1>註冊會員</h1>
          <el-form-item label="電子郵件" prop="email">
            <el-input type="email" v-model="formModel.email" />
          </el-form-item>
          <el-form-item label="手機號碼" prop="tel">
            <el-input v-model="formModel.tel" />
          </el-form-item>
          <el-form-item label="帳號" prop="account">
            <el-input v-model="formModel.account" />
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input v-model="formModel.password" />
          </el-form-item>
          <el-form-item label="名字" prop="username">
            <el-input v-model="formModel.username" />
          </el-form-item>
          <a @click="gologin" class="singIn" href="#">登入會員</a>
          <el-button @click.prevent="register">開始購物</el-button>
        </el-form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-right">
            <h1>韓國男裝購物商店</h1>
            <p>登入會員即享優惠</p>
            <button class="hidden" id="register" @click="gologin">登入會員</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.el-form-item {
  margin-top: 18px;
  color: #333;
  font-weight: 700;
  width: 100%;
}
.bgc {
  width: 80%;
  position: absolute;
  top: 38px;
  right: 0;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

body {
  background-color: #c9d6ff;
  background: linear-gradient(to right, #e2e2e2, #c9d6ff);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}

.container {
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 580px;
  position: relative;
  top: 150px;
  margin-bottom: 100px;
}

.container p {
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.3px;
  margin: 20px 0;
}

.container span {
  font-size: 12px;
}

.container a {
  color: #333;
  font-size: 13px;
  text-decoration: none;
  margin: 15px 0 10px;
}

.container button {
  background-color: #3045e0;
  color: #fff;
  font-size: 18px;
  padding: 10px 45px;
  border: 1px solid transparent;
  border-radius: 8px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-top: 10px;
  cursor: pointer;
}

.container button.hidden {
  background-color: transparent;
  border-color: #fff;
}

.container form {
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  height: 100%;
}

.container input {
  background-color: #eee;
  border: none;
  margin: 8px 0;
  padding: 10px 15px;
  font-size: 13px;
  border-radius: 8px;
  width: 100%;
  outline: none;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in {
  left: 0;
  width: 50%;
  z-index: 2;
}

.sign-in H1 {
  font-weight: 600;
  font-size: 38px;
}

.container.active .sign-in {
  transform: translateX(100%);
}

.sign-up {
  left: 0;
  width: 50%;
  opacity: 0;
  z-index: 1;
}

.container.active .sign-up {
  transform: translateX(100%);
  opacity: 1;
  z-index: 5;
  animation: move 0.6s;
}

@keyframes move {
  0%,
  49.99% {
    opacity: 0;
    z-index: 1;
  }
  50%,
  100% {
    opacity: 1;
    z-index: 5;
  }
}

.social-icons {
  margin: 20px 0;
}

.social-icons a {
  border: 1px solid #ccc;
  border-radius: 20%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  width: 40px;
  height: 40px;
}

.toggle-container {
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: all 0.6s ease-in-out;
  border-radius: 150px 0 0 100px;
  z-index: 1000;
}

.container.active .toggle-container {
  transform: translateX(-100%);
  border-radius: 0 150px 100px 0;
}

.toggle {
  background-color: #3045e0;
  height: 100%;
  background: linear-gradient(to right, #5c6bc0, #3045e0);
  color: #fff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.container.active .toggle {
  transform: translateX(50%);
}

.toggle-panel {
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 30px;
  text-align: center;
  top: 0;
  transform: translateX(0);
  transition: all 0.6s ease-in-out;
}

.toggle-left {
  transform: translateX(-200%);
}

.container.active .toggle-left {
  transform: translateX(0);
}

.toggle-right {
  right: 0;
  transform: translateX(0);
}

.container.active .toggle-right {
  transform: translateX(200%);
}

/* 自己修改的 */
.sign-in form .forget {
  display: block;
  font-size: 16px;
}
.container .sign-in a.singIn {
  display: none;
  font-size: 16px;
}

.container .sign-in label {
  align-self: flex-start;
  position: relative;
  font-size: 13px;
}

.el-form button {
  margin-top: 15px;
  padding: 25px;
}
@media screen and (max-width: 992px) {
  .bgc {
    width: 100%;
  }
  .toggle-container {
    display: none;
  }
  .container div.sign-in {
    width: 100%;
  }
  .container {
    top: 50px;
  }
  .container .sign-in .el-form a.singIn {
    display: block;
  }
}
</style>
