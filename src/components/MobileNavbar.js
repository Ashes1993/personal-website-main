import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

export const MobileNavbar = () => {
  const { setIsBurgerMenu } = useGlobalContext()
  return (
    <div className='mobile-navbar'>
      <Link onClick={() => setIsBurgerMenu(false)} to={'/'}>
        Home
      </Link>
      <Link onClick={() => setIsBurgerMenu(false)} to={'/resume'}>
        Resume
      </Link>
      <Link onClick={() => setIsBurgerMenu(false)} to={'/portfolio'}>
        Portfolio
      </Link>
      <Link onClick={() => setIsBurgerMenu(false)} to={'/contact'}>
        Contact
      </Link>
    </div>
  )
}
