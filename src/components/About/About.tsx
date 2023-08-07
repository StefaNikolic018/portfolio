import React, { memo } from 'react'

import DownloadButton from './DownloadButton'

export function About() {
  return (
    <section className="flex flex-row items-start justify-between gap-10 px-10 py-20">
      <div className="relative w-2/5 border-r-2 border-l-gray-300 pr-10 ">
        <h2 className="absolute right-[9.5vw] top-28 mb-4 text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400 opacity-10">
          ABOUT
          <br />
          <span className="text-black">ME</span>
        </h2>
        <h2 className="text-right font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400">
          ABOUT
          <br />
          <span className="text-black">ME</span>
        </h2>
        <DownloadButton />
      </div>
      <div className="relative mb-8 w-3/5 overflow-hidden px-5 text-lg">
        <div className="info h-[30vh] overflow-y-scroll pr-16 pb-12">
          Motivated web developer with approximately 3 years of experience in
          crafting dynamic web applications. A collaborative team player with a
          goal-oriented mindset, I am always ready to embrace fresh challenges
          and eagerly explore emerging technologies!
          <br />
          <br /> Passionate about React/TypeScript and the power it offers with
          Redux, in love with pretty much everything about Tailwind! With a
          strong background in backend technologies like PHP(Laravel, Drupal),
          Node.js & Express, and expertise in MySQL and MongoDB, I bring a
          comprehensive skill set. <br />
          <br />
          Proficient in both Windows and Linux and with some experience on
          macOS. In addition to my work with vanilla JS, jQuery, Vue.js,
          Cordova, Nuxt, and Next.js, I am keenly interested in exploring the
          capabilities of SASS and the creative possibilities of CSS-only
          solutions.
          <br />
          <br /> I eagerly seek a dynamic and well-organized team where I can
          joyfully contribute my skills!
        </div>
        <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-gray-100"></div>
      </div>
    </section>
  )
}

export default memo(About)
