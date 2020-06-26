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
          <Carousel images={this.props.images} />
        ) : (
          <picture>
            <source srcSet={this.props.tabupimage} media='(min-width: 800px)' />
            <img src={this.props.image} className='img-fluid' alt={this.props.image} />
          </picture>
        )}
      </div>
    )
  }
}

export default Hero
