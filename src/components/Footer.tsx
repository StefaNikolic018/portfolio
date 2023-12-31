import React, { memo } from 'react'
import { TfiWorld } from 'react-icons/tfi'

import logo from './../assets/sn-logo.svg'

function Footer() {
  return (
    <footer className="border-t-2 border-t-black bg-gray-100 py-10 font-dalfitra font-bold tracking-wider">
      <div className="flex flex-row items-center justify-around">
        <div className="flex w-4/12 justify-center">
          <img alt="Logo" src={logo} className="h-12 w-12" />
        </div>
        <span className="w-4/12 text-center text-2xl uppercase text-gray-500">
          BY{' '}
          <span className="font-bold text-gray-600">
            {import.meta.env.VITE_USERNAME}
          </span>
        </span>
        <span className="flex w-4/12 flex-row items-center justify-center gap-2">
          <TfiWorld className="text-4xl" />
          <div>
            © {new Date().getFullYear()} SN
            <br />
            ALL RIGHTS RESERVED.
          </div>
        </span>
      </div>
    </footer>
  )
}

export default memo(Footer)
