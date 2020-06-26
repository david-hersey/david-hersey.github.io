import React from 'react'
import Card from './Card.jsx'

class Ssg extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Static Sites</h1>
        <p>The move from in-house PHP based codebase and CM to React built codebase with headless cloud based CM and S3 static files</p>
        <div className='row flex-wrap'>
          <Card images={['poe.png', 'sas.png']} />
        </div>
      </div>
    )
  }
}

export default Ssg
