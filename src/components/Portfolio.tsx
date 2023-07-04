import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'

import Footer from './Footer'
import Header from './header'
import Marquee from './Marquee/MarqueeSection'

const Portfolio: React.FC = () => {
  const darkMode = useSelector((state: { darkMode: boolean }) => state.darkMode)

  const mode = useMemo(() => (darkMode ? 'dark' : ''), [darkMode])

  return (
    <div className={`bg-gray-100 ${mode}`}>
      <Header />
      {/* Hero */}
      <section className="flex h-[calc(100vh-72px)] flex-col justify-center bg-blue-500 py-20 text-white">
        <div className="container mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">Welcome to My Portfolio</h2>
          <p className="mb-8 text-lg">
            I'm a web developer with expertise in frontend development using
            React, TypeScript, and Tailwind CSS.
          </p>
          <button className="rounded-full bg-white py-2 px-6 font-bold text-blue-500 shadow-lg hover:bg-blue-100">
            View Projects
          </button>
        </div>
      </section>
      {/* About */}
      <section className="px-10 py-20">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">About Me</h2>
          <p className="mb-8 text-lg">
            I am a passionate web developer with several years of experience in
            building user-friendly and performant web applications. I specialize
            in frontend development, focusing on creating intuitive and
            responsive interfaces using modern technologies.
          </p>
          <p className="text-lg">Some of my skills include:</p>
          <ul className="ml-8 mt-4 list-disc">
            <li>React</li>
            <li>TypeScript</li>
            <li>Tailwind CSS</li>
            <li>HTML5</li>
            <li>CSS3</li>
          </ul>
        </div>
      </section>
      {/* Projects */}
      <section className="bg-gray-200 px-10 py-20">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Project items */}
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Project 1</h3>
              <p className="mb-4 text-lg">
                A web application for managing tasks and projects.
              </p>
              <img
                src="project1-placeholder.png"
                alt="Project 1"
                className="mb-4 h-40 w-full object-cover"
              />
              <a href="#" className="font-bold text-blue-500 hover:underline">
                View Project
              </a>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Project 2</h3>
              <p className="mb-4 text-lg">
                An e-commerce website for selling fashion accessories.
              </p>
              <img
                src="project2-placeholder.png"
                alt="Project 2"
                className="mb-4 h-40 w-full object-cover"
              />
              <a href="#" className="font-bold text-blue-500 hover:underline">
                View Project
              </a>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold">Project 3</h3>
              <p className="mb-4 text-lg">
                A blogging platform for sharing articles and tutorials.
              </p>
              <img
                src="project3-placeholder.png"
                alt="Project 3"
                className="mb-4 h-40 w-full object-cover"
              />
              <a href="#" className="font-bold text-blue-500 hover:underline">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Companies Logo Marquee */}
      <section className="px-10 py-10">
        <div className="container mx-auto">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Featured Companies
          </h2>
          <Marquee />
        </div>
      </section>
      {/* Contact */}
      <section className="bg-gray-300 px-10 py-20">
        <div className="container mx-auto">
          <h2 className="mb-4 text-3xl font-bold">Contact Me</h2>
          <p className="mb-8 text-lg">
            Feel free to reach out to me for any inquiries or collaboration
            opportunities. I'm available for freelance work and open to new
            projects.
          </p>
          {/* Contact form needs to be here */}
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Portfolio
