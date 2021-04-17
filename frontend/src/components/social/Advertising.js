import React from 'react'

import Ad1 from '../../assets/img/social/ad1.jpg'
import Ad2 from '../../assets/img/social/ad2.jpg'
import Ad3 from '../../assets/img/social/ad3.jpg'

const Advertising = () => {
	return (
		<div className="col-3 right-sidebar d-none d-lg-block">
			<h3>Publicidad</h3>
			<div className="ads">
				<a href="#">
					<img src={Ad1} width="300" alt="ad1" />
				</a>
				<a href="#">
					<img src={Ad2} width="300" alt="ad2" />
				</a>
				<a href="#">
					<img src={Ad3} width="300" alt="ad3" />
				</a>
			</div>

			<footer className="footerSocial">
				<a href="#">Privacidad</a>
				<a href="#">Condiciones</a>
				<a href="#">Publicidad</a>
				<p className="copyright">Red Social © 2021</p>
			</footer>
		</div>
	)
}

export default Advertising
