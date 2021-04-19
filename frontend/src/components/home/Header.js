import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/social/logo.svg'

const Header = () => {
	return (
		<header className="headerHome">
			<Link className="logoHome" to="/">
				<img src={logo} alt="logo" /> <span>SofkaHub</span>
			</Link>
			<ul>
				<li>
					<a href="/" className="activeHeader">
						Home
					</a>
				</li>
				<li>
					<a href="#about">Abaut</a>
				</li>
				<li>
					<a href="#creators">Creators</a>
				</li>
				<li>
					<a href="#benefits">Benefits</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
