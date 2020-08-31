import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// firebase init
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

// Auth
const GoogleAuth = new firebase.auth.GoogleAuthProvider()
const GitHubAuth = new firebase.auth.GithubAuthProvider()
const TwitterAuth = new firebase.auth.TwitterAuthProvider()

// export utils/refs
export {
  GitHubAuth,
  GoogleAuth,
  TwitterAuth,
  firebaseAuth,
  jobsCollection,
  usersCollection,
  savedJobsCollection,
  appliedJobsCollection
}
