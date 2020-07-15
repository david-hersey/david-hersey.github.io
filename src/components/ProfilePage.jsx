import React, { useContext } from 'react'
import { UserContext } from '../providers/UserProvider.jsx'
import { auth } from '../firebase.js'

// Look at:
// https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/
// To use Firebase storage for picture uploading etc

const ProfilePage = () => {
  console.log('IN PROFILE AUTH:', auth)

  const user = useContext(UserContext)

  console.log('USER', user)

  const { photoURL, displayName, email } = user

  return (
    <>
      <div className='col-md-4'>
        <div
          style={{
            background: `url(${photoURL || 'https://via.placeholder.com/300?text=Profile+Pic'})  no-repeat center center`,
            backgroundSize: 'cover',
            height: '200px',
            width: '200px'
          }}
          className='border'
        />
        <h2>{displayName}</h2>
        <h3>{email}</h3>
        <button className='btn btn-primary' onClick={() => { auth.signOut() }}>Sign out</button>
      </div>
      <div className='col-md-8'>
        <p>What should we cater for in this space????</p>
        <p>Change/upload image (Look at Firebase storage???)? Display some personalised info just for you?</p>
      </div>
    </>
  )
}

export default ProfilePage
