import React, { memo } from 'react'
import Marquee from './Marquee'

const Brands = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="mb-4 font-dalfitra text-8xl leading-snug tracking-tighter text-gray-400">
          You may know
          <br />
          <span className="text-black">brands</span> I have{' '}
          <span className="text-black">worked</span> with
        </h2>
        <Marquee />
      </div>
    </section>
  )
}

export default memo(Brands)
