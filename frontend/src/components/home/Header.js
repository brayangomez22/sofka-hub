import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/img/home/logo.png'

const Header = () => {
	return (
		<header className="headerHome">
			<Link className="logoHome" to="/">
				<img src={logo} alt="logo" />
			</Link>
			<ul>
				<li>
					<a href="/" className="activeHeader">
						Home
					</a>
				</li>
				<li>
					<a href="/">Abaut</a>
				</li>
				<li>
					<a href="/">Abaut</a>
				</li>
				<li>
					<a href="/">Abaut</a>
				</li>
				<li>
					<a href="/">Abaut</a>
				</li>
			</ul>
		</header>
	)
}

export default Header
