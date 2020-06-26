import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='container container-main mt-5'>
        <div className='col-xs-12 text-center'>
          <h1>David Hersey</h1>
          <h5>Front End Web Developer</h5>
          <p className='text-left'>Beginning my journey as a Front End Web Developer nearly 14 years ago, I have worked on huge range of digital products for both business and consumer use. This has been predominantley in the travel industry but the skills I have attained will allow me to work across/within any industry.</p>
          <p className='text-left'>Personally I'm quiet, happy, naturally curious and enjoy improving one challenge at a time.</p>
          <p className='text-left'>I don't see myself as quite full stack but I have touched most areas and am happy to get involved.</p>
          <p className='text-left'>I love to code with the same eye for detail as a designer.</p>
          <p className='text-left'>Having this experience across all areas of the stack allows me to ensure the Front End work is carried out withe the full scope in mind.</p>
          <p className='text-left'>Working in an Aglie way ensures we get the code rolled out but I always have an eye on the future.</p>
        </div>
        <div className='row'>
          <div className='col-md-4 text-center'>
            <h5>Skills</h5>
            <ul className='text-left'>
              <li>HTML, XML, W3C standards-compliance, cross-browser compliance</li>
              <li>CSS, Responsive / Adaptive Design, frameworks – LESS, SASS, Bootstrap</li>
              <li>JavaScript - NodeJS, JQuery, ReactJS other JS libraries / frameworks, AJAX</li>
              <li>PHP – L.A.M.P, WordPress</li>
              <li>E-commerce - Holiday Extras custom ecommerce platform</li>
              <li>Build tools and task runners - Webpack, Gulp, Grunt</li>
              <li>Infrastructure - AWS, cPanel</li>
              <li>Agile Development, JIRA, Scrum, Kanban</li>
              <li>TDD, Testing Tools and Frameworks – SeleniumJS, JasmineJS, MochaJS, Sinon, Chai</li>
              <li>Version Control Systems – Github, Bitbucket, SVN</li>
              <li>Database technologies - Oracle MySQL, DB2, Apache CouchDB</li>
              <li>Metrics and tracking - GTM, GA, Looker</li>
              <li>Adobe Creative Suite - Photoshop, Flash, Wire-framing</li>
            </ul>
          </div>
          <div className='col-md-4 text-center'>
            <h5>Experience</h5>
            <ul className='text-left'>
              <li>Working closely with designers to take wireframes/designs and turn them into successful largescale web apps</li>
              <li>Alongside the larger scale projects working on house keeping and catching issues that may slip through QA and hit production</li>
              <li>Creation of an internal trigae system/service</li>
              <li>Using data to constantly work on and improve UX/UI and coversion rates</li>
              <li>Asssited in simplifying a monolithic predominately PHP codebase to help create single mainly NodeJS codebase structured solution</li>
              <li>Asssited in splitting this further into multiple microservices</li>
              <li>Using Shift Left testing</li>
              <li>Running Standups, agile 'planit poker' planning sessions and all inbetween</li>
              <li>Collaborating to understand pain points and drive improvement in business processes</li>
              <li>Mentoring new starters</li>
              <li>Assisting teams within the business to use/get the best out of the systems</li>
              <li>I have an eye for detail with an appreciation for design</li>
            </ul>
          </div>
          <div className='col-md-4 text-center'>
            <h5>Lastest Tech</h5>
            <ul className='text-left'>
              <li>Professionally I am currently moving landing pages from an inhouse PHP driven CMS feeding sites on a PHP codebase, across to a cloud based headless CMS feeding S3 hosted static site files on a Node/React codebase.</li>
              <li>Personally I am currently developing a site for a designer using Gatsby, Prismic and is built and hosted with Netlify</li>
              <li>Testing things out on some pages: <Link to='/test'>Test Page</Link> and <Link to='/test-two'>Test Page</Link></li>
              <li />
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h5>Work:</h5>
            <ul className='work-list'>
              <li><img src='./images/portfolio.svg' className='work-image' alt='Portfolio Logo' /></li>
              <li><img src='./images/hand-finger-right.svg' className='work-image work-pointer' alt='Hand Logo' /></li>
              <li><Link to='/theme-parks'><img src='./images/theme-park.svg' className='work-image' alt='Theme Park Logo' /></Link></li>
              <li><Link to='/theatre'>Test Page</Link><img src='./images/theatre-masks.svg' className='work-image' alt='Theatre Logo' /></Link></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
