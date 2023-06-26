import React, { memo } from 'react'

import logo from '../../assets/sn-logo.svg'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <h1 className="text-2xl font-bold">
          <img src={logo} className="h-10 w-10" />
        </h1>
        <Navigation />
      </div>
    </header>
  )
}

export default memo(Header)