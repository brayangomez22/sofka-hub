import React from 'react'
import '../assets/sass/home/Home.scss'
import Header from '../components/home/Header'
import Welcome from '../components/home/Welcome'
import About from '../components/home/About'
import Creators from '../components/home/Creators'
import Footer from '../components/home/Footer'

const Home = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<About />
			<Creators />
			<Footer />
		</div>
	)
}

export default Home
