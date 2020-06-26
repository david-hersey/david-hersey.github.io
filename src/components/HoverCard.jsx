import React from 'react'
import { Link } from 'react-router-dom'

// https://codepen.io/jouanmarcel/pen/NLgVjm

class HoverCard extends React.Component {
  render () {

      return (
        <div className='col-xs-12 col-md-4 col-sm-6 d-sm-flex'>
          <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
            <div class="themeParks">
              <div class="lefter">
                <div class="text">Alton Towers</div>
              </div>
              <div class="left">
                <div class="text">Chessington</div>
              </div>
              <div class="center">
                <div class="explainer"><span>Theme Parks</span></div>
                <div class="text">Legoland</div>
                </div>
              <div class="right">
                <div class="text">Thorpe Park</div>
              </div>
              <div class="righter">
                <div class="text">Warwick Castle</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
}

export default HoverCard
