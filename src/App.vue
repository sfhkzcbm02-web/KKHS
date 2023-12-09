<script setup>
import { useUserStore } from '@/stores'

const userStore = useUserStore()
</script>

<template>
  <div>
    <p>{{ userStore.token }}</p>
    <el-button @click="userStore.setToken('dadsasd')">登入</el-button>
    <el-button @click="userStore.removeToken()">刪除</el-button>
  </div>
</template>

<style scoped></style>
