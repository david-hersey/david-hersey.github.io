import React from 'react'

import emailjs from 'emailjs-com'

require('dotenv').config({
  path: '.env'
})

// Emailjs
// https://www.npmjs.com/package/emailjs-com

class Confirmation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: window.sessionStorage.getItem('data'),
      customer: {
        firstName: window.sessionStorage.getItem('firstName'),
        lastName: window.sessionStorage.getItem('lastName'),
        fullName: window.sessionStorage.getItem('firstName') + window.sessionStorage.getItem('lastName'),
        email: window.sessionStorage.getItem('email')
      }
    }
  }

  componentDidMount () {
    // SHOULD WE TEST FOR SESSION STORAGE AND IF NOT PRESENT USE URL PARAMS?????

    const templateParams = {
      name: this.state.customer.firstName + this.state.customer.lastName,
      message: 'All confirmed!!!',
      email: this.state.customer.email
    }

    emailjs.send(process.env.REACT_APP_EMAIL_CONFIRMATION_SERVICE, process.env.REACT_APP_EMAIL_CONFIRMATION_EMAIL, templateParams, process.env.REACT_APP_EMAIL_USER_ID)
      .then((response) => {
        console.log('SUCCESS!!', response.status, response.text)
      }, (err) => {
        console.log('FAILED.....', err)
      })
  }

  render () {
    const parsedData = JSON.parse(this.state.data)

    const products = parsedData.products.map((product, index) => {
      return (
        <span key={index}>{product.name} </span>
      )
    })

    return (
      <div className='container mt-5'>
        <h1>Confirmation</h1>
        <h4>Thank you {this.state.customer.firstName} {this.state.customer.lastName}</h4>
        <p>Your order of {products} for &pound;{parsedData.total.totalPrice} is taken, we have sent a confirmation email to: {this.state.customer.email}</p>
      </div>
    )
  }
}

export default Confirmation
