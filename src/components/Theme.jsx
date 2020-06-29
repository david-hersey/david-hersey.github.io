import React from 'react'
import Typing from 'react-typing-animation';

class Theme extends React.Component {
  render () {

    return (
      <div className='container mt-5'>
        <h1>Theme Parks</h1>
        <p>I have worked on most of the UK major theme park brands.</p>
        <p>Working with partners and the business to provide the end to end holiday/breaks solutions for the largest theme parks and attractions. This includes many of the Merlin Entertainments brands and solutions consist of landing pages with a custom ecommerce booking flow platforms.</p>
        <p>90% of the landing pages are built on a PHP codebase populated by a PHP CMS with the other 10% being migrated to a JS/Node/React based codebase building static S3 served pages populated by cloud based CMS.</p>
        <p>The booking flow solution sits on a JS/Node/React serving S3 pages and incorporates numerous inhouse built microservices and 3rd party integrations</p>
        <h3>Brands worked on:
          <Typing speed={100}>
            <span>Alton Towers</span>
            <Typing.Backspace count={20} />
            <Typing.Delay ms={2000} />
            <span>Chessington World of Adventures</span>
            <Typing.Backspace count={31} />
            <Typing.Delay ms={2000} />
            <span>Legoland</span>
          </Typing>
        </h3>
      </div>
    )
  }
}

export default Theme
