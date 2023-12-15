import { configureStore } from '@reduxjs/toolkit'
import userInfoReducer from './reducers/userInfo'
export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer
  }
})