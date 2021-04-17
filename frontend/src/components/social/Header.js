import React from 'react'

import logo from '../../assets/img/social/logo.svg'
import person from '../../assets/img/social/persona2.jpg'
import { Link } from 'react-router-dom';
import { auth } from '../../functions/signIn'

import { useHistory } from 'react-router-dom'


const Social = () => {
	const history = useHistory()

	const signOut = ()=>{
		auth.signOut();
	}
	
	if (!auth.currentUser) history.push('/')

	return (
		<header className="header-social">
			<div className="container">
				<div className="row">
					<div className="col-auto d-none d-md-block logo">
						<a href="#">
							<img className="logo-social" width="22" height="22" src={logo} alt="logo" />
						</a>
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
						<Link to="/perfil" className="image">
							<img src={person} alt="person" />
						</Link>
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
