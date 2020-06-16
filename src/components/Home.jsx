import React from 'react'
import { Link } from 'react-router-dom'

import HoverCard from './HoverCard.jsx'
import ShakeCard from './ShakeCard.jsx'

class Home extends React.Component {
  render () {
    return (
        <div className='container mt-5'>
          <div className='col-xs-12 text-center'>
            <h1>David Hersey</h1>
            <h5>Front End Web Developer</h5>
            <p>I love to code beautifully simple, complex things and love what I do.</p>
            <p className='text-left'>Since beginning my journey as a Front End Web Developer nearly 14 years ago, I have worked on huge range of digital products for both business and consumer use. This has been mainly in the travel industry but the skills I have attained can work across/within any industry. I'm quiet, happy, naturally curious, love to improve one problem at a time.</p>
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
                <li>Working closely with designers to take wireframes/designs and turn into successful largescale web apps</li>
                <li>Alongside the larger scale projects working on house keeping and catching issues that may slip through QA and hit production</li>
                <li>Creation of a trigae system/service</li>
                <li>Using data to constantly work on and improve UX/UI and coversion rates</li>
                <li>Asssited in simplifying a monolithic predominately PHP codebase to help create single mainly NodeJS codebase structured solution</li>
                <li>Asssited in splitting this further into multiple microservices</li>
                <li>Using Shift Left testing</li>
                <li>Running Standups, agile 'planit poker' planning sessions and all inbetween</li>
                <li>Collaborating to understand pain points and drive improvement in business processes</li>
                <li>Mentoring new starters</li>
                <li>Assisting teams within the business to use/get the best out of the systems</li>
              </ul>
            </div>
            <div className='col-md-4 text-center'>
              <h5>Lastest Tech</h5>
              <ul className='text-left'>
                <li>Professionally I am currently moving landing pages from an inhouse PHP driven CMS feeding sites on a PHP codebase, across to a cloud based headless CMS feeding S3 hosted static site files on a Node/React codebase.</li>
                <li>Personally I am currently developing a site for a designer using Gatsby, Prismic built and hosted with Netlify</li>
              </ul>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <h5 className='text-center'>Work</h5>
              <ShakeCard />
            </div>
          </div>
        </div>
    )
  }
}

export default Home


