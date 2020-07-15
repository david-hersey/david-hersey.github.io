import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { auth, generateUserDocument, signInWithGoogle } from '../firebase.js'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [photoURL, setPhotoURL] = useState('')
  const [error, setError] = useState(null)

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault()
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      generateUserDocument(user, { displayName, photoURL })
    } catch (error) {
      setError('Error Signing up with email and password')
    }

    setEmail('')
    setPassword('')
    setDisplayName('')
    setPhotoURL('')
  }

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget

    if (name === 'userEmail') {
      setEmail(value)
    } else if (name === 'userPassword') {
      setPassword(value)
    } else if (name === 'displayName') {
      setDisplayName(value)
    } else if (name === 'userPhoto') {
      setPhotoURL(value)
    }
  }

  return (
    <div className='container mt-5'>
      <h1 className='text-center'>Sign Up</h1>
      <div className='border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8'>
        {error !== null && (
          <div className='py-4 bg-red-600 w-full text-white text-center mb-3'>
            {error}
          </div>
        )}
        <form className='form'>
          <div class='field form-group'>
            <label htmlFor='displayName' className='label'>
              Display Name:
            </label>
            <input
              type='text'
              className='input form-control'
              name='displayName'
              value={displayName}
              placeholder='e.g. David'
              id='displayName'
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div class='field form-group'>
            <label htmlFor='userEmail' className='label'>
              Email:
            </label>
            <input
              type='email'
              className='input form-control'
              name='userEmail'
              value={email}
              placeholder='e.g. test@test.com'
              id='userEmail'
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div class='field form-group'>
            <label htmlFor='userPassword' className='label'>
              Password:
            </label>
            <input
              type='password'
              className='input form-control'
              name='userPassword'
              value={password}
              placeholder='Your Password'
              id='userPassword'
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <div class='field form-group'>
            <label htmlFor='userPhoto' className='label'>
              Profile Picture URL:
            </label>
            <input
              type='text'
              className='input form-control'
              name='userPhoto'
              value={photoURL}
              placeholder='e.g. https://.....'
              id='userPhoto'
              onChange={event => onChangeHandler(event)}
            />
          </div>
          <button
            className='btn btn-primary'
            onClick={event => {
              createUserWithEmailAndPasswordHandler(event, email, password, photoURL)
            }}
          >
            Sign up
          </button>
        </form>
        <p className='text-center'>or</p>
        <button
          onClick={() => {
            try {
              signInWithGoogle()
            } catch (error) {
              console.error('Error signing in with Google', error)
            }
          }}
          className='btn btn-primary'
        >
          Sign In with Google
        </button>
        <p className='text-center'>
          Already have an account?{' '}
          <Link to='/test-three' className=''>
            Sign in here
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}

export default SignUp
