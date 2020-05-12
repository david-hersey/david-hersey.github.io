import React from 'react'
import Carousel from './Carousel.jsx'

// Hero plcaeholder come from: https://placeholder.com/

// CAN I LOOK AT USING IMGIX/SIMILAR API TO MAKE THIS SMART?

// Must be passed either an array for the carosuel or an image src

class Hero extends React.Component {
  render () {
    return (
      <div>
        {this.props.images ? (
          <Carousel images={['alton.png', 'warwick.png']} />
        ) : (
          <img src={this.props.image} className='img-fluid' />
        )}
      </div>
    )
  }
}

export default Hero
