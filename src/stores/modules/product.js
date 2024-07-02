import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useProductStore = defineStore('product-stor', () => {
  //獲取title數據
  const GoodsTitleList = ref()
  const GetGoodsTitleList = async () => {
    const res = await axios.get('http://localhost:5194/api/Layout/GetTitleList')
    GoodsTitleList.value = res.data.data
  }
  //獲取home on-sale產品資料
  const OnSaleList = ref()
  const GetOnSaleList = async () => {
    const res = await axios.get('http://localhost:5194/api/Layout/GetOnSaleProductList')
    OnSaleList.value = res.data
  }
  return {
    GetGoodsTitleList,
    GoodsTitleList,
    OnSaleList,
    GetOnSaleList
  }
})
