<script setup></script>
<template>
  <div class="BigBox">
    <div class="MidBox-top">
      <div class="nav">
        <span>可使用</span>
        <span>已失效</span>
      </div>
      <div class="CouponTitle">
        <input type="text" placeholder="請輸入優惠码" />
        <button>領取</button>
      </div>
    </div>
    <div class="MidBox-botton">
      <div class="NoCoupon" v-if="true">沒有可用的優惠券</div>
      <div class="hasCoupon" v-else>text</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.BigBox {
  position: relative;
  padding: 1.5vw 5vw;

  div.MidBox-top {
    display: flex;

    div.nav {
      margin-right: 30.5vw;
      span {
        font-size: 15.8px;
        font-weight: 700;
        padding-left: 1vw;
        margin-right: 1vw;
        border-left: 0.8px solid rgb(180, 178, 178);
        color: rgb(95, 94, 94);
        height: 30px;
        line-height: 30px;
        cursor: pointer;
        &:active,
        &:hover {
          color: black;
        }
      }
    }
    div.CouponTitle {
      input {
        margin-right: 0.65vw;
      }
      button {
        color: white;
        border-radius: 5px;
        background-color: rgb(17, 17, 52);
      }
    }
  }
  div.MidBox-botton {
    margin-top: 1vw;
    background-color: #dcdada;
  }
}
</style>
