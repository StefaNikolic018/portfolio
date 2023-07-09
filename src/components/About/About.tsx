import React, { memo } from 'react'
import './style.css'

import { HiDocumentText } from 'react-icons/hi'

export function About() {
  return (
    <section className="flex flex-row items-start justify-between gap-10 px-10 py-20">
      <div className="relative w-2/5 border-r-2 border-l-gray-300 pr-10 ">
        <h2 className="absolute -left-5 top-28 mb-4 text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400 opacity-10">
          ABOUT
          <br />
          <span className="text-black opacity-[20%]">ME</span>
        </h2>
        <h2 className="text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400">
          ABOUT
          <br />
          <span className="text-black">ME</span>
        </h2>
        <button className="float-right mt-2 flex flex-row justify-center gap-3 border-2 border-black bg-white py-5 px-10 transition-all duration-150 hover:shadow-xl">
          Download CV <HiDocumentText className="inline-block text-2xl" />
        </button>
      </div>
      <div className="relative mb-8 w-3/5 overflow-hidden px-5 text-lg">
        <div className="info h-80 overflow-y-scroll ">
          I am a passionate web developer with several years of experience in
          building user-friendly and performant web applications. I specialize
          in frontend development, focusing on creating intuitive and responsive
          interfaces using modern technologies. I am a passionate web developer
          with several years of experience in building user-friendly and
          performant web applications. I specialize in frontend development,
          focusing on creating intuitive and responsive interfaces using modern
          technologies. I am a passionate web developer with several years of
          experience in building user-friendly and performant web applications.
          I specialize in frontend development, focusing on creating intuitive
          and responsive interfaces using modern technologies. I am a passionate
          web developer with several years of experience in building
          user-friendly and performant web applications. I specialize in
          frontend development, focusing on creating intuitive and responsive
          interfaces using modern technologies.
        </div>
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-gray-100"></div>
      </div>
    </section>
  )
}

export default memo(About)
