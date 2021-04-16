import React from 'react'
import '../assets/sass/Home.scss'
import Header from '../components/Header'
import Welcome from '../components/Welcome'
import About from '../components/About'

const Home = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<About />
		</div>
	)
}

export default Home
