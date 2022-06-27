import { initializeApp, getApps, getApp } from 'firebase/app'
import getFirestore from 'firebase/firestore'
import getStorage from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyCgtLek8kBS2dGCKKcBUajegWz8p3msUgk',
  authDomain: 'insta-2-a6905.firebaseapp.com',
  projectId: 'insta-2-a6905',
  storageBucket: 'insta-2-a6905.appspot.com',
  messagingSenderId: '807960189548',
  appId: '1:807960189548:web:4e0ae584655217ac8c9649',
  measurementId: 'G-K3EJX5PV43',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
