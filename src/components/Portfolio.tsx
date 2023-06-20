import React, { useState, useMemo, useCallback } from 'react'
import logo from './../assets/sn-logo2.png'

const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  const mode = useMemo(() => (darkMode ? 'dark' : ''), [darkMode])

  const toggleDarkMode = useCallback(() => {
    setDarkMode(!darkMode)
  }, [darkMode])

  return (
    <div className={`bg-gray-100 ${mode}`}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between py-4 px-8">
          <h1 className="text-2xl font-bold">
            <img src={logo} className="h-10 w-10" />
          </h1>
          {/* Navigation menu */}
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Projects
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
            <button
              className="text-gray-600 hover:text-gray-900"
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
                >
                  <path d="M12 20h.01" />
                  <path d="M10 4a8 8 0 018 8c0 4.418-3.582 8-8 8a8 8 0 110-16z" />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-500 py-20 text-white">
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
          <h2 className="mb-4 text-3xl font-bold">Featured Companies</h2>
          <div className="flex space-x-8">
            {/* Company logos */}
            <img src="company1.png" alt="Company 1" className="h-12" />
            <img src="company2.png" alt="Company 2" className="h-12" />
            <img src="company3.png" alt="Company 3" className="h-12" />
            <img src="company4.png" alt="Company 4" className="h-12" />
          </div>
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
          {/* Contact form */}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <p className="text-center text-gray-500">
            © 2023 My Portfolio. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
