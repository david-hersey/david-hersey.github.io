import React from 'react';

class Carousel extends React.Component {
  render() {
    // NEED TO PASS IN ARRAY OF FILENAMES AND TWEAK TO MAP OVER
    // RATHER THAN HAVING TO SET INDIVIDUALLY
    const {imageOne, imageTwo} = this.props
    const imageOneUrl = require(`../images/screenshots/${imageOne}`)
    const imageTwoUrl = require(`../images/screenshots/${imageTwo}`)
    return (
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={imageOneUrl} alt="Alton Towers Holidays SEO" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Alton Towers Holidays landing page</h5>
              <p>Alton Towers</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={imageTwoUrl} alt="Warwick Castle Breaks SEO" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Warwick Castle Breaks landing page</h5>
              <p>Warwick Castle</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;
