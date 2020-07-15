import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// NEED TO CREATE NETLIFY KEYS

require('dotenv').config({
  path: '.env'
})

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_APP_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_APP_DB,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_APP_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
}

export const generateUserDocument = async (user, additionalData) => {
  console.log('FIREBASE USER BEFORE', user)
  if (!user) return
  console.log('FIREBASE USER AFTER', user)
  const userRef = firestore.doc(`users/${user.uid}`)
  const snapshot = await userRef.get()
  console.log('FIREBASE SNAPSHOT', snapshot)
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user
    console.log('FIREBASE USER', user)
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData
      })
    } catch (error) {
      console.error('Error creating user document', error)
    }
  }
  return getUserDocument(user.uid)
}

const getUserDocument = async uid => {
  if (!uid) return null
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get()
    return {
      uid,
      ...userDocument.data()
    }
  } catch (error) {
    console.error('Error fetching user', error)
  }
}
