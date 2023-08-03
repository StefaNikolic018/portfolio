import React from 'react'
import { useDispatch } from 'react-redux'

import { toggleDarkMode } from '../slice/darkModeSlice'

import DarkModeIcon from './DarkModeIcon'

const DarkModeToggle = () => {
  const dispatch = useDispatch()

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode())
  }

  return (
    <button
      className="text-gray-600 hover:text-gray-900"
      onClick={handleDarkModeToggle}
      aria-label="Toggle dark mode"
    >
      <DarkModeIcon />
    </button>
  )
}

export default DarkModeToggle
