import React from 'react'

import brayan from '../../assets/img/home/brayan.jpeg'
import jacobo from '../../assets/img/home/jacobo.jpeg'

const Creators = () => {
	return (
		<section className="container-creators" id="creators">
			<h2>SofkaHub Creators</h2>
			<div className="container-creators-card">
				<div class="profile-card">
					<div class="top-section">
						<i class="message fas fa-envelope"></i>
						<i class="notif fas fa-bell"></i>
						<div class="pic">
							<img src={brayan} alt="brayan" />
						</div>
						<div class="name">Brayan</div>
						<div class="tag">@brayang65009138</div>
					</div>

					<div class="bottom-section">
						<div class="social-media">
							<a href="https://www.facebook.com/brayanalexander.gomezmanco.7" target="blank">
								<i class="fab fa-facebook"></i>
							</a>
							<a href="https://twitter.com/brayang65009138" target="blank">
								<i class="fab fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/brayanalexandergomezmanco/" target="blank">
								<i class="fab fa-instagram"></i>
							</a>
						</div>

						<div class="subscribers">
							204K <span>Subscribers</span>
						</div>
						<div class="border"></div>
						<div class="views">
							7.3M <span>Views</span>
						</div>
					</div>
				</div>

				<div class="profile-card">
					<div class="top-section">
						<i class="message fas fa-envelope"></i>
						<i class="notif fas fa-bell"></i>
						<div class="pic">
							<img src={jacobo} alt="brayan" />
						</div>
						<div class="name">Jacobo</div>
						<div class="tag">@jacoboduro11</div>
					</div>

					<div class="bottom-section">
						<div class="social-media">
							<a href="https://www.facebook.com/jacobo.garcesoquendo" target="blank">
								<i class="fab fa-facebook"></i>
							</a>
							<a href="https://twitter.com/jacoboduro11" target="blank">
								<i class="fab fa-twitter"></i>
							</a>
							<a href="https://www.instagram.com/jacob_7g" target="blank">
								<i class="fab fa-instagram"></i>
							</a>
						</div>

						<div class="subscribers">
							204K <span>Subscribers</span>
						</div>
						<div class="border"></div>
						<div class="views">
							7.3M <span>Views</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Creators
