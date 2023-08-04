import React, { memo } from 'react'
import Marquee from 'react-fast-marquee'

import sm from '../../../assets/companies/sm.svg'
import chipstars from '../../../assets/companies/chipstars.svg'

import gf from '../../../assets/companies/gf-logo.png'
import mintly from '../../../assets/companies/mintly.png'
import vtsnis from '../../../assets/companies/vtsnis.png'
import topsetplus from '../../../assets/companies/topsetplus.png'
import fermicoding from '../../../assets/companies/fermicoding.png'
import united_nations from '../../../assets/companies/united_nations.png'

const brandLogos = [
  { name: 'ChipstarsBet', logo: chipstars, style: 'h-10 drop-shadow-xl' },
  { name: 'Mintly', logo: mintly, style: 'h-14' },
  { name: 'United Nations', logo: united_nations, style: 'h-11' },
  { name: 'GhostfaceNFT', logo: gf, style: 'h-16' },
  { name: 'Fermicoding', logo: fermicoding, style: 'h-11' },
  { name: 'VTSNis', logo: vtsnis, style: 'h-10' },
  { name: 'TopSetPlus', logo: topsetplus, style: 'h-11' },
  { name: 'SMAgency', logo: sm, style: 'h-11' }
]

const logos = brandLogos.map((logo) => (
  <img
    key={logo.name}
    className={`grayscale transition-all duration-150 hover:grayscale-0 ${logo.style}`}
    src={logo.logo}
    alt={logo.name}
  />
))

const index = () => {
  return (
    <Marquee
      speed={150}
      // pauseOnHover
      gradient
      className="border-y-2 border-y-black "
    >
      <div className="flex flex-row items-center justify-center gap-[5vw] py-10">
        {logos}
      </div>
    </Marquee>
  )
}

export default memo(index)
