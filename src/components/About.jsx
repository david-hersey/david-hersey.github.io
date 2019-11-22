import React from 'react';
import Hero from  './Hero.jsx';

class About extends React.Component {
  render() {
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <Hero />
      </div>
    )
  }
}

export default About;
