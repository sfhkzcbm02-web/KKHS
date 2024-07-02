<script setup>
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['toggle'])
const props = defineProps({
  isShow: Boolean
})

const ctlList = () => {
  emit('toggle', false)
}
</script>

<template>
  <div v-show="props.isShow" class="nav-list">
    <div class="nav-list-icon">
      <i @click="ctlList" class="bi bi-x-square"></i>
    </div>
    <div class="list-page">
      <ul>
        <li><a href="">限量 | Wooalong</a></li>
        <li><a href="">全部商品限量 | All Items</a></li>
        <li><a href="">上身限量 | Top</a></li>
        <li><a href="">下著限量 | Bottom</a></li>
        <li><a href="">外套限量 | Outwear</a></li>
        <li><a href="">鞋類限量 | shoes</a></li>
        <li><a href="">飾品限量 | Accessories</a></li>
        <li><a href="">配件限量 | Other Accessories</a></li>
        <li><a href="">套裝限量 | Set</a></li>
        <li><a href="">正裝限量 | Suut</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.nav-list {
  display: block;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgb(207, 196, 196);
  z-index: 300;
  height: 100vh;

  .nav-list-icon {
    width: 100%;
    text-align: right;
    padding: 10px;
    padding-bottom: 0;

    i {
      font-size: 30px;
      position: relative;
      right: 10px;
    }
  }

  .list-page {
    ul {
      padding-left: 0;
      // padding-bottom: 55px;
      // display: flex;
      // flex-direction: column;
      // justify-content: space-around;
      // overflow: hidden;
      li {
        list-style: none;
        height: 70px;
        line-height: 70px;
        margin-left: 30px;

        a {
          text-decoration: 0;
          color: #333;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
