import React from 'react'
import Container from '../components/UI/Container'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <Container>
      <Navbar />
      <div className='contact-container'>
        <h1 className='page-header'>Contact</h1>
        <div className='contact-item'>
          <p>Email: ashkaneslamii1993@gmail.com</p>
        </div>
      </div>
      <Footer />
    </Container>
  )
}

export default Contact
