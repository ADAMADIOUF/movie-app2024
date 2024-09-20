import React, { useRef, useState, useEffect } from 'react'
import DarkMode from './DarkMode'
import { FaBars } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Search from './Search'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false)
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  const toggleLinks = () => {
    setShowLinks((prev) => !prev)
  }

  useEffect(() => {
    if (showLinks) {
      linksContainerRef.current.style.height = `${
        linksRef.current.getBoundingClientRect().height
      }px`
    } else {
      linksContainerRef.current.style.height = '0px'
    }
  }, [showLinks])

  return (
    <header className='header'>
      <div className='nav-center'>
        <div className='nav-header'>
          <div className='logo'>
            <h3>Movie</h3>
          </div>
          <div className='nav-actions'>
            <div>
              <DarkMode />
            </div>
            <div>
              <button className='nav-toggle' onClick={toggleLinks}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>

        <div className='search-bar'>
          <Search />
        </div>

        <div className='links-container' ref={linksContainerRef}>
          <ul className={`links`} ref={linksRef}>
            <NavLink
              to={`/`}
              onClick={toggleLinks}
              activeClassName='active-navLink'
            >
              <li className='nav-link'>home</li>
            </NavLink>
            <NavLink
              to={`/popular`}
              onClick={toggleLinks}
              activeClassName='active-navLink'
            >
              <li className='nav-link'>popular</li>
            </NavLink>
            <NavLink
              to={`/top-rated`}
              onClick={toggleLinks}
              activeClassName='active-navLink'
            >
              <li className='nav-link'>top rated</li>
            </NavLink>
            <NavLink
              to={`/upcoming`}
              onClick={toggleLinks}
              activeClassName='active-navLink'
            >
              <li className='nav-link'>upcoming</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
