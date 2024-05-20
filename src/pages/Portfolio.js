import React from 'react'
import Container from '../components/UI/Container'
import Navbar from '../components/Navbar'
import PortfolioList from '../components/PortfolioList'
import Footer from '../components/Footer'

const Portfolio = () => {
  return (
    <Container>
      <Navbar />
      <PortfolioList />
      <Footer />
    </Container>
  )
}

export default Portfolio
