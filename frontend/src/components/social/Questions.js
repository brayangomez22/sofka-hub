import React from 'react'
import Persona2 from '../../assets/img/social/persona2.jpg'
import Persona5 from '../../assets/img/social/persona5.jpg'
import { auth } from '../../functions/signIn';

const Questions = () => {
	const { photoURL } = auth.currentUser || { photoURL: "" };
	return (
		<div className="col main-content">
			<div className="post">
				<div className="row">
					<div className="col-auto photo">
						<p href="#">
							<img src={photoURL} alt="" />
						</p>
					</div>
					<div className="col">
						<form action="">
							<textarea name="mensaje" id="" placeholder="What do you want to know?"></textarea>
							<div className="container-buttons d-flex justify-content-between">
								<div className="media">
									<p>
										<i className="fas fa-images"></i>
									</p>
									<p >
										<i className="fas fa-play"></i>
									</p>
									<p>
										<i className="fas fa-music"></i>
									</p>
								</div>
								<div>
									<button>Publish</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className="publication">
				<div className="row">
					<div className="col-auto photo">
						<a href="#">
							<img src={Persona5} alt="" />
						</a>
					</div>
					<div className="col">
						<div className="post">
							<a href="#" className="name">
								Andrea Lorem Ipsum
							</a>
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
								nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</p>
							<div className="box-buttons d-flex justify-content-between align-items-center">
								<button>
									<i className="fas fa-thumbs-up"></i>
								</button>
								<p>
									15 <i className="fas fa-thumbs-up"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-2">
						<div className="comments">
							<div className="row no-gutters comment">
								<div className="col-auto photo">
									<a href="#">
										<img src={Persona2} alt="" />
									</a>
								</div>
								<div className="col">
									<form action="">
										<textarea name="" id="" placeholder="comment"></textarea>
									</form>
								</div>
							</div>

							<div className="row no-gutters comment">
								<div className="col-auto photo">
									<a href="#">
										<img src={Persona2} alt="" />
									</a>
								</div>
								<div className="col">
									<p className="answer">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam.
									</p>
									<a href="#" className="like-it">
										Me gusta
									</a>
								</div>
							</div>

							<div className="row no-gutters comment">
								<div className="col-auto photo">
									<a href="#">
										<img src={Persona5} alt="" />
									</a>
								</div>
								<div className="col">
									<p className="answer">Incididunt ut labore et dolore magna aliqua.</p>
									<a href="#" className="like-it">
										Me gusta
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Questions
