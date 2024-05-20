import React from 'react'
import Container from '../components/UI/Container'
import Navbar from '../components/Navbar'
import { FaTimes } from 'react-icons/fa'

const Error = () => {
  return (
    <Container>
      <Navbar />
      <div className='error-content'>
        <FaTimes className='x-icon' />
        <p>
          This webpage does not exist. You can use the navbar to navigate
          throughout the website.
        </p>
      </div>
    </Container>
  )
}

export default Error
