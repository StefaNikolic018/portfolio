import React, { memo } from 'react'

import { LuSquareDot } from 'react-icons/lu'

// SOFT SKILLS
const skills = [
  'COMMUNICATION',
  'CRITICAL THINKING',
  'TEAMWORK',
  'PROBLEM SOLVING',
  'PERSUASION',
  'ENTREPRENEURSHIP',
  'ADAPTABILITY',
  'STRESS MANAGEMENT',
  'DECISION MAKING',
  'CREATIVITY',
  'TIME MANAGEMENT',
  'OPENNESS TO CRITICISIM'
]

const skillCards = skills.map((skill) => (
  <div
    key={skill}
    className="group rounded-lg border-2 border-gray-500 bg-gradient-to-r  from-gray-600 p-3 tracking-wider text-gray-300 transition-all duration-500 hover:border-gray-300 hover:text-white"
  >
    <LuSquareDot className="mr-5 inline-block text-2xl transition-all group-hover:rotate-45 group-hover:transition-all group-hover:duration-500" />
    {skill}
  </div>
))

export function Soft() {
  return (
    <section className="flex flex-col items-start gap-10 px-10 py-20">
      <div className="relative w-full pr-10 ">
        <h2 className="absolute top-28 mb-4 w-full text-center font-dalfitra text-9xl leading-snug tracking-tighter text-black opacity-5">
          <span className="text-gray-400">SOFT </span> SKILLS
        </h2>
        <h2 className="text-center font-dalfitra text-8xl leading-snug tracking-tighter text-black">
          SOFT <span className="text-gray-400">SKILLS:</span>
        </h2>
      </div>
      <div className="relative mb-8 flex w-full justify-center gap-5 overflow-hidden px-5 text-lg">
        <div className="flex w-full flex-row flex-wrap items-center gap-5 xl:w-8/12">
          {skillCards}
        </div>
      </div>
    </section>
  )
}

export default memo(Soft)
