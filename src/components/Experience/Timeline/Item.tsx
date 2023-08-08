import React, { memo } from 'react'

type itemT = {
  name: string
  startingDate: string
  endingDate: string
  responsibilities: string[]
  ind: number
}

const Item = ({
  endingDate,
  startingDate,
  name,
  responsibilities,
  ind
}: itemT) => {
  return (
    <div
      key={ind}
      className={`right-timeline mb-8 flex w-full items-center justify-between ${
        ind % 2 > 0 ? 'flex-row-reverse' : ''
      }`}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-10 order-1 flex items-center rounded-full bg-gray-700 shadow-xl">
        <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold leading-tight tracking-wider text-white">
          <p>{endingDate}</p>
          <div className=" rotate-90">-</div>
          <p>{startingDate}</p>
        </div>
      </div>
      <div className="order-1 w-5/12 rounded-lg bg-gray-300 px-6 py-4 shadow-xl">
        <h3 className="mb-3 font-dalfitra text-xl font-bold tracking-wider text-gray-800">
          {name}
        </h3>
        <div className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          <ul className="list-disc">
            {responsibilities.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default memo(Item)
