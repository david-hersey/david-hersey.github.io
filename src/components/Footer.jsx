import React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-md-8'>
            <p>Everything is in progress and functionality and context always being considered.</p>
          </div>
          <div className='col-md-4'>
            <a href='https://www.linkedin.com/in/david-hersey-b948294a' data-action='Clicked' data-category='Social Links' data-label='Linkedin'><img src='./images/linkedin.svg' className='linkedinLogo' alt='Linkedin Logo' /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
