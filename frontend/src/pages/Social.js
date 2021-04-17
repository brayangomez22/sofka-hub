import React from 'react'
import '../assets/sass/social/Social.scss'
import Header from '../components/social/Header'
import Questions from '../components/social/Questions'

const Home = () => {
	return (
		<div className="social">
			<Header />
			<main className="container">
				<div className="row">
					<Questions/>
				</div>
			</main>
		</div>
	)
}

export default Home
