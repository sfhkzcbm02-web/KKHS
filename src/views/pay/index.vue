<script setup>
import { ref, watch, onMounted } from 'vue'
import { useCartStore, useUserStore } from '@/stores/index'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'
import { BaseUrl } from '@/api/base'

const cartStore = useCartStore()
const userStore = useUserStore()
const Router = useRouter()
const Route = useRoute()

onMounted(() => {
  cartStore.GetTotalPrice()
})

//結帳送出按鈕
const SummitOrder = async () => {
  await axios.post(
    `${BaseUrl}/api/ShoppingCart/SummitOrder`,
    {
      customerName: customerInfoModel.value.name,
      customerPhone: customerInfoModel.value.tel,
      customerEmail: customerInfoModel.value.email,
      customerNote: customerInfoModel.value.note,
      deliveryName: deliveryModel.value.name,
      deliveryPhone: deliveryModel.value.tel,
      deliveryAddress: deliveryModel.value.address
    },
    {
      headers: {
        Authorization: 'Bearer ' + userStore.userInformation.token
      }
    }
  )
  cartStore.CartInfo.value = 0
  cartStore.GetCart()
}
//checkbox 功能
const isChecked = ref(false)
watch(isChecked, (NewValue) => {
  if (NewValue) {
    deliveryModel.value.name = customerInfoModel.value.name
    deliveryModel.value.tel = customerInfoModel.value.tel
  }
})
//較驗資料
const customerInfoModel = ref({
  email: '',
  name: '',
  tel: '',
  remark: ''
})
const resetCustomerInfoModel = () => {
  customerInfoModel.value.email = ''
  customerInfoModel.value.name = ''
  customerInfoModel.value.tel = ''
  customerInfoModel.value.remark = ''
}
const customerrules = {
  name: [
    { required: true, message: '請輸入姓名', trigger: 'blur' },
    { min: 2, max: 6, message: '必須輸入正確的姓名', trigger: 'blur' }
  ],
  email: [{ required: true, message: '請輸入電子郵件', trigger: 'blur' }],
  tel: [
    { required: true, message: '請輸入電話', trigger: 'blur' },
    {
      pattern: /^09\d{8}$/,
      message: '請輸入正確的電話號碼(不能有空格)',
      trigger: 'blur'
    }
  ]
}
const deliveryModel = ref({
  name: '',
  tel: '',
  address: Route.query.CVSAddress
})
const resetDeliveryModel = () => {
  deliveryModel.value.name = ''
  deliveryModel.value.tel = ''
  deliveryModel.value.address = ''
}

const deliveryrules = {
  name: [
    { required: true, message: '請輸入姓名', trigger: 'blur' },
    { min: 2, max: 6, message: '必須輸入正確的姓名', trigger: 'blur' }
  ],
  tel: [
    { required: true, message: '請輸入電話', trigger: 'blur' },
    {
      pattern: /^09\d{8}$/,
      message: '請輸入正確的電話號碼(不能有空格)',
      trigger: 'blur'
    }
  ],
  address: [{ required: true, message: '請選擇門市地址', trigger: 'blur' }]
}
const FormCustomer = ref()
const Formdelivery = ref()
const SendOut = async () => {
  try {
    const customerResult = await FormCustomer.value.validate()
    const deliveryResult = await Formdelivery.value.validate()

    if (customerResult && deliveryResult && cartStore.CartInfo.length != 0) {
      // 在這裡處理表單驗證通過後的邏輯
      SummitOrder()
      //刷新購物車列表
      resetCustomerInfoModel()
      resetDeliveryModel()
      //畫面至頂
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      alert('購買成功')
      Router.push('/')
    } else {
      // 在這裡處理表單驗證未通過的情況
      alert('輸入資料有誤或是無購買商品')
    }
  } catch (error) {
    console.error('驗證過程中出現錯誤：', error)
    alert('輸入資料有誤或是無購買商品')
  }
}

//門市選擇post功能
// const createHiddenInput = (form, name, value) => {
//   const hiddenField = document.createElement('input')
//   hiddenField.type = 'hidden'
//   hiddenField.name = name
//   hiddenField.value = value
//   form.appendChild(hiddenField)
// }

// const handleGetStore = () => {
//   const form = document.createElement('form')
//   form.method = 'POST'
//   form.action = 'https://logistics-stage.ecpay.com.tw/Express/map' // 這是測試的網址，文件上會寫正式的是哪個網址http://localhost:5194/api/Test/RedirectToExternal/123
//   createHiddenInput(form, 'MerchantID', '	2000132')
//   createHiddenInput(form, 'LogisticsType', 'CVS')
//   createHiddenInput(form, 'LogisticsSubType', 'FAMI')
//   createHiddenInput(form, 'IsCollection', 'Y')
//   createHiddenInput(
//     form,
//     'ServerReplyURL',
//     `${BaseUrl}/api/Test/RedirectToExternal/redirect-to-external`
//   )
//   document.body.appendChild(form)
//   form.submit()
//   // 嘗試
// }
</script>
<template>
  <headerTitle></headerTitle>
  <tableNav></tableNav>
  <mobileNav></mobileNav>
  <!-- 列表可以都用div com-3 rwd實現 -->

  <div class="Big-box-pay">
    <div><h1>購物車</h1></div>
    <div class="nav">
      <div class="col-sm-4">商品名稱</div>
      <div class="col-sm-2">單價</div>
      <div class="col-sm-2">數量</div>
      <div class="col-sm-2">總價格</div>
    </div>
    <div class="orderInfo-box">
      <div v-if="cartStore.CartInfo != 0">
        <div class="Mid-Box" v-for="item in cartStore.CartInfo" :key="item.id">
          <div class="FwdInfo col-sm-4">
            <img :src="item.imgUrl" alt="" />
            <div class="des">
              <p>{{ item.productName }}</p>
              <p>{{ item.color }}</p>
              <P>{{ item.size }}</P>
            </div>
          </div>
          <div class="Oneprice col-sm-2">
            <span>NT$ </span><strong>{{ item.price }}</strong>
          </div>
          <div class="calculator col-sm-2">
            {{ item.count }}
          </div>
          <div class="Totalprice col-sm-2">
            <span>NT$ </span><strong>{{ item.count * item.price }}</strong>
          </div>
          <div class="delete col-sm-2">
            <i class="bi bi-trash" @click="cartStore.DeleteItem(item.id)"></i>
          </div>
        </div>
      </div>
      <div class="noItem" v-else>購物車目前沒有商品</div>
    </div>
    <div class="TotalPrice">
      <span>總價: </span><strong>{{ cartStore.TotalPrice }}</strong
      ><span>元</span>
    </div>
    <div class="customerInfo">
      <div class="left-customer">
        <el-form
          size="default"
          :rules="customerrules"
          ref="FormCustomer"
          :model="customerInfoModel"
        >
          <h1>顧客資料</h1>
          <el-form-item label="名字" class="labelset" prop="name">
            <el-input v-model="customerInfoModel.name" />
          </el-form-item>
          <el-form-item label="手機號碼" class="labelset" prop="tel">
            <el-input v-model="customerInfoModel.tel" />
          </el-form-item>
          <el-form-item label="電子郵件" class="labelset" prop="email">
            <el-input type="email" v-model="customerInfoModel.email" />
          </el-form-item>
          <el-form-item label="訂單備註" class="labelset">
            <el-input
              type="textarea"
              v-model="customerInfoModel.remark"
              placeholder="有甚麼想告訴買家嗎"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="right-delivery">
        <el-form
          size="default"
          :rules="deliveryrules"
          :model="deliveryModel"
          ref="Formdelivery"
        >
          <h1>收貨人資料</h1>
          <el-form-item label="名字" class="labelset" prop="name">
            <el-input v-model="deliveryModel.name" />
          </el-form-item>
          <el-form-item label="手機號碼" class="labelset" prop="tel">
            <el-input v-model="deliveryModel.tel" />
          </el-form-item>
          <el-form-item label="門市地址" class="labelset" prop="address" disabled>
            <el-input v-model="deliveryModel.address" />
            <!-- <img
              src="C:\Users\hanso\OneDrive\桌面\web-app\src\assets\uploads\seven-eleven.gif"
              alt=""
            /> -->
            <!-- <el-button @click="handleGetStore">選擇門市</el-button> -->
          </el-form-item>
          <el-checkbox label="送貨資料與顧客資料相同" v-model="isChecked" />
        </el-form>
      </div>
    </div>
    <el-button class="SendOut" @click="SendOut">結帳</el-button>
  </div>
  <footerInfo></footerInfo>
</template>
<style lang="scss">
div.Big-box-pay {
  width: 70%;
  position: relative;
  right: -21%;
  margin-top: 4.1vw;

  h1 {
    font-size: 21.555px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  div.nav {
    display: flex;
    margin-bottom: 10px;
    div {
      //   padding: 0 20px;
      color: #333333;
      font-weight: 550;
    }
  }
  div.orderInfo-box {
    width: 100%;
    height: 25vw;
    // box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    border-bottom: 0.1px solid rgb(42, 42, 42, 0.3);
    overflow: auto;
    div.Mid-Box {
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
        }
      }
      div.delete {
        i {
          cursor: pointer;
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

  div.TotalPrice {
    padding-left: 55vw;
    font-size: 25px;
    font-weight: 600;
  }

  div.customerInfo {
    width: 100%;
    display: flex;
    margin-top: 7.33vw;

    div.left-customer {
      margin-right: 5vw;
      width: 30vw;
      .el-form {
        .el-form-item {
          margin-top: 35px;
        }
        .labelset .el-form-item__label {
          color: black;
        }
        .el-input {
          border: 1px solid rgb(33, 33, 33, 0.2);
        }
      }
    }
    div.right-delivery {
      width: 30vw;
      .el-form {
        .el-form-item {
          margin-top: 35px;
          img {
            width: 25px;
          }
        }
        .labelset .el-form-item__label {
          color: black;
        }
        .el-input {
          border: 1px solid rgb(33, 33, 33, 0.2);
        }
      }
    }
  }
  .SendOut {
    position: relative;
    left: 56vw;
    background-color: #333333;
    color: aliceblue;
    padding: 0.2vw 1.5vw;
  }
}
</style>
