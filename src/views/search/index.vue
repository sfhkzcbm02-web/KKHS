<script setup>
import { useRouter } from 'vue-router'
import { useSearchStore } from '@/stores/index'

const router = useRouter()
const SearchStore = useSearchStore()
const godetail = (id) => {
  router.push(`/goodsdetail/${id}`)
}
</script>

<template>
  <cartInfo></cartInfo>
  <headerTitle></headerTitle>
  <tableNav></tableNav>
  <mobileNav></mobileNav>
  <div class="goods-container">
    <div class="goods">
      <div class="title">
        <span> 「𝟭𝟮/𝟬𝟴 𝗡𝗘𝗪」 </span>
      </div>

      <div class="container-fluid">
        <div class="row goods-item-new-cotainer">
          <div
            v-for="item in SearchStore.SearchResult"
            :key="item.id"
            class="col-lg-3 col-sm-6 col-6 goods-item-new"
          >
            <RouterLink @click.prevent="" :to="`/goodsdetail/${item.id}`"
              ><img :src="item.imgUrl" alt=""
            /></RouterLink>
            <div class="des">
              <p>{{ item.productName }}</p>
              <div class="price">
                <p class="discountPrice">NT: {{ item.hotPrice }}</p>
                <i @click="godetail(item.id)" class="bi bi-cart-plus"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <personCart></personCart>
  <footerInfo></footerInfo>
</template>

<style lang="scss" scoped>
div.goods-container {
  width: 80%;
  position: relative;
  right: -20%;
  .goods {
    .title {
      width: 100%;
      height: 70px;
      text-align: center;
      line-height: 70px;
      font-size: 22px;
      margin: 13px 0;
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
        text-align: center;
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
            color: #e11616;
            font-weight: 550;
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
  div.goods-container {
    width: 100%;
    right: 0;
  }
}
</style>
