import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDCNeIWYSG6XTDOTDiiQn0V23mxJYUeHQQ',
  authDomain: 'githubj-obs.firebaseapp.com',
  databaseURL: 'https://githubj-obs.firebaseio.com',
  projectId: 'githubj-obs',
  storageBucket: 'githubj-obs.appspot.com',
  messagingSenderId: '571073052681',
  appId: '1:571073052681:web:19145d726d8177b984f8d8',
  measurementId: 'G-QJKQFHBMD4'
})

const db = firebaseApp.firestore()
const firebaseAuth = firebaseApp.auth()

// collection ref
const jobsCollection = db.collection('jobs')
const usersCollection = db.collection('users')
const savedJobsCollection = db.collection('savedJobsCollection')
const appliedJobsCollection = db.collection('appliedJobsCollection')

// export utils/refs
export {
  firebaseAuth,
  jobsCollection,
  usersCollection,
  savedJobsCollection,
  appliedJobsCollection
}
