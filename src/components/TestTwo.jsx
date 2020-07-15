import React from 'react'
import AnimatedBg from 'react-animated-bg'

// https://www.npmjs.com/package/react-animated-bg

class TestTwo extends React.Component {
  render () {
    const imagesList = [
      'url("https://images.dog.ceo/breeds/labrador/n02099712_3503.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_5844.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7481.jpg")',
      'url("https://images.dog.ceo/breeds/labrador/n02099712_7414.jpg")'
    ]

    return (
      <div className='container mt-5'>
        <AnimatedBg
          colors={imagesList}
          duration={2}
          delay={1}
          timingFunction='ease-out'
          className='animated-section animated-images'
        >
          <div><h1>Test Two</h1></div>
        </AnimatedBg>
      </div>
    )
  }
}

export default TestTwo
