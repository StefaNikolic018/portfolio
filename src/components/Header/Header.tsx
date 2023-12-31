import React, { memo } from 'react'

import logo from '../../assets/sn-logo.svg'
import Navigation from './Navigation'

function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <img alt="Logo" src={logo} className="h-10 w-10" />
        <Navigation />
      </div>
    </header>
  )
}

export default memo(Header)
