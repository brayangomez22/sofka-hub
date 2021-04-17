import React from 'react'

import ad1 from '../../assets/img/social/ad1.jpeg'
import ad2 from '../../assets/img/social/ad2.jpeg'
import ad3 from '../../assets/img/social/ad3.jpeg'

const Advertising = () => {
	return (
		<div class="col-3 right-sidebar d-none d-lg-block">
			<h3>Publicidad</h3>
			<div class="ads">
				<a href="#">
					<img src={ad1} width="300" alt="ad1" />
				</a>
				<a href="#">
					<img src={ad2} width="300" alt="ad2" />
				</a>
				<a href="#">
					<img src={ad3} width="300" alt="ad3" />
				</a>
			</div>

			<footer className="footerSocial">
				<a href="#">Privacidad</a>
				<a href="#">Condiciones</a>
				<a href="#">Publicidad</a>
				<p class="copyright">Red Social © 2021</p>
			</footer>
		</div>
	)
}

export default Advertising
