import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'
import { useNewProductStore } from '@/stores/modules/NewProduct'

const pinia = createPinia()
pinia.use(persist)

export default pinia

export * from './modules/user'
export * from './modules/cart'
export * from './modules/product'
export * from './modules/search'
export * from './modules/order'
export { useNewProductStore }
