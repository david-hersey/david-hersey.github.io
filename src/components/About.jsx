import React from 'react'
import { Link } from 'react-router-dom'

import Card from './Card.jsx'

class About extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <p>After completing my Multimedia Degree I was at the forefront of the emerging Web Design community. During the last 15 years, my work experience has involved everything from static site design through to enterprise level applications. I take pride in building projects from the ground up, from wireframes through to functional interfaces, putting the end user experience first and translating business requirements into high quality software. I see modern frameworks and web technologies as tools to deliver a great user experience and I am not afraid to learn new things. I have worked in large teams in a fast paced environment and have lots of experience of working with other engineers on a shared code base. My specialist area is ecommerce for travel and tourism but my skill set is diverse and will translate to any software industry.</p>
        <Link to="/contact" className="btn btn-primary cta" data-action="" data-category="" data-label="">Please do get in touch</Link>
        {/*<div className='row flex-wrap'>
          <Card images={['alton.png', 'warwick.png', 'legoland.png', 'warwick.png', 'sas.png']} title='' link='true' header='true' />
        </div>*/}
      </div>
    )
  }
}

export default About
