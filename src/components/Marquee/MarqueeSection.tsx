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
    <Marquee gradient className="flex flex-col">
      <div className="flex flex-row items-center justify-center gap-10">
        <img
          src={chipstars}
          alt="ChipstarsBet"
          className="h-10 drop-shadow-xl"
        />
        <img src={mintly} alt="mintly" className="h-14" />
        <img src={united_nations} alt="UnitedNations" className="h-11" />
        <img src={gf} alt="Ghostface" className="h-16" />
        <img src={fermicoding} alt="Fermicoding" className="h-11" />
        <img src={vtsnis} alt="VTSNis" className="h-10" />
        <img src={topsetplus} alt="TopSetPlus" className="h-11" />
        <img src={sm} alt="SMAgency" className="h-11" />
      </div>
    </Marquee>
  )
}

export default memo(MarqueeSection)
