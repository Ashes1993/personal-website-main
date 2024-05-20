import React from 'react'
import ResumeContent from '../components/ResumeContent'
import Navbar from '../components/Navbar'
import Container from '../components/UI/Container'
import ScrollToTopButton from '../components/ScrollToTopButton'
import Footer from '../components/Footer'

const Resume = () => {
  return (
    <Container>
      <Navbar />
      <ResumeContent />
      <Footer />
      <ScrollToTopButton />
    </Container>
  )
}

export default Resume
