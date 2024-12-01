import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

export * from './modules/user.js'
export * from './modules/cart.js'
export * from './modules/NewProduct.js'
export * from './modules/product.js'
export * from './modules/search.js'
export * from './modules/order.js'
