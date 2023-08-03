import React from 'react'

import DarkModeToggle from '../../features/DarkMode/components/DarkModeToggle'

// TODO:
// 1. WHEN CLICKED ON ABOUT ME "BUT IT FEELS SO EMPTY WITHOUT ME" FROM EMINEMS WITHOUT ME GETS PLAYED
// 2. WHEN CLICKED ON WORK "WHO GOT THAT WORK?" FROM ASAP FERG GETS PLAYED
// 3. WHEN CLICKED ON CONTACT "THEY CALL ME KEY CAUSE I'M DOPE" FROM KEY GLOCK
const itemObjects = [
  { name: 'About me', url: '#' },
  { name: 'Work', url: '#' },
  { name: 'Contact', url: '#' }
]
const items = itemObjects.map((item) => (
  <a
    key={item.name}
    href={item.url}
    className="text-gray-600 hover:text-gray-900"
  >
    {item.name}
  </a>
))

const Navigation = () => {
  return (
    <nav className="flex justify-center space-x-4">
      {items}
      <DarkModeToggle />
    </nav>
  )
}

export default Navigation
