import React, { memo } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

type contactItem = {
  icon: React.ReactElement
  link: string
  name: string
}

const socialItems: contactItem[] = [
  {
    icon: (
      <AiFillGithub className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-125" />
    ),
    link: 'https://github.com/StefaNikolic018',
    name: 'GITHUB'
  },
  {
    icon: (
      <AiFillLinkedin className="mr-4 inline-block text-4xl transition-all duration-150 group-hover:scale-125" />
    ),
    link: 'https://www.linkedin.com/in/stefanikolic18/',
    name: 'LINKEDIN'
  }
]

const social = socialItems.map((item: contactItem) => (
  <div
    key={item.name}
    className="group flex w-full flex-row items-center justify-center rounded-md bg-gray-500 bg-opacity-10 bg-clip-padding p-5 backdrop-blur-sm backdrop-filter hover:bg-opacity-5"
  >
    <a
      key={item.name}
      href={item.link}
      className="w-full text-lg transition-all duration-150"
      target="_blank"
    >
      {item.icon} {item.name}
    </a>
  </div>
))

const Social = () => {
  return (
    <div className="mt-5 flex w-full flex-col justify-start gap-5">
      {social}
    </div>
  )
}

export default memo(Social)
