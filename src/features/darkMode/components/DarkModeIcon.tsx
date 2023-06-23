import React, { memo, useMemo } from 'react'
import { useSelector } from 'react-redux'

import Sun from './Icons/Sun'
import Moon from './Icons/Moon'

interface RootState {
  darkMode: { darkModeState: boolean }
}

function DarkModeIcon() {
  const darkMode = useSelector(
    (state: RootState) => state.darkMode.darkModeState
  )
  const icon = useMemo(() => (darkMode ? <Sun /> : <Moon />), [darkMode])

  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icon}
    </svg>
  )
}

export default memo(DarkModeIcon)
