import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='https://www.linkedin.com/in/ashkan-eslami-3982a7187'>
        <AiFillLinkedin className='footer-links' />
      </a>
      <p style={{ fontSize: '16px' }}>
        This website is made by me using React library.
      </p>
    </footer>
  )
}

export default Footer
