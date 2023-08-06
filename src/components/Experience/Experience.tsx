import React from 'react'

const Experience = () => {
  return (
    <div className="container mx-auto h-full w-full bg-gray-200">
      <div className="wrap relative h-full overflow-hidden p-10">
        <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex items-center rounded-full bg-gray-800 shadow-xl">
            <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold text-white">
              <p>PRESENT</p>
              <div className=" rotate-90">-</div>
              <p>10/2022</p>
            </div>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex items-center rounded-full bg-gray-800 shadow-xl">
            <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold text-white">
              <p>11/2022</p>
              <div className=" rotate-90">-</div>
              <p>11/2021</p>
            </div>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="right-timeline mb-8 flex w-full items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex items-center rounded-full bg-gray-800 shadow-xl">
            <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold text-white">
              <p>11/2021</p>
              <div className=" rotate-90">-</div>
              <p>05/2021</p>
            </div>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-gray-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              Lorem Ipsum
            </h3>
            <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        <div className="left-timeline mb-8 flex w-full flex-row-reverse items-center justify-between">
          <div className="order-1 w-5/12"></div>
          <div className="z-20 order-1 flex items-center rounded-full bg-gray-800 shadow-xl">
            <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold text-white">
              <p>03/2021</p>
              <div className=" rotate-90">-</div>
              <p>11/2020</p>
            </div>
          </div>
          <div className="order-1 w-5/12 rounded-lg bg-red-400 px-6 py-4 shadow-xl">
            <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
            <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
