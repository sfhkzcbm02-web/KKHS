<script setup></script>
<template>
  <div class="Box">
    <div class="RecordTitle"><H1>點數紀錄</H1></div>
    <div class="Point-container">
      <div class="CurrentPoint">
        <p>你目前擁有的點數</p>
        <strong>0</strong><span>點</span>
        <p>1 點可折抵 NT$1</p>
      </div>
      <div class="Record-container">
        <div class="NoRecord">
          <i class="bi bi-bag-plus"></i>
          <p>目前尚無任何記錄</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.Box {
  position: relative;
  padding: 0 15px;
  H1 {
    font-size: 16.8px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  .Point-container {
    background-color: rgb(237, 235, 235, 0.5);
    .CurrentPoint {
      position: relative;
      padding-left: 20px;
      border-bottom: 1px solid rgb(117, 116, 116);
      p {
        margin: 0;
      }
      strong {
        font-size: 30px;
      }
    }
    .Record-container {
      .NoRecord {
        text-align: center;
        i {
          font-size: 95px;
          color: rgb(5, 5, 5, 0.15);
        }
      }
    }
  }
}
</style>
