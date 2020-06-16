import React from 'react'
import Card from './Card.jsx'

class Theme extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Theme Parks</h1>
        <p>I have worked on most of the UK major theme park brands. Some examples are.</p>
        <h2>Merlin</h2>
        <p>Providing the end to end holiday/breaks solution for Merlin including landing pages and custom ecommerce booking flow to the largest Merlin attractions.</p>
        <p>90% of the landing pages are built on a PHP codebase with the other 10% being migrated to a JS/Node/React based codebase.</p>
        <p>The booking flow sits on a JS/Node/React and incorporates numerous inhouse built microservices and 3rd party integrations</p>
        <div className='row flex-wrap'>
          <Card images={['legoland_hotels.png', 'legoland_availability_1.png', 'legoland_availability_2.png', 'legoland_moreinfo_1.png', 'legoland_moreinfo_2.png', 'legoland_payment_1.png']} path='./images/screenshots/legoland/' />
        </div>
        <a name='other'></a>
        <h2>Other</h2>
        <p>Paultons/Peppa Pig World and own brand packages</p>
        <div className='row flex-wrap'>
          <Card images={['paultons.png']} />
        </div>
      </div>
    )
  }
}

export default Theme
