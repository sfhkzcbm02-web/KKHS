<script setup>
import 'bootstrap-icons/font/bootstrap-icons.css'
import { ref } from 'vue'
import { useCartStore } from '@/stores/index'

const cartStore = useCartStore()

//控制列表開關
const closeList = () => {
  isShow.value = false
}
const isShow = ref(false)
const controlList = () => {
  isShow.value ? (isShow.value = false) : (isShow.value = true)
}
</script>

<template>
  <div class="mobile-nav">
    <div>
      <a href=""><i class="bi bi-house"></i></a>
    </div>
    <div @click.prevent="controlList">
      <a href=""><i class="bi bi-card-text"></i></a>
    </div>
    <div>
      <a href=""
        ><span>1</span><i class="bi bi-cart-check" @click.prevent="cartStore.open()"></i
      ></a>
    </div>
    <div>
      <a href=""><i class="bi bi-person-fill"></i></a>
    </div>
    <div>
      <a href=""><i class="bi bi-search"></i></a>
    </div>
  </div>
  <navList @toggle="closeList" :isShow="isShow" v-show="isShow"></navList>
</template>

<style lang="scss" scoped>
div.mobile-nav {
  width: 100%;
  display: none;
  justify-content: space-around;
  padding: 0 30px;
  height: 55px;
  line-height: 55px;
  background-color: white;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  position: fixed;
  bottom: 0;
  z-index: 1500;

  div {
    position: relative;

    a {
      color: #000000;

      span {
        background-color: orangered;
        position: absolute;
        color: black;
        line-height: 1.4666rem;
        height: 20px;
        left: 15px;
        border-radius: 3px 3px 3px 3px;
        font-size: 15px;
        font-weight: 800;
      }

      i {
        font-size: 25px;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  div.mobile-nav {
    display: flex;
  }
}
</style>
