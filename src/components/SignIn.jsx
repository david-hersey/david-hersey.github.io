import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithGoogle, auth } from '../firebase.js'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const signInWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault()
    auth.signInWithEmailAndPassword(email, password).catch(error => {
      setError('Error signing in with password and email!')
      console.error('Error signing in with password and email', error)
    })
  }

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget

    if (name === 'userEmail') {
      setEmail(value)
    } else if (name === 'userPassword') {
      setPassword(value)
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Please Sign In</h1>
      <div className='col-md-6'>
        {error !== null && <div className=''>{error}</div>}
        <form className='form'>
          <div class='field form-group'>
            <label htmlFor='userEmail' className='label'>Email:</label>
            <input
              type='email'
              className='input form-control'
              name='userEmail'
              value={email}
              placeholder='e.g. test@gmail.com'
              id='userEmail'
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div class='field form-group'>
            <label htmlFor='userPassword' className='label'>Password:</label>
            <input
              type='password'
              className='input form-control'
              name='userPassword'
              value={password}
              placeholder='Your Password'
              id='userPassword'
              onChange={(event) => onChangeHandler(event)}
            />
          </div>
          <div class='field form-group'>
            <button className='btn btn-primary' onClick={(event) => { signInWithEmailAndPasswordHandler(event, email, password) }}>Sign in</button>
          </div>
        </form>
        <p className='text-center'>or</p>
        <button className='btn btn-primary' onClick={() => { signInWithGoogle() }}>Sign in with Google</button>
        <p className=''>
          Don't have an account?{' '}
          <Link to='signUp' className=''>Please sign up here</Link>{' '}
          <br />{' '}
          <Link to='passwordReset' className=''>Forgot Password?</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
