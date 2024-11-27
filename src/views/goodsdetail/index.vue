<script setup>
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useCartStore, useUserStore } from '@/stores/index'
import { BaseUrl } from '@/api/base'

const CartStore = useCartStore()
const UserStore = useUserStore()
const Info = ref(0)
const route = useRoute()
const router = useRouter()
const GetInfo = async (id = route.params.id) => {
  const res = await axios.get(`${BaseUrl}/api/Layout/${id}`)
  Info.value = res.data
  Info.value.color = Info.value.color.split(',')
  Info.value.size = Info.value.size.split(',')
  Color.value = Info.value.color[0]
  Size.value = Info.value.size[0]
}
const AddTOcart = async (id, count, color, size) => {
  await CartStore.AddTOcart(id, count, color, size)
  Count.value = 1
}
onMounted(() => {
  GetInfo(route.params.id)
})
const goPay = async (id, count, color, size) => {
  if (UserStore.userInformation.token) {
    await AddTOcart(id, count, color, size)
    router.push('/pay')
    CartStore.close()
  } else {
    router.push('/login')
    CartStore.close()
    alert('請先登入會員')
  }
}
const Color = ref(0)
const Size = ref(0)
const Count = ref(1)
const add = () => {
  Count.value++
}
const sub = () => {
  Count.value--
}
</script>
<template>
  <div class="content">
    <div class="left">
      <img :src="Info.imgUrl" alt="" />
      <img :src="Info.imgUrl" alt="" />
    </div>
    <div class="right">
      <div class="info-container">
        <div class="productName">
          <span>{{ Info.productName }}</span>
        </div>
        <div class="des">
          <p>-眾多韓星著用款</p>
          <p>-弧線抽鬚設計，破壞感超強</p>
          <p>-袖長皺褶堆疊感，更顯街頭感</p>
          <p>-成套搭配，一秒變韓國穿搭客</p>
        </div>
        <div class="price">
          <span>NT$ </span><strong>{{ Info.marketPrice }}</strong>
        </div>
        <div class="delivery">
          <span
            >全店，全館滿1888享免運費優惠(若遇個人因素退貨未達免運門檻需承擔運費)</span
          >
        </div>
        <div class="color">
          <label for="color">顏色</label>
          <select class="form-select" name="color" id="color" v-model="Color">
            <option v-for="item in Info.color" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="size">
          <label for="size">尺寸</label>
          <select class="form-select" name="size" id="size" v-model="Size">
            <option v-for="item in Info.size" :key="item" :value="item">
              {{ item }}
            </option>
          </select>
        </div>
        <div class="quantity">
          <label>數量</label>
          <div class="calculator">
            <span class="sub" @click="sub">-</span>
            <input placeholder="1" type="text" v-model="Count" />
            <span class="add" @click="add">+</span>
          </div>
        </div>
        <div class="button-cotainer">
          <button class="btn1" @click="AddTOcart(Info.id, Count, Color, Size)">
            加入購物車
          </button>
          <button class="btn2" @click="goPay(Info.id, Count, Color, Size)">
            直接購買
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.content {
  width: 80%;
  right: -20%;
  position: relative;
  display: flex;

  div.left {
    width: 40vw;
    img {
      max-width: 100%;
    }
  }

  div.right {
    div.info-container {
      width: 20vw;
      margin: 3.5vw 8vw;
      font-family: '微軟正黑體', 'Helvetica', 'Arial', 'LiHei Pro', '黑體-繁', sans-serif;
      position: sticky;
      top: 100px;
      .productName {
        margin-bottom: 1.5vw;
        span {
          font-size: 19px;
          font-weight: 600;
        }
      }

      .des p {
        font-size: 15px;
        color: rgb(115, 112, 112);
        margin-bottom: 0.01vw;
      }

      .price {
        margin: 2.35vw 0;
        span {
          font-size: 15px;
          font-weight: 700;
        }
      }
      .delivery {
        border-left: 3px solid rgb(47, 46, 46);
        padding-left: 6px;

        span {
          font-size: 15px;
        }
      }

      .color {
        margin-top: 2vw;
        label {
          display: block;
          font-weight: 600;
          font-size: 16.5px;
        }
        select {
          border-color: rgb(63, 63, 63);
        }
      }
      .size {
        margin-top: 1vw;
        label {
          display: block;
          font-weight: 600;
          font-size: 16.5px;
        }
        select {
          border-color: rgb(63, 63, 63);
        }
      }
      .quantity {
        display: flex;
        justify-content: space-between;
        height: 2vw;
        line-height: 1.75vw;
        margin-top: 1.5vw;
        .calculator {
          border: 1px rgb(190, 188, 188) solid;
          display: flex;
          input {
            width: 5vw;
            text-align: center;
            border: transparent;
            outline: none;
          }
          .add {
            display: inline-block;
            width: 30px;
            text-align: center;
            font-size: 23px;
            border-left: 0.8px rgb(166, 163, 163) solid;
            cursor: pointer;
            &:hover {
              color: rgb(197, 194, 194);
            }
          }
        }
        .sub {
          display: inline-block;
          width: 30px;
          text-align: center;
          font-size: 35px;
          border-right: 0.8px rgb(166, 163, 163) solid;
          cursor: pointer;
          &:hover {
            color: rgb(197, 194, 194);
          }
        }
      }
      .button-cotainer {
        margin-top: 1vw;
        display: flex;
        justify-content: space-between;
        .btn1 {
          width: 8vw;
          height: 3vw;
          background-color: rgb(30, 30, 68);
          color: white;
          border: transparent;
          font-size: 18px;
          font-weight: 600;
        }
        .btn2 {
          width: 8vw;
          height: 3vw;
          background-color: #898686;
          border: transparent;
          color: white;
          font-size: 18px;
          font-weight: 600;
        }
      }
    }
  }
}
</style>
