import React, { memo } from 'react'

function Moon() {
  return <path d="M12 20h.01M10 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 110-16z" />
}

export default memo(Moon)
