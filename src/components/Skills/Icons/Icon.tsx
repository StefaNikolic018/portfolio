import React, { memo } from 'react'

import { IconType } from 'react-icons/lib'

type IconProps = {
  Icon: IconType
}

const Icon = ({ Icon }: IconProps) => {
  return (
    <div className="border-b-2 border-b-gray-700 px-5 py-5">
      <Icon className="text-6xl text-white" />
    </div>
  )
}

export default memo(Icon)
