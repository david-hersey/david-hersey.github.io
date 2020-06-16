import React from 'react'
import { Link } from 'react-router-dom'

import Card from './Card.jsx'

class Work extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Take a look at some of my work</h1>
        <p>Work copy</p>
        <div className='row flex-wrap'>
          <Card images={['logo-blue.png']} path='./images/' cardtitle='Theme Parks' link='merlin-entertainment' header='true' />
          <Card images={['aws.png']} path='./images/' cardtitle='SSG' link='static-site' header='true' />
        </div>
      </div>
    )
  }
}

export default Work
