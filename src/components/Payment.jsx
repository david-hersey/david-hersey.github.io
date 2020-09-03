import React from 'react'
import MailCheck from 'react-mailcheck'

// Look at: https://www.npmjs.com/package/react-credit-cards

class PaymentForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      inputText: '',
      data: window.sessionStorage.getItem('data')
    }
  }

  handlePayment (data) {
    window.sessionStorage.setItem('email', data)
  }

  render () {
    const parsedData = JSON.parse(this.state.data)

    return (
      <div className='container mt-5'>
        <div className='col-md-6'>
          <form className='form' action='/confirmation' name='payment' method='get'>
            <input name='totalPrice' value={parsedData.total.totalPrice} type='hidden' />
            <input name='products' value={parsedData.products} type='hidden' />
            <div className='field form-group'>
              <div className='control'>
                <label className='label' htmlFor='firstName'>First Name</label>
                <input id='firstName' className='input form-control' name='firstName' component='input' type='text' placeholder='First Name' required onBlur={(e) => { window.sessionStorage.setItem('firstName', e.target.value) }} />
              </div>
            </div>
            <div className='field form-group'>
              <div className='control'>
                <label className='label' htmlFor='lastName'>Last Name</label>
                <input id='lastName' className='input form-control' name='lastName' component='input' type='text' placeholder='Last Name' onBlur={(e) => { window.sessionStorage.setItem('lastName', e.target.value) }} />
              </div>
            </div>
            <div className='field form-group'>
              <div className='control'>
                <label className='label' htmlFor='email'>Email</label>
                <MailCheck email={this.state.inputText}>
                  {suggestion => (
                    <div>
                      <input
                        id='email'
                        className='input form-control'
                        name='email'
                        component='input'
                        type='email'
                        placeholder='Email Address'
                        value={this.state.inputText}
                        onChange={(e) => { this.setState({ inputText: e.target.value }) }}
                        required
                      />
                      {suggestion &&
                        <div className='email-suggestion'>
                        Did you mean
                          <button
                            onClick={(e) => { this.setState({ inputText: suggestion.full }) }}
                          > {suggestion.full}
                          </button> ?
                        </div>}
                    </div>
                  )}
                </MailCheck>
              </div>
            </div>
            <div className='field'>
            TOTAL: &pound; {parsedData.total.totalPrice}
            </div>
            <div className='field'>
              <div className='control'>
                <button className='button is-link btn btn-primary' onClick={this.handlePayment(this.state.inputText)}>Make Payment</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default PaymentForm
