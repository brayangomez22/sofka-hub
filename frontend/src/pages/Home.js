import React from 'react'
import '../assets/sass/home/Home.scss'
import Header from '../components/home/Header'
import Welcome from '../components/home/Welcome'
import About from '../components/home/About'
import Creators from '../components/home/Creators'
import Footer from '../components/home/Footer'
import Benefits from '../components/home/Benefits'

const Home = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<About />
			<Benefits />
			<Creators />
			<Footer />
		</div>
	)
}

export default Home
