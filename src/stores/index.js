import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia

// import { useUserStore } from './modules/user'
// export { useUserStore } 下面等於這兩行 會自動導入倒出
export * from './modules/user'
export * from './modules/cart'
export * from './modules/NewProduct'
export * from './modules/product'
export * from './modules/search'
export * from './modules/order'
