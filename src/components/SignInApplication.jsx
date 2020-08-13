import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider.jsx'

import SignIn from './SignIn.jsx'
import ProfilePage from './ProfilePage.jsx'

// All sign in/up etc work based on/from:
// https://github.com/GoZaddy/Firebase-auth-article

function SignInApplication () {
  const user = useContext(UserContext)

  return (
    user ? <ProfilePage /> : <SignIn />
  )
}

export default SignInApplication
