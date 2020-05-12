import React from 'react'

// Need to set the col class based on how many cards will be used!!!!
// Count/map over the array passed in

class Card extends React.Component {
  render () {
    const { images } = this.props

    const card = images.map((image, index) =>
      <div className="col-sm-6">
        <div className="card">
          <img className='img-fluid card-img-top' src={require(`../images/screenshots/${image}`)} alt={image.replace(/\.[^/.]+$/, '') + ' SEO landing page'} />
          <div className="card-body">
            <h5 className="card-title">{image.replace(/\.[^/.]+$/, '')} SEO landing page</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
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
