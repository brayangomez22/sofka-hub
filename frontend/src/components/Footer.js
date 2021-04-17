import React from 'react'
import PropTypes from 'prop-types'

const Footer = () => {
	return (
		<footer>
			<div className="footer-content">
				<h3>SofkaU</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis magnam voluptatum
					est quod non quibusdam laboriosam natus eius iste accusamus?
				</p>
				<ul className="socials">
					<li>
						<a href="">
							<i className="fab fa-facebook-square"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="fa fa-linkedin"></i>
						</a>
					</li>
					<li>
						<a href="">
							<i className="fa fa-twitter"></i>
						</a>
					</li>
				</ul>
			</div>
			<div className="footer-bottom">
				<p>
					copyright &copy; 2021 SofkaU. Designed by <span>Brayan and Jacobo</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
