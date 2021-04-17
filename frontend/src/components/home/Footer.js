import React from 'react'

const Footer = () => {
	return (
		<footer className="footerHome">
			<div className="footer-content">
				<h3>SofkaHub</h3>
				<p>One for all, all for one</p>
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
					copyright &copy; 2021 SofkaHub. Designed by <span>Brayan and Jacobo</span>
				</p>
			</div>
		</footer>
	)
}

export default Footer
