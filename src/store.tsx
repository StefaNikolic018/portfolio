import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from './features/darkMode/slice/darkModeSlice'

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer
  }
})

export default store
