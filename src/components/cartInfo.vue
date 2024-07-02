<script setup>
import { onMounted } from 'vue'
import { useNewProductStore, useCartStore, useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'

const NewProductStore = useNewProductStore()
const cartStore = useCartStore()
onMounted(() => {
  NewProductStore.getNewList()
  cartStore.GetCart()
})
//跳轉結帳頁面
const userStore = useUserStore()
const router = useRouter()
const goPay = () => {
  if (userStore.userInformation.token) {
    router.push('/pay')
    cartStore.close()
  } else {
    router.push('/login')
    cartStore.close()
    alert('請先登入會員')
  }
}
</script>

<template>
  <div class="drawer" v-show="cartStore.isopen">
    <div class="title">
      <i class="bi bi-x-square" @click="cartStore.close()"></i>
    </div>
    <div v-if="cartStore.CartInfo != 0" class="info-box">
      <div class="info" v-for="item in cartStore.CartInfo" :key="item.id">
        <div class="img"><img :src="item.imgUrl" alt="" /></div>
        <div class="info-box">
          <div class="info-main">
            <div>{{ item.procductName }}</div>
            <div>
              <span>{{ item.color }}</span
              ><span>{{ item.size }}</span>
            </div>
          </div>
          <div class="info-footer">
            <div>
              <span>{{ item.count }}</span>
              <strong> x </strong>
              <span>{{ item.price }}</span>
            </div>
            <i class="bi bi-trash" @click="cartStore.DeleteItem(item.id)"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="noItem" v-else>購物車目前沒有商品</div>
    <div class="pay">
      <button @click="goPay()">結帳</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.drawer {
  min-width: 30%;
  height: 75%;
  right: 0;
  background-color: rgb(218, 218, 221);
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 2011;
  .title {
    width: 100%;
    position: relative;
    margin-bottom: 6px;
    height: 60px;
    i {
      font-size: 25px;
      right: 15px;
      top: 15px;
      position: absolute;
      cursor: pointer;
    }
  }
  div.info-box {
    height: 80%;
    overflow: auto;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
    .info {
      width: 100%;
      padding: 0 15px;
      display: flex;
      margin-bottom: 6px;

      div img {
        flex: 1;
        background-color: green;
        height: 100px;
        width: 100%;
      }

      div.info-box {
        flex: 3;
        height: 100px;

        .info-main {
          padding: 1px 5px;
          div {
            margin-bottom: 3px;

            span {
              margin-right: 8px;
            }
          }
        }

        .info-footer {
          padding: 10px 5px;
          display: flex;
          justify-content: space-between;

          i {
            cursor: pointer;
          }
        }
      }
    }
  }
  div.noItem {
    height: 80%;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
  }
  div.pay {
    text-align: center;
    button {
      background-color: #070628;
      color: white;
      padding: 0.5vw 2vw;
      border-radius: 8px;
      margin-top: 5px;
    }
  }
}
</style>
