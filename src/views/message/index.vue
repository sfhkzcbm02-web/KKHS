<script setup></script>
<template>
  <div class="Box-message">
    <div class="MidBox">
      <H1>KKHS</H1>
      <div class="room">聊天室</div>
      <textarea
        class="insert"
        type="text
      "
        placeholder="請輸入訊息"
      />
      <div class="btn-box">
        <button>傳送</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
div.Box-message {
  width: 100%;
  display: flex;
  justify-content: center;

  div.MidBox {
    text-align: center;
    height: 28vw;
    width: 33.9vw;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
    H1 {
      width: 100%;
      background-color: rgb(155, 152, 152, 0.15);
      font-size: 30px;
      margin: 0;
      color: rgb(13, 13, 56);
    }
    div.room {
      width: 100%;
      height: 10vw;
    }
    textarea.insert {
      width: 100%;
      height: 8.3vw;
      border: 0.3px solid rgb(117, 116, 116, 0.6);
      justify-items: flex-start;
      &:focus-visible {
        outline: none;
      }
    }
    div.btn-box {
      button {
        background-color: #141045;
        color: white;
        margin-top: 10px;
        border-radius: 8px;
        padding: 0.3vw 1.611vw;
      }
    }
  }
}
</style>
