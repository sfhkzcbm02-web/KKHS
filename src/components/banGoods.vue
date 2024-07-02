<script setup>
import { useNewProductStore, useProductStore } from '@/stores/index'
import { onMounted } from 'vue'

const NewProductStore = useNewProductStore()
const ProductStore = useProductStore()

onMounted(() => {
  ProductStore.GetOnSaleList()
})
</script>

<template>
  <div class="right-content">
    <div class="banner">
      <img src="../assets/uploads/255.gif" alt="" />
    </div>
    <div class="goods new">
      <div class="title">
        <span> 「新品上市」 </span>
      </div>

      <div class="container-fluid">
        <div class="row goods-item-new-cotainer">
          <div
            v-for="item in NewProductStore.NewList"
            :key="item.id"
            class="col-lg-3 col-sm-6 col-6 goods-item-new"
          >
            <RouterLink @click.prevent="" :to="`/goodsdetail/${item.id}`"
              ><img :src="item.imgUrl" alt=""
            /></RouterLink>
            <div class="des">
              <p>{{ item.productName }}</p>
              <div class="price">
                <p class="originalPrice">NT: {{ item.marketPrice }}</p>
                <p class="discountPrice">NT: {{ item.hotPrice }}</p>
                <i
                  @click.prevent="NewProductStore.getOpenInfo(item.id)"
                  class="bi bi-cart-plus"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="goods on-sale">
      <div class="title">
        <span> 「清倉拍賣」 </span>
      </div>

      <div class="container-fluid">
        <div class="row goods-item-new-cotainer">
          <div
            v-for="item in ProductStore.OnSaleList"
            :key="item.id"
            class="col-lg-3 col-sm-6 col-6 goods-item-new"
          >
            <RouterLink @click.prevent="" :to="`/goodsdetail/${item.id}`"
              ><img :src="item.imgUrl" alt=""
            /></RouterLink>
            <div class="des">
              <p>{{ item.productName }}</p>
              <div class="price">
                <p class="originalPrice">NT: {{ item.marketPrice }}</p>
                <p class="discountPrice">NT: {{ item.hotPrice }}</p>
                <i
                  @click.prevent="NewProductStore.getOpenInfo(item.id)"
                  class="bi bi-cart-plus"
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.right-content {
  width: 80%;
  position: relative;
  right: -20%;

  .banner img {
    max-width: 100%;
  }

  .goods {
    .title {
      width: 100%;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 25px;
      margin: 13px 0;
      font-weight: 700;
    }

    .goods-item-new {
      a {
        text-decoration: none;
        display: block;
        text-align: center;
        img {
          max-width: 100%;
          height: 400px;
        }
      }
      .des {
        width: 100%;
        p {
          color: black;
          font-size: 16px;
          margin-top: 5px;
          font-weight: 600;
        }

        .price {
          display: flex;
          justify-content: center;
          .originalPrice {
            text-decoration: line-through;
            color: #333;
            margin-right: 30px;
          }
          .discountPrice {
            color: red;
          }
          i {
            font-size: 23px;
            color: #333;
            margin-left: 25px;
            cursor: pointer;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 992px) {
  div.right-content {
    width: 100%;
    right: 0;
  }
}
</style>
