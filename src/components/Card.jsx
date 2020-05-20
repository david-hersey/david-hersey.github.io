import React from 'react'

// Need to set the col class based on how many cards will be used!!!!
// Count/map over the array passed in

// Need to defend against errors in the image array passed in!!!!

class Card extends React.Component {
  render () {
    const { images } = this.props

    const title = (image) => {
      let cleanedTitle = image.replace(/\.[^/.]+$/, '')
      return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
    }

    const card = images.map((image, index) => 
        <div className='col-xs-12 col-sm-6 d-sm-flex'>
          <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
            <div className="card">
              <img className='img-fluid card-img-top' src={require(`../images/screenshots/${image}`)} alt={title(image) + ' SEO landing page'} />
              <div className="card-body">
                <h5 className="card-title">{title(image)} SEO landing page</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label={title(image) + ' - About Card'}>Go somewhere</a>
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
