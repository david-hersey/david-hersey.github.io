import React from 'react'

import UserProvider from '../providers/UserProvider.jsx'

import SignInApplication from './SignInApplication'

function SignInApp () {
  return (
    <UserProvider>
      <SignInApplication />
    </UserProvider>
  )
}

export default SignInApp
