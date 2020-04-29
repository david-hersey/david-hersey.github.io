import React from 'react';
import Carousel from  './Carousel.jsx';

class About extends React.Component {
  render() {
    // NEED TO PASS DOWN ARRAY(S) RATHER THAN INDIVIDUAL PROPS TO THEN MAP OVER
    return (
      <div className='container mt-5'>
        <h1>About</h1>
        <Carousel imageOne='alton.png' imageTwo='warwick.png' />
        <div className="row">
          <p>I have been in the web world for over 13 years and currently enjoy building UI for enterprise level applications. Having started my working life, and the susequent 12 years, as an electrician I decided to retrain to enter the world of the web. 
          I belive this very mixed variety of experience gives me a balanced outlook on life and a well rounded understanding of people. This allows me to converse and work with anybody be it technical or non-technical, I have often taken this on and bridged this gap over the last few years.
          I have a good grasp on many different programming languages, frameworks and design methodologies and will always learn whatever techniques I require for a task at hand. I have never been intimidated by learning new disciplines and skills.</p>
          <p>I have worked in a variety of project styles and now fully embrace working in an agile environment and understand all of its values and principles. 
          My experience and passion is at the front end of web development in the UI space. I understand the process of creating cross-browser, cross-platform, standards compliant sites and applications from the bottom up using wire-framing and am at my best adding the front end tech working alongside the designers.</p>

        </div>
      </div>
    )
  }
}

export default About;
