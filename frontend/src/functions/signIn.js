import firebase from './firebaseInit'
import 'firebase/auth'

export const auth = firebase.auth()

export default function signInWithGoogle () {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
}
