import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useNewProductStore } from '@/stores/index'
import { useUserStore } from '@/stores/index'
import router from '@/router'

export const useCartStore = defineStore(
  'cart-store',
  () => {
    //購物車資料
    const CartInfo = ref(0)
    //購物車數量，獲取購物車資料
    const userStore = useUserStore()
    const CartCount = ref(1)
    const GetCart = async () => {
      //有token才執行
      if (userStore.userInformation.token) {
        const res = await axios.get('http://localhost:5194/api/ShoppingCart/GetCart', {
          headers: {
            Authorization: 'Bearer ' + userStore.userInformation.token
          }
        })
        CartInfo.value = res.data.data
        CartCount.value = CartInfo.value.length
      }
    }
    //購物車刪除
    const DeleteItem = async (id) => {
      await axios.put(`http://localhost:5194/api/ShoppingCart/DeleteItem?Id=${id}`)
      await GetCart()
      GetTotalPrice()
    }
    //新增商品至購物車
    const NewProductStore = useNewProductStore() //調用close 功能
    const AddTOcart = async (id, count, color, size) => {
      if (userStore.userInformation.token) {
        await axios.post(
          'http://localhost:5194/api/ShoppingCart/AddTOcart',
          {
            productId: id,
            count: count,
            color: color,
            size: size
          },
          {
            headers: {
              Authorization: 'Bearer ' + userStore.userInformation.token
            }
          }
        )
        await GetCart()
        alert('已加入購物車')
        NewProductStore.close()
        NewProductStore.Count = 1
      } else {
        router.push('/login')
        alert('請先登入會員')
      }
    }
    //附加關掉detail視窗
    const AddTOpay = async (id, count, color, size) => {
      AddTOcart(id, count, color, size)
      router.push('/pay')
      NewProductStore.close()
    }
    //控制購物車開關
    const isopen = ref(false)
    const open = () => {
      isopen.value = true
    }
    const close = () => {
      isopen.value = false
    }
    //總價格
    const TotalPrice = ref(0)
    const GetTotalPrice = () => {
      let totalPrice = 0
      for (let i = 0; i < CartInfo.value.length; i++) {
        totalPrice += CartInfo.value[i].price * CartInfo.value[i].count
      }
      TotalPrice.value = totalPrice
    }
    return {
      isopen,
      open,
      close,
      CartInfo,
      GetCart,
      CartCount,
      DeleteItem,
      AddTOcart,
      AddTOpay,
      TotalPrice,
      GetTotalPrice
    }
  },
  {
    persist: true
  }
)
