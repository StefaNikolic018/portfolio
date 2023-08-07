import React, { memo } from 'react'

import Item from './Item'

type jobT = {
  name: string
  startingDate: string
  endingDate: string
  responsibilities: string[]
}

const experience: jobT[] = [
  {
    name: 'Frontend developer at Mintly',
    startingDate: '09/2022',
    endingDate: 'PRESENT',
    responsibilities: [
      'Working closely with designers, back-end and DevOps engineers on building a product for NFT/Crypto market and made sure that it met the market needs and stayed competitive',
      'Using React with Typescript, Redux(Thunk), RTL and Tailwind to build UI components and Solana transaction systems with NFT listings using Solana Wallet Adapter and Web3.js',
      'Creating Web3 login system that connected Twitter and Discord accounts with the user wallet and displaying the user data from the Twitter API',
      'Helping back-end team with the API and writing middlewares in Node.js & Express'
    ]
  },
  {
    name: 'Frontend developer at ChipstarsBet',
    startingDate: '10/2021',
    endingDate: '11/2022',
    responsibilities: [
      'Working closely with designer on rebranding and changing the whole looks of a web application based on React/ TypeScript using React Query, MUI, SwiperJs, Mobx, FramerMotion, StyledComponents and testing with React Testing Library',
      'Creating PHP scripts for sending emails through contact forms',
      'Using i18n for internationalization of casino and Geo-blocking certain countries',
      'Creating static pages for SEO optimisation of Q&A, T&C and other pages in Next.js',
      'Building login/register system and an affiliates section of the application with affiliates register form and implementing an affiliate code mechanism for new users',
      'Dealing with queries and mutations to talk to server through GraphQL'
    ]
  },
  {
    name: 'PHP/Drupal developer at Fermicoding',
    startingDate: '05/2021',
    endingDate: '09/2021',
    responsibilities: [
      'Customizing and building Drupal modules and themes from scratch using PHP, CSS, JavaScript',
      'Building, setting up and deploying Cordova nautical application to Google Play and App Store that used Leaflet.js for showing maps and coordination',
      'Working with foreign clients on enhancing their products and satisfying their needs'
    ]
  },
  {
    name: 'Frontend developer at SM Agency',
    startingDate: '11/2020',
    endingDate: '03/2021',
    responsibilities: [
      'Setting up JAMstack project on Netlify by writing YML files and building static pages with Nuxt.js to populate application with data from YML files and creating Vue components',
      'Building landing and static pages with Bootstrap 4 and JavaScript from Adobe XD designs',
      'Working with clients on satisfying their needs and implementing their designs'
    ]
  }
]

const timeline = experience.map((exp, ind) => (
  <Item key={ind} {...exp} ind={ind} />
))

const Timeline = () => {
  return <>{timeline}</>
}

export default memo(Timeline)
