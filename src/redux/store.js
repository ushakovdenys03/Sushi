import { configureStore } from '@reduxjs/toolkit'
import filterSlice from "./slices/filterSlice"
import cart from './slices/cartSlice'
import sushi from './slices/sushiSlice'

export const store = configureStore({
  reducer: {
    filterSlice,
    cart,
    sushi
  },
})