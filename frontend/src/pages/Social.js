import React from 'react'
import '../assets/sass/social/Social.scss'
import Header from '../components/social/Header'
import Questions from '../components/social/Questions'
import Advertising from '../components/social/Advertising'

const Home = () => {
	return (
		<div className="social">
			<Header />
			<main className="container">
				<div className="row">
					<Questions />
					<Advertising />
				</div>
			</main>
		</div>
	)
}

export default Home
