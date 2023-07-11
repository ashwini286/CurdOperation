import { configureStore } from '@reduxjs/toolkit'
import postSlice from './postSlice'
export const Store = configureStore({
  reducer: {
    posts: postSlice

  },
})