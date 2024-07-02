<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'

const UserStore = useUserStore()
const router = useRouter()
const gosignup = () => {
  router.push('/signup')
}

//傳送資料 較驗替代
const formModel = ref({
  account: '',
  password: ''
})
const rules = {
  account: [{ required: true, message: '請輸入姓名', trigger: 'blur' }],
  password: [
    { required: true, message: '請輸入密碼', trigger: 'blur' },
    { pattern: /^\S{6,15}$/, message: '請輸入6-15位的數字(不能有空格)', trigger: 'blur' }
  ]
}
const form = ref()
const login = async () => {
  //登入之前先進行較驗
  await form.value.validate(async (valid) => {
    if (valid) {
      await UserStore.SingIn(formModel.value.account, formModel.value.password)
      if (UserStore.userInformation.success === true) {
        alert(UserStore.userInformation.message)
        router.push('/')
      } else {
        alert(UserStore.userInformation.message)
      }
    }
  })
}
//用AWIAT 等跳出 promise 有ERROR 就不會跳到下一步的ALERT
// const login = async () => {
//   console.log(form.value.validate())
//   await form.value.validate()
//   alert('登入成功')
//   router.push('/')
// }
</script>

<template>
  <div class="bgc">
    <div class="container" id="container">
      <div class="form-container sign-in">
        <el-form :rules="rules" :model="formModel" ref="form">
          <h1>登入</h1>
          <div class="social-icons">
            <a href="#" class="icon"><i class="fa-brands bi bi-facebook"></i></a>
            <a href="#" class="icon"><i class="fa-brands bi bi-google"></i></a>
            <a href="#" class="icon"><i class="fa-brands bi bi-instagram"></i></a>
            <a href="#" class="icon"><i class="fa-brands bi bi-line"></i></a>
          </div>
          <el-form-item label="帳號" prop="account">
            <el-input v-model="formModel.account" />
          </el-form-item>
          <el-form-item label="密碼" prop="password">
            <el-input v-model="formModel.password" type="password" show-password />
          </el-form-item>
          <a class="forget" href="#">忘記密碼?</a>
          <a @click="gosignup" class="singIn" href="#">註冊會員</a>
          <el-button @click="login">開始購物</el-button>
        </el-form>
      </div>
      <div class="toggle-container">
        <div class="toggle">
          <div class="toggle-panel toggle-right">
            <h1>韓國男裝購物商店</h1>
            <p>登入會員即享優惠</p>
            <button class="hidden" id="register" @click="gosignup">註冊會員</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
  min-height: 480px;
  position: relative;
  top: 150px;
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

.social-icons a .bi {
  font-size: 25px;
}

.social-icons a .bi-facebook {
  color: blue;
}

.social-icons a .bi-line {
  color: rgb(82, 168, 82);
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
.el-form-item {
  margin: 15px 0;
  width: 70%;
}
.sign-in form .forget {
  display: block;
  font-size: 16px;
  margin: 8px 0;
}
.container .sign-in a.singIn {
  display: none;
  font-size: 16px;
  margin: 8px 0;
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
  .sign-in .el-form a.singIn {
    display: block;
  }
}
</style>
