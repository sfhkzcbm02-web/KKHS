import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useUserStore } from '@/stores/index'
import { useRouter } from 'vue-router'
import axios from 'axios'

export const useOrderStore = defineStore('order-store', () => {
  //獲取個人訂單資料
  const userStore = useUserStore()
  const Router = useRouter()
  const OrderInfoList = ref()
  const OrderDetailInfo = ref({
    productName: 'default',
    price: 'default',
    count: 'default',
    color: 'default',
    size: 'default',
    deliveryName: 'default',
    deliveryPhone: 'default',
    deliveryAddress: 'default'
  })
  const GetOrderInfo = async () => {
    const res = await axios.get(
      'http://localhost:5194/api/Order/GetOrderInfoListByToken/GetOrderInfoListByToken',
      {
        headers: {
          Authorization: 'Bearer ' + userStore.userInformation.token
        }
      }
    )
    OrderInfoList.value = res.data.data
  }
  const GetOrderDetailInfo = (id) => {
    OrderInfoList.value.forEach((e) => {
      if (e.id == id) {
        OrderDetailInfo.value = e
        Router.push('/orderdetail')
      }
    })
  }

  return {
    OrderInfoList,
    GetOrderInfo,
    GetOrderDetailInfo,
    OrderDetailInfo
  }
})
