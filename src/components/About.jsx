import React from 'react';
import Hero from  './Hero.jsx';
import TestApi from  './ApiTest.jsx';

class About extends React.Component {
  render() {
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <Hero image="https://via.placeholder.com/1200x400.png?text=About+Us" />
        <div className="row">
          <TestApi />
        </div>
      </div>
    )
  }
}

export default About;
