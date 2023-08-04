import React, { memo } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { FaViber, FaTelegram, FaWhatsapp } from 'react-icons/fa'

type contactItem = {
  icon: React.ReactElement
  link: string
  name: string
}

const socialItems: contactItem[] = [
  {
    icon: (
      <AiFillGithub className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-110 group-hover:text-black" />
    ),
    link: 'https://github.com/StefaNikolic018',
    name: 'GITHUB'
  },
  {
    icon: (
      <AiFillLinkedin className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-110 group-hover:text-blue-400" />
    ),
    link: 'https://www.linkedin.com/in/stefanikolic18/',
    name: 'LINKEDIN'
  },
  {
    icon: (
      <FaViber className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-110 group-hover:text-purple-400" />
    ),
    link: 'viber://contact?number=%2B381611555036',
    name: 'VIBER'
  },
  {
    icon: (
      <FaTelegram className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-110 group-hover:text-sky-400" />
    ),
    link: 'https://t.me/telefonov1',
    name: 'TELEGRAM'
  },
  {
    icon: (
      <FaWhatsapp className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-110 group-hover:text-green-400" />
    ),
    link: 'https://wa.me/381611555036?text=Hi20%Stefan20%can20%we20%talk20%about20%your20%web20%development20%services',
    name: 'WHATSAPP'
  }
]

const social = socialItems.map((item: contactItem) => (
  <div
    key={item.name}
    className="group flex w-full flex-row items-center justify-center rounded-md bg-gray-900 bg-opacity-10 bg-clip-padding p-5 backdrop-blur-sm backdrop-filter hover:bg-opacity-5"
  >
    <a
      key={item.name}
      href={item.link}
      className="w-full text-sm text-gray-200 transition-all duration-150 group-hover:text-white"
      target="_blank"
    >
      {item.icon} {item.name}
    </a>
  </div>
))

const Social = () => {
  return (
    <div className="mt-5 flex w-full flex-col justify-start gap-2">
      {social}
    </div>
  )
}

export default memo(Social)
