import React from 'react'
import Navbar from '../components/Navbar'
import LandingContent from '../components/LandingContent'
import Container from '../components/UI/Container'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <Container>
      <Navbar />
      <LandingContent />
      <Footer />
    </Container>
  )
}

export default Home
