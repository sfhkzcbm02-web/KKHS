<script setup>
import { useOrderStore } from '@/stores/index'

const OrderStore = useOrderStore()
</script>

<template>
  <cartInfo></cartInfo>
  <headerTitle></headerTitle>
  <tableNav></tableNav>
  <mobileNav></mobileNav>
  <div class="orderdetail-box">
    <div class="order-details">
      <h1>訂單詳細資訊</h1>

      <div class="product-details">
        <h2>商品詳細資料</h2>
        <div class="product-image">
          <img :src="OrderStore.OrderDetailInfo.imgUrl" alt="iPhone 12 Pro" />
        </div>
        <div class="product-info">
          <p>商品名稱：{{ OrderStore.OrderDetailInfo.productName }}</p>
          <p>數量：{{ OrderStore.OrderDetailInfo.count }}</p>
          <p>顏色：{{ OrderStore.OrderDetailInfo.color }}</p>
          <p>尺寸：{{ OrderStore.OrderDetailInfo.size }}</p>
          <p>
            總價格：{{
              OrderStore.OrderDetailInfo.price * OrderStore.OrderDetailInfo.count
            }}
          </p>
        </div>
      </div>

      <div class="shipping-details">
        <h2>運送方式</h2>
        <p>宅配</p>
      </div>

      <div class="address-details">
        <h2>運送地址</h2>
        <p>收件人：{{ OrderStore.OrderDetailInfo.deliveryName }}</p>
        <p>地址：{{ OrderStore.OrderDetailInfo.deliveryAddress }}</p>
        <p>聯絡電話：{{ OrderStore.OrderDetailInfo.deliveryPhone }}</p>
      </div>
    </div>
  </div>
  <personCart></personCart>
  <footerInfo></footerInfo>
</template>

<style lang="scss" scoped>
div.orderdetail-box {
  width: 60%;
  margin: 2vw auto;
  padding: 20px;
  position: relative;
  right: -8%;
  background-color: #f5f5f5;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.order-details {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  color: #333333;
  font-weight: 700;
}

.product-details,
.shipping-details,
.address-details {
  margin-bottom: 20px;
}

.product-image {
  text-align: center;
  margin-bottom: 10px;
}

.product-image img {
  max-width: 100%;
  height: 13vw;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-info {
  color: #363636;
  font-size: 16px;
}

.product-details h2,
.shipping-details h2,
.address-details h2 {
  color: #302f2f;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 600;
}

.product-details p,
.shipping-details p,
.address-details p {
  color: #363636;
  margin: 5px 0;
  font-size: 16px;
}

.order-details h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.order-details .product-details,
.order-details .shipping-details,
.order-details .address-details {
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 15px;
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  div.orderdetail-box {
    width: 100%;
    padding: 10px;
    box-shadow: none;
  }

  .order-details {
    border: none;
    border-radius: 0;
    box-shadow: none;
    padding: 10px;
    max-width: 100%;
  }

  .product-details h2,
  .shipping-details h2,
  .address-details h2 {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .product-details p,
  .shipping-details p,
  .address-details p {
    font-size: 14px;
    margin: 3px 0;
  }
}
</style>
