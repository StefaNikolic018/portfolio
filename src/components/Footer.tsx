import React, { memo } from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <p className="text-center text-gray-500">
          © {new Date().getFullYear()} {import.meta.env.VITE_USERNAME}. All
          rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
