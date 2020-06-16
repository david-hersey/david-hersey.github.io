import React from 'react'
import Card from './Card.jsx'

class Theatre extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Theatre</h1>
        <p>.....and a variety of white label landing pages/booking flows.</p>
        <div className='row flex-wrap'>
          <Card images={['poe.png', 'sas.png']} />
        </div>
      </div>
    )
  }
}

export default Theatre
