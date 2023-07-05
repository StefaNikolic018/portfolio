import React, { memo } from 'react'
import Marquee from 'react-fast-marquee'

import sm from '../../assets/companies/sm.svg'
import chipstars from '../../assets/companies/chipstars.svg'

import gf from '../../assets/companies/gf-logo.png'
import mintly from '../../assets/companies/mintly.png'
import vtsnis from '../../assets/companies/vtsnis.png'
import topsetplus from '../../assets/companies/topsetplus.png'
import fermicoding from '../../assets/companies/fermicoding.png'
import united_nations from '../../assets/companies/united_nations.png'

const MarqueeSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="mb-4 font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400">
          You may know
          <br />
          <span className="text-black">brands</span> I have{' '}
          <span className="text-black">worked</span> with
        </h2>
        <Marquee
          speed={150}
          // pauseOnHover
          gradient
          className="flex flex-col border-y-2 border-y-black "
        >
          <div className="flex flex-row items-center justify-center gap-12 py-10">
            <img
              src={chipstars}
              alt="ChipstarsBet"
              className="h-10 drop-shadow-xl grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={mintly}
              alt="mintly"
              className="h-14 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={united_nations}
              alt="UnitedNations"
              className="h-11 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={gf}
              alt="Ghostface"
              className="h-16 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={fermicoding}
              alt="Fermicoding"
              className="h-11 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={vtsnis}
              alt="VTSNis"
              className="h-10 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={topsetplus}
              alt="TopSetPlus"
              className="h-11 grayscale transition-all duration-150 hover:grayscale-0"
            />
            <img
              src={sm}
              alt="SMAgency"
              className="h-11 grayscale transition-all duration-150 hover:grayscale-0"
            />
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default memo(MarqueeSection)
