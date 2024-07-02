<script setup>
import { useCartStore } from '@/stores/index'
import { useUserStore } from '@/stores/index'

const userStore = useUserStore()
const cartStore = useCartStore()
//前往個人頁面(沒登入，跳轉到登入頁面)
</script>

<template>
  <div class="person-cart">
    <div @click="cartStore.open()" class="cart">
      <span>{{ cartStore.CartCount }}</span
      ><i class="bi bi-cart-check"></i>
    </div>
    <div @click="userStore.goInfoOrLogin" class="person">
      <i class="bi bi-person-fill"></i>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.person-cart {
  top: 50%;
  right: 0;
  position: fixed;
  z-index: 700;
  cursor: pointer;
  div {
    width: 48px;
    height: 48px;
    background-color: rgb(52, 52, 209);
    position: relative;
    z-index: 700;
    margin-bottom: 5px;

    span {
      width: 13px;
      height: 13px;
      background-color: rgb(236, 233, 233);
      color: black;
      font-weight: bolder;
      position: absolute;
      z-index: 100;
      left: 33px;
      top: 3px;
      border-radius: 8px 8px 8px 8px;
      text-align: center;
      line-height: 13px;
      font-size: 12px;
    }

    i {
      font-size: 33px;
      color: white;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

@media screen and (max-width: 992px) {
  div.person-cart {
    display: none;
  }
}
</style>
