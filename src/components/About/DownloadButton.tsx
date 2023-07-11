import React, { memo } from 'react'

import { HiDocumentText } from 'react-icons/hi'

function DownloadButton() {
  // relative z-10 inline-block flex-shrink-0 cursor-pointer bg-none py-3 px-3 text-2xl font-bold text-white no-underline
  //   before:absolute before:top-3 before:right-3 before:-z-10 before:h-full before:w-full before:bg-gray-800
  //   before:transition-transform before:duration-500 after:absolute after:top-0 after:right-0 after:h-full after:w-full after:border-2 after:border-solid
  //   after:border-white after:opacity-100
  //   after:transition-transform after:duration-500
  //   hover:before:translate-x-3 hover:before:-translate-y-3 hover:before:transition-transform
  //   hover:before:duration-500 hover:before:ease-in hover:after:-translate-x-3
  //   hover:after:translate-y-3 hover:after:transition-transform
  //   hover:after:duration-500 hover:after:ease-in
  return (
    <a
      href="./Stefan Nikolic Resume.pdf"
      download="Stefan-Nikolic-CV.pdf"
      target="_blank"
      rel="noreferrer"
      className="relative z-10 float-right mt-2 flex flex-row justify-center gap-3 border-2 border-black bg-white py-5 px-10 text-white transition-all duration-150 before:absolute
      before:top-3 before:right-3 before:-z-10 before:h-full before:w-full before:bg-gray-400 before:transition-transform
    before:duration-500 after:absolute after:top-0 after:right-0 after:h-full after:w-full after:border-2 after:border-solid after:border-white
    after:opacity-100 after:transition-transform
    after:duration-500 hover:shadow-xl
    hover:before:translate-x-3 hover:before:-translate-y-3 hover:before:transition-transform
    hover:before:duration-500 hover:before:ease-in hover:after:-translate-x-3
    hover:after:translate-y-3 hover:after:transition-transform
    hover:after:duration-500 hover:after:ease-in
      "
    >
      Download CV <HiDocumentText className="inline-block text-2xl" />
    </a>
  )
}
export default memo(DownloadButton)
