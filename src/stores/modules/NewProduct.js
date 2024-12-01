import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'
import { BaseUrl } from '@/api/base'

export const useNewProductStore = defineStore('NewProduc-store', () => {
  //獲取newproduct的資料列表
  const NewList = ref(0)
  const getNewList = async () => {
    const res = await axios.get(`${BaseUrl}/api/Layout/GetList`)
    NewList.value = res.data
  }
  //獲取newproduct的DATAIL 資料
  const OpenInfo = ref(0)
  const getOpenInfo = async (id) => {
    isShow.value = true
    const res = await axios.get(`${BaseUrl}/api/Layout/${id}`)
    OpenInfo.value = res.data
    OpenInfo.value.color = OpenInfo.value.color.split(',')
    Color.value = OpenInfo.value.color[0]
    OpenInfo.value.size = OpenInfo.value.size.split(',')
    Size.value = OpenInfo.value.size[0]
  }

  //商品 size count color
  const Size = ref(null)
  const Color = ref(null)
  const Count = ref(1)
  const add = () => {
    if (Count.value < 99) {
      Count.value++
    }
  }
  const sub = () => {
    if (Count.value > 1) {
      Count.value--
    }
  }
  //控制詳情頁面開關
  const isShow = ref(false)
  const close = () => {
    isShow.value = false
    Size.value = null
    Color.value = null
    Count.value = 1
  }

  return {
    getNewList,
    NewList,
    OpenInfo,
    getOpenInfo,
    isShow,
    close,
    Size,
    Color,
    Count,
    add,
    sub
  }
})
