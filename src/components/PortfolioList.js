import React from 'react'
import image from '../components/images/portfolio-ecommerce.png'

const PortfolioList = () => {
  return (
    <div>
      <h1 className='page-header'>Portfolio</h1>
      <div className='portfolio-image'>
        <a href='https://ashkanes-portfolio-ecommerce.netlify.app'>
          <img
            src={image}
            alt='ecommerce'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </a>
      </div>
    </div>
  )
}

export default PortfolioList
