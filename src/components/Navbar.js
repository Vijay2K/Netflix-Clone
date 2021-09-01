import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  const [handleShow, setHandleShow] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setHandleShow(true)
      } else {
        setHandleShow(false)
      }
    })
    return () => {
      window.removeEventListener('scroll')
    }
  }, [])

  return (
    <div className={`nav ${handleShow && 'nav__black'}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png"
        alt="profile"
      />
    </div>
  )
}

export default Navbar
