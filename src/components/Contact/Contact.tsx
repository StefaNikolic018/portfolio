import React, { memo } from 'react'
import Map from './Map'

import Social from './Social'
import Info from './Info'
// TODO: Maybe create a button for switching to contact form

const Contact = () => {
  return (
    <div className="relative h-[50vh]">
      <div className="absolute top-0 left-[15%] z-10 flex h-full w-1/3 flex-col items-center justify-center bg-gray-900 bg-opacity-20 bg-clip-padding px-14 text-white backdrop-blur-sm backdrop-filter">
        <h2 className="mt-10 mb-3 font-dalfitra text-5xl font-bold tracking-wider">
          CONTACTS:
        </h2>
        <Info />
        <Social />
      </div>
      <Map />
    </div>
  )
}

export default memo(Contact)
