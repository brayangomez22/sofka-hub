import React from 'react'

import logo from '../../assets/img/social/logo.png'
import person from '../../assets/img/social/persona2.jpg'

const Social = () => {
	return (
		<header>
			<div class="container">
				<div class="row">
					<div class="col-auto d-none d-md-block logo">
						<a href="#">
							<img src={logo} alt="logo" />
						</a>
					</div>
					<div class="col-12 col-sm-8 col-lg-6 order-2 order-sm-1 buscar mb-2 mb-sm-0">
						<form action="">
							<div class="row no-gutters">
								<div class="col-10">
									<input
										type="text"
										name=""
										id=""
										placeholder="Amigos, Lugares y cosas que te gustan"
									/>
								</div>
								<div class="col-2">
									<button>
										<i class="icon-search"></i>
									</button>
								</div>
							</div>
						</form>
					</div>

					<nav class="col-12 col-sm-3 col-lg-2 order-1 order-sm-2 menu d-flex justify-content-between ml-auto mb-2 mb-sm-0">
						<a href="#">
							<i class="icon-users"></i>
						</a>
						<a href="#">
							<i class="icon-bell-alt"></i>
						</a>
						<a href="#">
							<i class="icon-chat"></i>
						</a>
						<a href="#" class="imagen">
							<img src={person} width="22" height="22" alt="person" />
						</a>
					</nav>
				</div>
			</div>
		</header>
	)
}

export default Social
