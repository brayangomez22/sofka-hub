import React from 'react'

import stars from '../../assets/img/home/stars.png'
import moon from '../../assets/img/home/moon.png'
import mountains_behind from '../../assets/img/home/mountains_behind.png'
import mountains_front from '../../assets/img/home/mountains_front.png'

import signInWithGoogle, { auth } from '../../functions/signIn'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'

const Welcome = () => {
	const history = useHistory()
	const [user] = useAuthState(auth)

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
