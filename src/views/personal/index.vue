<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores'

//控制點擊時亮燈
const List = ['個人資訊', '會員點數', '優惠券', '訊息', '訂單']
const activeIndex = ref(0)
const setActive = (index = 0) => {
  activeIndex.value = index
  Router.push('/personalInfo/privacy')
  ChangeRoute(index)
}
const userStore = useUserStore()
const Router = useRouter()
const ChangeRoute = (index) => {
  Router.push(`/personalInfo/${index}`)
}
</script>
<template>
  <div class="Sign-out"><span @click="userStore.SingOut">登出</span></div>
  <div class="box">
    <div class="nav">
      <ul>
        <li
          v-for="(item, index) in List"
          :key="index"
          :class="{ active: activeIndex === index }"
          @click="setActive(index)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <RouterView></RouterView>
  </div>
</template>
<style lang="scss" scoped>
div.Sign-out {
  width: 70%;
  position: relative;
  right: -25%;
  margin-top: 5.1vw;
  span {
    cursor: pointer;
    color: rgb(78, 78, 78);
    font-size: 18px;
    font-weight: 700;
    border-bottom: 1px solid black;
    &:hover {
      color: black;
    }
  }
}
div.box {
  width: 70%;
  position: relative;
  right: -25%;
  margin-top: 1.1vw;
  border: 0.85px solid rgb(156, 152, 152);

  .nav {
    ul {
      padding: 0;
      display: flex;
      width: 100%;
      li {
        flex: 1;
        text-decoration: none;
        list-style: none;
        margin: 0;
        border-bottom: 0.85px solid rgb(156, 152, 152);
        border-right: 0.85px solid rgb(156, 152, 152);
        padding: 0.6vw 0;
        text-align: center;
        color: rgb(156, 152, 152);
        border-collapse: collapse;
        cursor: pointer;
      }
      li.active {
        border-bottom: none;
        color: black;
      }
    }
  }
}
</style>
