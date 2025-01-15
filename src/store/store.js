import { configureStore } from '@reduxjs/toolkit'
import counterRed from './features/counter/counterSlice.js'
//import userRed from './features/counter/userSlice.js'
//import productRed from './features/counter/userSlice.js'
import ProductReducer from './features/products/productSlice.js'
export const store = configureStore({
  reducer: {
    counter:counterRed,
    product: ProductReducer,
    
    
  },

});

export default store;