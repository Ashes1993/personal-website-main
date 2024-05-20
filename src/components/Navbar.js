import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useGlobalContext } from '../context'
import { Link } from 'react-router-dom'
import { MobileNavbar } from './MobileNavbar'

const Navbar = () => {
  const { isBurgerMenu, setIsBurgerMenu } = useGlobalContext()
  return (
    <>
      <nav className='navbar'>
        <Link to={'/'} className='header'>
          AE
        </Link>
        <ul className='navbar-links'>
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <Link to={'/resume'}>Resume</Link>
          </li>
          <li>
            <Link to={'/portfolio'}>Portfolio</Link>
          </li>
          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>
        </ul>
        <button
          className='burger-menu'
          onClick={() => setIsBurgerMenu(!isBurgerMenu)}
        >
          <GiHamburgerMenu />
        </button>
      </nav>
      {isBurgerMenu && <MobileNavbar />}
    </>
  )
}
export default Navbar
