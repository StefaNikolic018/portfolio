import React, { memo } from 'react'

import chipstars from '../../assets/companies/chipstars.svg'
import fermicoding from '../../assets/companies/fermicoding.png'
import gf from '../../assets/companies/gf-logo.png'
import mintly from '../../assets/companies/mintly.png'
import sm from '../../assets/companies/sm.svg'
import goodnautical from '../../assets/companies/goodnautical.png'
import topsetplus from '../../assets/companies/topsetplus.png'
import united_nations from '../../assets/companies/united_nations.png'
import vtsnis from '../../assets/companies/vtsnis.png'

import './marquee.css'

// TODO:NEED TO TRY IT LIKE THIS
// /* https://codepen.io/hexagoncircle/pen/wvmjomb */

const Marquee = () => {
  return (
    <div className="marquee fixed top-0 h-24">
      <div className="flex h-24 bg-blue-900 py-5 font-bold text-orange-500">
        <span className="flex flex-row justify-around space-x-7">
          <img src={chipstars} alt="ChipstarsBet" className="h-10" />
          <img src={mintly} alt="mintly" className="h-12" />
          <img src={united_nations} alt="UnitedNations" className="h-12" />
          <img src={gf} alt="Ghostface" className="h-16" />
          <img src={fermicoding} alt="Fermicoding" className="h-10" />
          <img src={sm} alt="SMAgency" className="h-12" />
          <img src={topsetplus} alt="TopSetPlus" className="h-12" />
          <img src={vtsnis} alt="VTSNis" className="h-12" />
          <img src={goodnautical} alt="GoodNautical" className="h-10" />
        </span>
        <span className="flex flex-row justify-around space-x-5 pl-96">
          <img src={chipstars} alt="ChipstarsBet" className="h-10" />
          <img src={mintly} alt="mintly" className="h-12" />
          <img src={united_nations} alt="UnitedNations" className="h-12" />
          <img src={gf} alt="Ghostface" className="h-16" />
          <img src={fermicoding} alt="Fermicoding" className="h-10" />
          <img src={sm} alt="SMAgency" className="h-12" />
          <img src={topsetplus} alt="TopSetPlus" className="h-12" />
          <img src={vtsnis} alt="VTSNis" className="h-12" />
          <img src={goodnautical} alt="GoodNautical" className="h-10" />
        </span>
      </div>
    </div>
  )
}

export default memo(Marquee)
