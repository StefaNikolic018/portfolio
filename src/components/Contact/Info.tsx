import React, { memo } from 'react'

import { MdLocalPhone, MdEmail } from 'react-icons/md'

type contactItem = {
  icon: React.ReactElement
  link: string
  name: string
}

const contactItems: contactItem[] = [
  {
    icon: <MdLocalPhone className="mr-2 inline-block text-xl" />,
    link: '+381611555036',
    name: '+381 61 155 5036'
  },
  {
    icon: <MdEmail className="mr-2 inline-block text-xl" />,
    link: 'emailto:stefanikolic018@gmail.com',
    name: 'stefanikolic018@gmail.com'
  }
]

const contact = contactItems.map((item: contactItem) => (
  <a
    key={item.name}
    href={item.link}
    className="pb-1 transition-all duration-150 hover:opacity-70"
  >
    {item.icon} {item.name}
  </a>
))

const Info = () => {
  return <div className="flex flex-col justify-start">{contact}</div>
}

export default memo(Info)
