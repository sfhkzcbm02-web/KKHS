<script setup>
import { useNewProductStore, useCartStore } from '@/stores/index'

const NewProductStore = useNewProductStore()
const cartStore = useCartStore()
</script>

<template>
  <div class="bgc" v-show="NewProductStore.isShow">
    <div class="info">
      <i @click="NewProductStore.close" class="bi bi-x-square"></i>
      <div class="left">
        <img :src="NewProductStore.OpenInfo.imgUrl" alt="" />
      </div>
      <div class="right">
        <div class="des">
          <p>{{ NewProductStore.OpenInfo.productName }}</p>
        </div>
        <div class="price">
          <span>NT$</span>
          <strong>{{ NewProductStore.OpenInfo.hotPrice }}</strong>
        </div>
        <div class="color">
          <label @click="NewProductStore.test">顏色</label>
          <select name="color" id="color" v-model="NewProductStore.Color">
            <option
              v-for="subitem in NewProductStore.OpenInfo.color"
              :key="subitem"
              :value="subitem"
            >
              {{ subitem }}
            </option>
          </select>
        </div>
        <div class="size">
          <label>尺寸</label>
          <select name="size" id="size" v-model="NewProductStore.Size">
            <option
              v-for="subitem in NewProductStore.OpenInfo.size"
              :key="subitem"
              :value="subitem"
            >
              {{ subitem }}
            </option>
          </select>
        </div>
        <div class="quantity">
          <label for="">數量</label>
          <div class="controlQT">
            <span class="add" @click="NewProductStore.add">+</span>
            <span>{{ NewProductStore.Count }}</span>
            <span class="sub" @click="NewProductStore.sub">-</span>
          </div>
        </div>
        <div class="buy">
          <button
            @click="
              cartStore.AddTOpay(
                NewProductStore.OpenInfo.id,
                NewProductStore.Count,
                NewProductStore.Color,
                NewProductStore.Size
              )
            "
            type="button"
            class="btn btn-primary"
          >
            立即購買
          </button>
          <button
            @click="
              cartStore.AddTOcart(
                NewProductStore.OpenInfo.id,
                NewProductStore.Count,
                NewProductStore.Color,
                NewProductStore.Size
              )
            "
            type="button"
            class="btn btn-secondary"
          >
            加入購物車
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// * {
//   box-sizing: border-box;
// }
div.bgc {
  width: 100%;
  height: 100vh;
  background-color: rgb(36, 35, 35, 0.5);
  position: fixed;
  top: 0;
  z-index: 900;

  .info {
    width: 610px;
    height: 500px;
    background-color: white;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 15px;
    display: flex;
    border-radius: 5px;

    i {
      position: absolute;
      top: 0;
      right: 10px;
      font-size: 20px;
      font-weight: 500;
      cursor: pointer;
    }
    .left {
      flex: 1;
      position: relative;
      img {
        height: 100%;
        max-width: 100%;
      }
    }

    .right {
      flex: 1;
      background-color: white;
      padding: 8px 15px;

      p {
        color: black;
        font-weight: 550;
        font-size: 18px;
      }

      .price {
        color: black;
      }

      .color {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        width: 100%;

        label {
          font-size: 15px;
        }

        select {
          margin-top: 5px;
          height: 33px;
          background: transparent;
          border-radius: 2px;
          padding: 5px 7px;

          option {
            font-weight: normal;
            display: block;
            height: 100px;
            white-space: nowrap;
          }
        }
      }

      .size {
        margin-top: 25px;
        display: flex;
        flex-direction: column;
        width: 100%;

        label {
          font-size: 15px;
        }

        select {
          margin-top: 5px;
          height: 33px;
          background: transparent;
          border-radius: 2px;
          padding: 5px 7px;

          option {
            font-weight: normal;
            display: block;
            height: 100px;
            white-space: nowrap;
          }
        }
      }

      .quantity {
        margin-top: 35px;
        display: flex;
        width: 100%;
        justify-content: space-between;

        label {
          font-size: 15px;
        }

        .controlQT {
          display: flex;
          justify-content: space-between;
          width: 110px;
          border: 1px solid black;
          font-size: 20px;
          padding: 0 5px;
          position: relative;
          top: -1px;

          .sub {
            &:hover,
            &:active {
              color: gray;
              cursor: pointer;
            }
          }

          .add {
            &:hover,
            &:active {
              color: gray;
              cursor: pointer;
            }
          }
        }
      }

      .buy {
        margin-top: 25px;
        display: flex;
        justify-content: space-between;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  div.bgc {
    .info {
      width: 100%;
    }
  }
}
</style>
