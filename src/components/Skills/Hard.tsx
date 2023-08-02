import React, { memo } from 'react'

import Icons from './Icons'

// TODO:
// 1. Need to add "more" button for modal that will be glassmorphised style
// 2. Need to add color change on hover
// 3. Need to add number from 1-10 under hard skills like in the design
// 4. Need to add soft skills - add prop for type of icons in Icons component

export function Hard() {
  return (
    <section className="flex flex-col px-10 py-20">
      <div className="flex flex-row items-start">
        <div className="relative w-1/2 pr-10 ">
          <h2 className="absolute right-[21%] top-6 mb-4 text-right font-dalfitra text-9xl leading-snug tracking-tighter text-black opacity-10">
            <span className="text-gray-400">HARD</span>
            <br />
            SKILLS
          </h2>
          <h2 className="text-right font-dalfitra text-8xl leading-snug tracking-tighter text-black">
            HARD
            <br />
            <span className="text-gray-400">SKILLS:</span>
          </h2>
        </div>
        <div className="relative mb-8 w-2/5 overflow-hidden px-5 text-lg">
          <div className="info h-80 overflow-y-scroll pr-28">
            <Icons />
          </div>
        </div>
      </div>
      <div className="relative">
        <p className="w-2/4 text-center font-dalfitra text-5xl text-gray-100 opacity-70">
          01 - 11+
        </p>
        {/* <p className="absolute top-1 left-2 w-2/4 text-center font-dalfitra text-7xl text-gray-700">
          01 - 11+
        </p> */}
      </div>
    </section>
  )
}

export default memo(Hard)
