import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore(
  'user-store',
  () => {
    //註冊相關服務
    const userInformation = ref(0)
    const SingUp = async (username, account, password, tel, email) => {
      const res = await axios.post('http://localhost:5194/api/User/register', {
        userName: username,
        accountNumber: account,
        password: password,
        phone: tel,
        email: email
      })
      //要直接使用資料要多加data
      userInformation.value = res.data
      isLogin.value = true
    }
    const router = useRouter()
    //登出按鈕
    const SingOut = () => {
      // 使用原生的confirm對話框
      const result = confirm('確定要登出嗎?')

      if (result) {
        // 確認操作
        alert('登出成功')
        // 執行相應的操作，例如刪除文件等
        localStorage.removeItem('user-store')
        userInformation.value = 0
        router.push('/login')
      } else {
        // 取消操作
        alert('登出失敗')
        // 可能執行取消操作的邏輯
      }
    }
    //登入相關服務
    const SingIn = async (account, password) => {
      const res = await axios.get(
        `http://localhost:5194/api/User/login?account=${account}&password=${password}`
      )
      userInformation.value = res.data
    }

    const isLogin = ref(false)
    const goInfoOrLogin = () => {
      if (userInformation.value.token == undefined) {
        router.push('/login')
      } else {
        router.push('/personalInfo/0')
      }
    }
    return {
      SingUp,
      SingIn,
      userInformation,
      goInfoOrLogin,
      SingOut
    }
  },
  {
    persist: true
  }
)
