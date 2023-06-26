import React, { memo } from 'react'

function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <p className="text-center text-gray-500">
          © 2023 {import.meta.env.VITE_USERNAME} Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default memo(Footer)
