import React from 'react'

class Carousel extends React.Component {
  render () {
    const { images } = this.props

    const carouselItem = images.map((image, index) =>
      <div className={'carousel-item ' + (index === 0 ? 'active' : '')}>
        <img className='d-block w-100' src={image} alt='' />
      </div>
    )

    return (
      <div id='carouselIndicators' className='carousel slide' data-ride='carousel'>
        <div className='carousel-inner'>{carouselItem}</div>
        <a className='carousel-control-prev' href='#carouselIndicators' role='button' data-slide='prev' data-action='Clicked' data-category='Carousel Nav' data-label='Carousel Previous'>
          <span className='carousel-control-prev-icon' aria-hidden='true' />
          <span className='sr-only'>Previous</span>
        </a>
        <a className='carousel-control-next' href='#carouselIndicators' role='button' data-slide='next' data-action='Clicked' data-category='Carousel Nav' data-label='Carousel Next'>
          <span className='carousel-control-next-icon' aria-hidden='true' />
          <span className='sr-only'>Next</span>
        </a>
      </div>
    )
  }
}

export default Carousel
