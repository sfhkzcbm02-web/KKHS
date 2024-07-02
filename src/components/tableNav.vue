<script setup>
import { onMounted } from 'vue'
import { useProductStore } from '@/stores/index'
import { useUserStore } from '@/stores/index'
import { useSearchStore } from '@/stores/index'

const SearchStore = useSearchStore()
const userStore = useUserStore()
const ProductStore = useProductStore()
onMounted(() => {
  ProductStore.GetGoodsTitleList()
})
</script>

<template>
  <nav class="left-content">
    <div class="logo"><a href="">KKHS</a></div>
    <div class="search">
      <input
        type="text"
        placeholder="尋找商品"
        @keydown.enter="SearchStore.GoSearch"
        v-model="SearchStore.SearchValue"
      />
    </div>
    <div class="list">
      <ul>
        <li><RouterLink to="/">首頁 | Home</RouterLink></li>
        <li v-for="item in ProductStore.GoodsTitleList" :key="item.id">
          <RouterLink :to="`/goods/${item.id}`">{{ item.title }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="Icon">
      <a href="#"><i class="bi bi-facebook"></i></a>
      <a href="#"><i class="bi bi-instagram"></i></a>
      <a href="#"><i class="bi bi-line"></i></a>
    </div>
    <div class="service">
      <RouterLink v-if="userStore.userInformation.token" to="/personalInfo/0"
        >個人帳戶</RouterLink
      >
      <RouterLink v-else @click="userStore.goInfoOrLogin" to="">會員登入</RouterLink>
      <RouterLink to="/">聯絡我們</RouterLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav.left-content {
  height: 890px;
  width: 20%;
  padding: 23px 10px 10px 30px;
  position: fixed;

  div.logo {
    width: 80px;
    height: 35px;

    a {
      display: block;
      background-color: rgb(30, 30, 68);
      color: white;
      text-decoration: none;
      text-align: center;
      line-height: 35px;
      font-size: 20px;
      font-weight: 800;
    }
  }

  div.search {
    height: 60px;
    line-height: 60px;

    input {
      width: 100%;
      height: 27px;
      border: none;
      outline: none;
      background: transparent;
      border-bottom: 1px solid black;
    }
  }

  div.list {
    ul {
      list-style: none;
      padding: 0;
      margin-bottom: 16px;

      li {
        height: 45px;
        // line-height: 45px;
        margin-bottom: 5px;
        a {
          text-decoration: none;
          color: black;
          font-size: 13px;
          white-space: wrap;
          &:hover {
            text-decoration: line-through;
            text-decoration-color: rgb(87, 87, 111);
            text-decoration-thickness: 3px;
          }
        }
      }
    }
  }

  div.Icon {
    font-size: 30px;
    display: flex;

    a {
      color: black;
      margin-right: 8px;
    }
  }

  div.service {
    font-size: 16px;
    margin-top: 50px;
    display: flex;
    flex-direction: column;

    span {
      margin-top: 10px;
      cursor: pointer;
    }
    a {
      margin-top: 10px;
      cursor: pointer;
      text-decoration: none;
      color: black;
    }
  }
}

@media screen and (max-width: 992px) {
  nav.left-content {
    display: none;
  }
}
</style>
