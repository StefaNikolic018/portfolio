import React, { memo } from 'react'
export function About() {
  return (
    <section className="relative flex flex-row items-center justify-between gap-10 px-10 py-20">
      <h2 className="absolute -left-44 top-44 mb-4 w-2/5 text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400 opacity-10">
        ABOUT
        <br />
        <span className="text-black">ME</span>
      </h2>
      <h2 className="mb-4 w-2/5 text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400">
        ABOUT
        <br />
        <span className="text-black">ME</span>
      </h2>
      <div className="mb-8 h-72 w-3/5 overflow-y-scroll border-l-2 border-l-gray-300 px-10 py-10 text-lg">
        I am a passionate web developer with several years of experience in
        building user-friendly and performant web applications. I specialize in
        frontend development, focusing on creating intuitive and responsive
        interfaces using modern technologies. I am a passionate web developer
        with several years of experience in building user-friendly and
        performant web applications. I specialize in frontend development,
        focusing on creating intuitive and responsive interfaces using modern
        technologies. I am a passionate web developer with several years of
        experience in building user-friendly and performant web applications. I
        specialize in frontend development, focusing on creating intuitive and
        responsive interfaces using modern technologies.
      </div>
    </section>
  )
}

export default memo(About)
