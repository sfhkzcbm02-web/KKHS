<script setup></script>

<template>
  <div class="footer">
    <div class="container">
      <div class="left">
        <dl class="service">
          <dt>Online service 顧客服務</dt>
          <a href="#"><dd>Notice / 購買須知</dd></a>
          <a href="#"><dd>Q&A /常見問題</dd></a>
          <a href="#"><dd>Size Chart /尺寸表</dd></a>
          <a href="#"><dd>Return /退換貨政策</dd></a>
          <a href="#"><dd>Payment & Delivery / 付款及運送方式</dd></a>
        </dl>
      </div>
      <div class="middle">
        <dl>
          <a href="#"><dt>ABOUT US</dt></a>
          <a href="#"><dd>Contact / 聯絡我們</dd></a>
          <a href="#"><dd>Privacy Policy / 隱私權政策</dd></a>
        </dl>
      </div>
      <div class="right">
        <p class="logo">KKTS</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: 5.5vw;
  height: 350px;
  background-color: white;
  padding-top: 10px;
  border-top: 1px solid black;
  z-index: 600;
  position: relative;
  width: 80%;
  right: -20%;
}

.footer .container {
  display: flex;
}

.footer .left {
  flex: 2;
}

.footer a {
  text-decoration: none;
  color: black;
}

.footer dl {
  margin-bottom: 0;
}

.footer dt {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 30px;
  margin-top: 30px;
  font-weight: 800;
}

.footer dd {
  margin-bottom: 13px;
  font-size: 15px;
  font-weight: 800;
}

.footer .middle {
  flex: 2;
}

.footer .right {
  flex: 1;
}

.footer .logo {
  display: inline-block;
  background-color: gray;
  color: blue;
  font-weight: 700;
  margin-bottom: 0;
  position: relative;
  top: 60px;
  font-size: 56px;
  border-radius: 8px;
}

@media screen and (max-width: 992px) {
  .footer {
    height: 100%;
    right: 0;
    width: 100%;
  }

  .footer .container {
    display: block;
  }

  .footer .container div {
    margin-bottom: 1rem;
  }

  .footer .container .logo {
    position: relative;
    top: 0rem;
  }

  .footer .logo {
    display: none;
  }

  .footer .container .middle {
    margin-bottom: 100px;
  }
}
</style>
