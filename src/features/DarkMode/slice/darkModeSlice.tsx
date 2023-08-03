import { createSlice } from '@reduxjs/toolkit'

interface DarkModeState {
  darkModeState: boolean
}

const initialState: DarkModeState = {
  darkModeState: false
}

const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode(state) {
      state.darkModeState = !state.darkModeState
    }
  }
})

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer
