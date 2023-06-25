import React, { memo } from 'react'

import logo from './../assets/sn-logo.svg'

import DarkModeToggle from '../features/darkMode/components/DarkModeToggle'

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <h1 className="text-2xl font-bold">
          <img src={logo} className="h-10 w-10" />
        </h1>
        {/* Navigation menu */}
        <nav className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            About
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Projects
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </a>
          <DarkModeToggle />
        </nav>
      </div>
    </header>
  )
}

export default memo(Header)
