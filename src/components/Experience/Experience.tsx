import React from 'react'

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
  <div
    key={ind}
    className={`right-timeline mb-8 flex w-full items-center justify-between ${
      ind % 2 > 0 ? 'flex-row-reverse' : ''
    }`}
  >
    <div className="order-1 w-5/12"></div>
    <div className="z-20 order-1 flex items-center rounded-full bg-gray-700 shadow-xl">
      <div className="mx-auto flex flex-col items-center justify-center p-5 text-sm font-semibold leading-tight tracking-wider text-white">
        <p>{exp.endingDate}</p>
        <div className=" rotate-90">-</div>
        <p>{exp.startingDate}</p>
      </div>
    </div>
    <div className="order-1 w-5/12 rounded-lg bg-gray-300 px-6 py-4 shadow-xl">
      <h3 className="mb-3 font-dalfitra text-xl font-bold tracking-wider text-gray-800">
        {exp.name}
      </h3>
      <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
        <ul className="list-disc">
          {exp.responsibilities.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </p>
    </div>
  </div>
))

const Experience = () => {
  return (
    <div className="container mx-auto h-full w-full bg-gray-200">
      <div className="wrap relative h-full overflow-hidden p-10">
        <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
        {/* <div className="right-timeline mb-8 flex w-full items-center justify-between">
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
        </div> */}
        {timeline}
      </div>
    </div>
  )
}

export default Experience
