import React from 'react'
import { Link } from 'react-router-dom'

// https://codepen.io/jouanmarcel/pen/NLgVjm

class ShakeCard extends React.Component {
  render () {

      return (
        <div id="shakeContainer">
          <div class="item">
            <div class="content">
              <h2>Merlin Theme Park Breaks</h2>
            </div>
            <div class="previews">
              <div class="preview-image">
                <a href='/theme-parks'><img src="./images/screenshots/alton.png" alt="Alton Towers Holidays" /></a>
              </div>
              <div class="preview-image">
                <a href='/theme-parks'><img src="./images/screenshots/chessington.png" alt="Chessington Holidays" /></a>
              </div>
              <div class="preview-image">
                <a href='/theme-parks'><img src="./images/screenshots/legoland.png" alt="Legoland Holidays" /></a>
              </div>
              <div class="preview-image">
                <a href='/theme-parks'><img src="./images/screenshots/thorpe.png" alt="Thorpebreaks" /></a>
              </div>
              <div class="preview-image">
                <a href='/theme-parks'><img src="./images/screenshots/warwick.png" alt="Warwick Castle Breaks" /></a>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <h2>Theatre Breaks</h2>
            </div>
            <div class="previews">
              <div class="preview-image">
                <a href='/theatre'><img src="./images/screenshots/sas.png" /></a>
              </div>
              <div class="preview-image">
                <img src="./images/screenshots/poe.png" />
              </div>
              <div class="preview-image">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2016/07/americanwest-mezz-1024x576.jpg" />
              </div>
              <div class="preview-image">
                <img src="https://www.nationalgeographic.com/content/dam/photography/photos/000/675/67547.ngsversion.1467941445762.adapt.1900.1.jpg" />
              </div>
              <div class="preview-image">
                <img src="https://i2.wp.com/fotogr8.com/wp-content/uploads/2016/08/jeffrey-swanson-landscape-photographer.jpg?resize=600%2C397&ssl=1" />
              </div>
            </div>
          </div>
          <div class="item">
            <div class="content">
              <h2>Other</h2>
            </div>
            <div class="previews">
              <div class="preview-image">
                <a href='/theme-parks#other'><img src="./images/screenshots/paultons.png" /></a>
              </div>
              <div class="preview-image">
                <img src="https://www.popphoto.com/sites/popphoto.com/files/styles/1000_1x_/public/images/2018/07/00-otherworldly-national-park.jpg?itok=1bxhktRC&fc=50,50" />
              </div>
              <div class="preview-image">
                <img src="https://www.adorama.com/alc/wp-content/uploads/2016/07/americanwest-mezz-1024x576.jpg" />
              </div>
              <div class="preview-image">
                <img src="https://www.nationalgeographic.com/content/dam/photography/photos/000/675/67547.ngsversion.1467941445762.adapt.1900.1.jpg" />
              </div>
              <div class="preview-image">
                <img src="https://i2.wp.com/fotogr8.com/wp-content/uploads/2016/08/jeffrey-swanson-landscape-photographer.jpg?resize=600%2C397&ssl=1" />
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default ShakeCard
