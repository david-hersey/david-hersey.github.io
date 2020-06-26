import React from 'react'

class Work extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <h1>Projects</h1>
        <h4>Reduce email address calls to CC</h4>
        <p>Many customers initially entered an incorrect email address:</p>
        <p>Whilst we had a customer facing booking management system that allowed customers to log in and change this becuase an incorrect email had been stored, they couldn't log in.</p>
        <p>This resulted in increases in calls to the CC from customers not receiving emails and unable to log in to their booking details</p>
        <p>With this in mind looking at improving the UX/UI to assist the customer and not get in the way of the booking flow, I looked at reducing these calls</p>
        <p>Adapting a Node Module for our specific use I built an email suggestion prompt within out payment form</p>
        <p>The work was a standard 3 day Jira/Kanban ticket and reduced calls of this type by 60%</p>
        <p>Correctly recording customer telephone number:</p>
        <p>Incorrect codes recorded etc......</p>
        <h4>Catch/reduce production bugs:</h4>
        <p>Working for a very large client it was imperitive that as far as possible bugs that may have accidently slipped passed QA were caught and rectified as quickly as possible.</p>
        <p>With this in mind I started looking thorugh data to try and identify common issues reported by customers and internal customers (CC).</p>
        <p>With the data to hand I began breaking any areas identified into tasks and creating and assigning relevant teams Jiras.</p>
        <p>Alongside the data analysis I set up and ran a triage service available to the whole business.</p>
        <p>Using Slack I ran a Triage channel with alerts when potential issues were spotted.....</p>
        <h4>Move sites to SSG solution:</h4>
        <p>Legacy systems were on a PHP codebase and after working with another developer to identify a new cloudbased CMS I had the task of rolling one of our brands onto a React platform.</p>
        <h4>Move single brand booking flow codebases into single codebase:</h4>
        <p>I worked alongside others to take the 5+ booking flow codebases we had to maintain and created a single 'master' codebase.</p>
        <p>This allowed us to create a single structure solution that we could brand accordingly. This branding switched dependant on customer referrer.</p>
        <h4>Move single structure codebase from PHP to React/Node solution:</h4>
        <p>After looking at various options we ran with React and migrated our single codebase PHP booking flow to a ReactNode codebase.</p>
        <p>This was then further extracted out into multiple microservices.</p>
      </div>
    )
  }
}

export default Work
