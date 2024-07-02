<script setup>
import { onMounted } from 'vue'
import { useOrderStore } from '@/stores/index'
// import { useRouter } from 'vue-router'

const AdjustDate = (date) => {
  // 创建一个新的 Date 对象
  const originalDate = new Date(date)
  // 提取日期组件
  const year = originalDate.getFullYear()
  const month = String(originalDate.getMonth() + 1).padStart(2, '0') // 月份需要加1，且确保两位数
  const day = String(originalDate.getDate()).padStart(2, '0') // 确保两位数的日期
  // 构建新的日期格式
  const formattedDate = `${year}-${month}-${day}`
  return formattedDate
}
// 跳轉商品頁面
// const Router = useRouter()
// const TransferToGoods = (id) => {
//   Router.push(`/goodsdetail/${id}`)
// }
const OrderStore = useOrderStore()
onMounted(() => {
  OrderStore.GetOrderInfo()
})
</script>
<template>
  <div class="big-box-order">
    <div class="box-shadow" v-if="OrderInfo != 0">
      <div class="Mid-Box" v-for="item in OrderStore.OrderInfoList" :key="item.id">
        <div class="transfer">
          <div class="FwdInfo col-sm-4">
            <img :src="item.imgUrl" alt="" />
            <div class="des">
              <p class="P1">{{ item.procductName }}</p>
              <p><span>顏色: </span>{{ item.color }}</p>
              <P><span>尺寸: </span>{{ item.size }}</P>
            </div>
          </div>
          <div class="Oneprice col-sm-2">
            <strong>{{ item.price }} x</strong><span> {{ item.count }} </span>
          </div>
          <div class="calculator col-sm-2">
            <span>NT$ </span><strong>{{ item.count * item.price }}</strong>
          </div>
          <div class="Totalprice col-sm-2">
            {{ AdjustDate(item.creatTime) }}
          </div>
          <div class="col-sm-2 detail">
            <strong @click="OrderStore.GetOrderDetailInfo(item.id)">詳細內容</strong>
          </div>
        </div>
      </div>
    </div>
    <div class="noItem" v-else>購物車目前沒有商品</div>
  </div>
</template>
<style lang="scss" scoped>
div.big-box-order {
  padding-top: 2vw;
  padding-bottom: 2vw;
  padding-left: 2vw;
  padding-right: 2vw;
  width: 100%;
  position: relative;
  overflow: auto;
  div.box-shadow {
    div.Mid-Box {
      div.transfer {
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        div.FwdInfo {
          display: flex;

          img {
            max-height: 90px;
            max-width: 100%;
            margin-right: 10px;
          }
          div.des {
            p {
              font-size: 14.65px;
              font-weight: 550;
              margin: 0;
              flex: 1;
              color: #333333;
            }
            .P1 {
              margin-bottom: 15px;
            }
          }
        }
        div.detail {
          strong {
            cursor: pointer;
          }
        }
      }
    }
  }

  div.noItem {
    text-align: center;
    padding-top: 5vw;
    font-size: 25px;
    font-weight: 700;
  }
}
</style>
