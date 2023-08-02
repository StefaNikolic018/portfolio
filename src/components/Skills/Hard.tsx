import React, { memo } from 'react'

import Icons from './Icons'

// TODO:
// 1. Need to add "more" button for modal that will be glassmorphised style
// 2. Need to add color change on hover
// 3. Need to add number from 1-10 under hard skills like in the design
// 4. Need to add soft skills

export function Hard() {
  return (
    <section className="flex flex-row items-start gap-10 bg-gray-800 px-10 py-20">
      <div className="relative w-1/2 pr-10 ">
        <h2 className="absolute right-[8vw] top-5 mb-4 text-right font-dalfitra text-9xl leading-snug tracking-tighter text-black opacity-10">
          HARD <br />
          <span className="text-gray-400">SKILLS</span>
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
    </section>
  )
}

export default memo(Hard)
