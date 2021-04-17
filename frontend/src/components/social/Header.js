import React from 'react'

import logo from '../../assets/img/social/logo.svg'
import { auth } from '../../functions/signIn'
import {Link} from 'react-router-dom';

import { useHistory } from 'react-router-dom'

const Social = () => {
	const history = useHistory()

	const {  displayName, photoURL, email } = auth.currentUser || {uid:"", displayName:"", photoURL:"", email:""}

	const signOut = () => {
		auth.signOut()
	}

	if (!auth.currentUser) history.push('/')

	return (
		<header className="header-social">
			<div className="container">
				<div className="row">
					<div className="col-auto d-none d-md-block logo">
						<Link to="/">
							<img className="logo-social" width="22" height="22" src={logo} alt="logo" />
						</Link>
					</div>
					<div className="col-12 col-sm-8 col-lg-6 order-2 order-sm-1 search mb-2 mb-sm-0">
						<form action="">
							<div className="row no-gutters">
								<div className="col-10">
									<input
										type="text"
										name=""
										id=""
										placeholder="Amigos, Lugares y cosas que te gustan"
									/>
								</div>
								<div className="col-2">
									<button>
										<i className="fas fa-search"></i>
									</button>
								</div>
							</div>
						</form>
					</div>

					<nav className="col-12 col-sm-3 col-lg-2 order-1 order-sm-2 menu d-flex justify-content-between ml-auto mb-2 mb-sm-0">
						<a href="#">
							<i className="fas fa-users"></i>
						</a>
						<a href="#">
							<i className="fas fa-bell"></i>
						</a>
						<a href="#">
							<i className="fas fa-comments"></i>
						</a>

						<div className="dropdown">
							<button
								className="image  dropdown-toggle"
								type="button"
								id="dropdownMenuButton2"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<img src={photoURL} alt="person" />
							</button>
							<ul
								className="dropdown-menu dropdown-menu-dark"
								aria-labelledby="dropdownMenuButton2"
								style={{ background: '#111' }}
							>
								<li>
									<span className="dropdown-item" href="#">
										{displayName}
									</span>
								</li>
								<li>
									<span className="dropdown-item" href="#">
										{email}
									</span>
								</li>
							</ul>
						</div>

						<a href="#" onClick={signOut}>
							<i className="fas fa-sign-out-alt"></i>
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Social
