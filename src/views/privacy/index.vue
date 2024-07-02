<script setup>
import { useUserStore } from '@/stores/index'

const UserStore = useUserStore()
</script>
<template>
  <div class="form-container PersonInfomation">
    <el-form>
      <h1>會員資料</h1>
      <el-form-item label="電子郵件">
        <el-input type="email" disabled v-model="UserStore.userInformation.data.email" />
      </el-form-item>
      <el-form-item label="手機號碼">
        <el-input disabled v-model="UserStore.userInformation.data.phone" />
      </el-form-item>
      <el-form-item label="帳號">
        <el-input disabled v-model="UserStore.userInformation.data.accountNumber" />
      </el-form-item>
      <el-form-item label="密碼">
        <el-input disabled v-model="UserStore.userInformation.data.password" />
      </el-form-item>
      <el-form-item label="名字">
        <el-input disabled v-model="UserStore.userInformation.data.userName" />
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
div.PersonInfomation {
  .el-form {
    h1 {
      font-size: 16.8px;
      font-weight: 700;
    }
    left: 15px;
    position: relative;
    width: 60%;
    .el-form-item {
      margin-top: 30px;
      label {
        font-size: 15px;
        color: black;
      }
    }
  }
}
</style>
