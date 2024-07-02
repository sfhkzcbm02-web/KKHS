import { createApp } from 'vue'
import tableNav from '@/components/tableNav.vue'
import headerTitle from '@/components/headerTitle.vue'
import mobileNav from '@/components/mobileNav.vue'
import navList from '@/components/navList.vue'
import personCart from '@/components/personCart.vue'
import footerInfo from '@/components/footerInfo.vue'
import cartInfo from '@/components/cartInfo.vue'

import App from './App.vue'
import router from './router'
import pinia from '@/stores/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const app = createApp(App)

// import { GetNewProductAPI } from '@/api/NewProductAPI'
// GetNewProductAPI().then((res) => console.log(res.data[0]))

app.use(pinia)
app.use(router)
app.mount('#app')
app.component('tableNav', tableNav)
app.component('headerTitle', headerTitle)
app.component('headerTitle', headerTitle)
app.component('mobilemobileNav', mobileNav)
app.component('navList', navList)
app.component('personCart', personCart)
app.component('footerInfo', footerInfo)
app.component('cartInfo', cartInfo)
