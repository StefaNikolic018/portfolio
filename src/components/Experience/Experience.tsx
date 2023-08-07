import React from 'react'

import Timeline from './Timeline'

const Experience = () => {
  return (
    <div className="container mx-auto h-full w-full bg-gray-200">
      <div className="wrap relative h-full overflow-hidden p-10">
        <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
        <Timeline />
      </div>
    </div>
  )
}

export default Experience
