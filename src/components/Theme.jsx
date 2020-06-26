import React from 'react'

// import Hero from './Hero.jsx'

class Theme extends React.Component {
  render () {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate
      this.el = el
      this.loopNum = 0
      this.period = parseInt(period, 10) || 2000
      this.txt = ''
      this.tick()
      this.isDeleting = false
    }

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length
      var fullTxt = this.toRotate[i]

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1)
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1)
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>'

      var that = this
      var delta = 300 - Math.random() * 100

      if (this.isDeleting) { delta /= 2 }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period
        this.isDeleting = true
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false
        this.loopNum++
        delta = 500
      }

      setTimeout(function () {
        that.tick()
      }, delta)
    }

    window.onload = function () {
      var elements = document.getElementsByClassName('txt-rotate')
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate')
        var period = elements[i].getAttribute('data-period')
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period)
        }
      }
      // INJECT CSS
      var css = document.createElement('style')
      css.type = 'text/css'
      css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }'
      document.body.appendChild(css)
    }

    return (
      <div className='container mt-5'>
        <h1>Theme Parks</h1>
        <p>I have worked on most of the UK major theme park brands.</p>
        <p>Working with partners and the business to provide the end to end holiday/breaks solutions for the largest theme parks and attractions. This includes many of the Merlin Entertainments brands and solutions consist of landing pages with a custom ecommerce booking flow platforms.</p>
        <p>90% of the landing pages are built on a PHP codebase populated by a PHP CMS with the other 10% being migrated to a JS/Node/React based codebase building static S3 served pages populated by cloud based CMS.</p>
        <p>The booking flow solution sits on a JS/Node/React serving S3 pages and incorporates numerous inhouse built microservices and 3rd party integrations</p>
        <h3>Brands worked on:
          <span
            class='txt-rotate'
            data-period='2000'
            data-rotate='[ " Alton Towers", " Chessington World of Adventures", " Legoland", " Thorpe Park", " Paultons Park", " Warwick Castle" ]'
          />
        </h3>
        {/*
        <div className='row flex-wrap'>
          <Hero images={['./images/screenshots/legoland/legoland_availability_1.png', './images/screenshots/thorpe/thorpe_availability.png', './images/screenshots/chessington/chessington_availability.png', './images/screenshots/paultons.png']} />
        </div>
        */}
      </div>
    )
  }
}

export default Theme
