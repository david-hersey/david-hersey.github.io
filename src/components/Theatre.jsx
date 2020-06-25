import React from 'react'
import Card from './Card.jsx'

class Theatre extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Theatre</h1>
        <p>Working with and providing the end to end breaks solution for all of the major London based agents, shows and theatres through both inhouse and a variety of white labelled brands.</p>
        <div className='row flex-wrap'>
          <Card images={['poe.png', 'sas.png']} />
        </div>
      </div>
    )
  }
}

export default Theatre
