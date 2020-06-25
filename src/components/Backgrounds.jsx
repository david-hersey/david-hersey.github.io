import React from 'react'

// Used as insporiation: https://tympanus.net/Tutorials/CSS3FullscreenSlideshow/index.html

class Backgrounds extends React.Component {
  render () {
    return (
      <ul className='background-slides'>
        <li>
          <span>Image 1</span>
        </li>
        <li>
          <span>Image 2</span>
        </li>
        <li>
          <span>Image 3</span>
        </li>
        <li>
          <span>Image 4</span>
        </li>
      </ul>
    )
  }
}

export default Backgrounds
