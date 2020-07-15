import React from 'react'
import { Link } from 'react-router-dom'
// import { Legoland } from 'Legoland.jsx'

// Need to set the col class based on how many cards will be used!!!!
// Count/map over the array passed in

// Need to defend against errors in the image array passed in!!!!

class Card extends React.Component {
  render () {
    const { cardtitle, images, path, link, header } = this.props

    const cardTitle = cardtitle

    const imagePath = path || './images/screenshots/'

    const linkRequired = link || false

    const title = (image) => {
      const strippedTitle = image.replace(/\.[^/.]+$/, '')
      return strippedTitle
    }

    const cleanedTitle = (image) => {
      const cleanedTitle = image.replace(/\.[^/.]+$/, '')
      return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1)
    }

    const card = images.map((image, index) => {
      console.log('INDEX', index)

      return (
        <div className='col-xs-12 col-md-4 col-sm-6 d-sm-flex' key={index}>
          <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
            <div className='card'>
              <img className='img-fluid card-img-top' src={imagePath + image} alt={cleanedTitle(image)} />
              <div className='card-body'>
                {header &&
                  <h5 className='card-title'>{cardTitle || cleanedTitle(image)}</h5>}
                {/* <p className="card-text"></p> */}
                {link &&
                  <Link to={linkRequired || `/${title(image)}`} className='btn btn-card btn-primary cta' data-action='Clicked' data-category='Card Links' data-label={cleanedTitle(image) + ' - About Card'}>More about {cardTitle}</Link>}
              </div>
            </div>
          </div>
        </div>
      )
    })

    return (
      <>
        {card}
      </>
    )
  }
}

export default Card
