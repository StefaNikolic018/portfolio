import React, { memo } from 'react'

import Icons from './Icons'

export function Skills() {
  return (
    <section className="flex flex-row items-start gap-10 bg-gray-800 px-10 py-20">
      <div className="relative w-1/2 pr-10 ">
        <h2 className="absolute left-28 top-5 mb-4 text-right font-dalfitra text-9xl leading-snug tracking-tighter text-black opacity-10">
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
        {/* <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-gray-100"></div> */}
      </div>
    </section>
  )
}

export default memo(Skills)
