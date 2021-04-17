import React from 'react'

import stars from '../../assets/img/home/stars.png'
import moon from '../../assets/img/home/moon.png'
import mountains_behind from '../../assets/img/home/mountains_behind.png'
import mountains_front from '../../assets/img/home/mountains_front.png'

import firebase from 'firebase/app'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'

firebase.initializeApp({
	apiKey: 'AIzaSyAw-M1yiq8w243qMKXGrYg7trP1spBxBqM',
	authDomain: 'sofka-hub.firebaseapp.com',
	projectId: 'sofka-hub',
	storageBucket: 'sofka-hub.appspot.com',
	messagingSenderId: '1061555551731',
	appId: '1:1061555551731:web:9fe795b32e953ce5336686',
	measurementId: 'G-575ND06879',
})

const auth = firebase.auth()

const Welcome = () => {
	const history = useHistory()
	const [user] = useAuthState(auth)
	console.log(user)

	const signInWithGoogle = () => {
		const provider = new firebase.auth.GoogleAuthProvider()
		auth.signInWithPopup(provider)
	}
	if (user) history.push('/social')

	return (
		<section className="container-welcome">
			<img src={stars} id="stars" alt="stars" />
			<img src={moon} id="moon" alt="moon" />
			<img src={mountains_behind} id="mountains_behind" alt="mountains_behind" />
			<h2 id="text">Welcome to SofkaHub</h2>
			<p className="btn-start" id="btn" onClick={signInWithGoogle}>
				Start
			</p>
			<img src={mountains_front} id="mountains_front" alt="mountains_front" />
		</section>
	)
}

export default Welcome
