import React, { memo, useMemo } from 'react'

import { IconT } from './types'

const Icon = ({ Icon, name, color }: IconT) => {
  const iconStyle = useMemo(
    () =>
      `text-6xl text-white transition-all duration-150 group-hover:text-${color} group-hover:scale-110`,
    [color]
  )
  return (
    <div className="group flex flex-row items-center justify-between border-b-2 border-b-gray-700 px-5 py-5">
      <Icon className={iconStyle} />{' '}
      <span className="pr-5 font-dalfitra text-6xl text-white opacity-5 transition-all duration-150 group-hover:opacity-20">
        {name}
      </span>
    </div>
  )
}

export default memo(Icon)
