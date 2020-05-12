import React from 'react'
import Card from './Card.jsx'

class About extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <Card images={['alton.png', 'warwick.png']} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet nisi maximus lectus malesuada vehicula non at magna. Aliquam erat volutpat. Donec et libero aliquet, ullamcorper urna id, ornare turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id faucibus tellus. Aenean pretium convallis nisi, et porttitor felis sagittis ut. Praesent porta turpis vitae neque egestas, pharetra porttitor tortor sodales. Donec pretium eros sed tellus bibendum euismod. Curabitur ac enim sed arcu convallis imperdiet.</p>
      </div>
    )
  }
}

export default About
