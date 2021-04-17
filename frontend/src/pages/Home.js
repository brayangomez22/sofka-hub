import React from 'react'
import '../assets/sass/home/Home.scss'
import Header from '../components/home/Header'
import Welcome from '../components/home/Welcome'
import About from '../components/home/About'
import Footer from '../components/home/Footer'

const Home = () => {
	return (
		<div>
			<Header />
			<Welcome />
			<About />
			<Footer />
		</div>
	)
}

export default Home
