import React from 'react'
import { Link } from 'react-router-dom'
// import { Legoland } from 'Legoland.jsx'

// Need to set the col class based on how many cards will be used!!!!
// Count/map over the array passed in

// Need to defend against errors in the image array passed in!!!!

class Card extends React.Component {
  render () {
    const { images } = this.props

    const title = (image) => {
      let strippedTitle = image.replace(/\.[^/.]+$/, '')
      return strippedTitle
    }

    const cleanedTitle = (image) => {
      let cleanedTitle = image.replace(/\.[^/.]+$/, '')
      return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
    }

    const card = images.map((image, index) => 
        <div className='col-xs-12 col-sm-6 d-sm-flex'>
          <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
            <div className="card">
              <img className='img-fluid card-img-top' src={require(`../images/screenshots/${image}`)} alt={cleanedTitle(image) + ' SEO landing page'} />
              <div className="card-body">
                <h5 className="card-title">{cleanedTitle(image)}</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to={`/${title(image)}`} className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label={cleanedTitle(image) + ' - About Card'}>More about projects></Link>
              </div>
            </div>
          </div>
        </div>
    )

    return (
      <div className="row">
        {card}
      </div>
    )
  }
}

export default Card
