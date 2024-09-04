import { configureStore } from '@reduxjs/toolkit'
import hackathonsReducer from './hackathonsSlice'

export const store = configureStore({
  reducer: {
    hackathons: hackathonsReducer,
  },
})

export default store
