import React from 'react'

const Questions = () => {
	return (
		<div className="col main-content">
			<div className="post">
				<div className="row">
					<div className="col">
						<a
							href="#"
							className="btn-menu d-md-none d-flex justify-content-between"
							id="btn-menu"
						>
							<span>Menu</span>
							<i className="icon-menu"></i>
						</a>
					</div>
				</div>
				<div className="row">
					<div className="col-auto photo">
						<a href="#">
							<img src="img/persona2.jpg" alt="" />
						</a>
					</div>
					<div className="col">
						<form action="">
							<textarea name="mensaje" id="" placeholder="Publicar Mensaje"></textarea>
							<div className="container-buttons d-flex justify-content-between">
								<div className="media">
									<a href="#">
										<i className="icon-file-image"></i>
									</a>
									<a href="#">
										<i className="icon-play"></i>
									</a>
									<a href="#">
										<i className="icon-music"></i>
									</a>
								</div>
								<div>
									<button>Publicar</button>
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
							<img src="img/persona5.jpg" alt="" />
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
									<i className="icon-thumbs-up"></i>
								</button>
								<p>
									15 <i className="icon-thumbs-up"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-2">
						<div className="comentarios">
							<div className="row no-gutters comentario">
								<div className="col-auto photo">
									<a href="#">
										<img src="img/persona2.jpg" alt="" />
									</a>
								</div>
								<div className="col">
									<form action="">
										<textarea name="" id="" placeholder="Comentario"></textarea>
									</form>
								</div>
							</div>

							<div className="row no-gutters comentario">
								<div className="col-auto photo">
									<a href="#">
										<img src="img/persona2.jpg" alt="" />
									</a>
								</div>
								<div className="col">
									<p className="respuesta">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam.
									</p>
									<a href="#" className="me-gusta">
										Me gusta
									</a>
								</div>
							</div>

							<div className="row no-gutters comentario">
								<div className="col-auto photo">
									<a href="#">
										<img src="img/persona5.jpg" alt="" />
									</a>
								</div>
								<div className="col">
									<p className="respuesta">Incididunt ut labore et dolore magna aliqua.</p>
									<a href="#" className="me-gusta">
										Me gusta
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="publication">
				<div className="row">
					<div className="col-auto photo">
						<a href="#">
							<img src="img/persona1.jpg" alt="" />
						</a>
					</div>
					<div className="col">
						<div className="post">
							<a href="#" className="name">
								Jose Lorem Ipsum
							</a>
							<div className="image">
								<img src="img/paisaje1.jpg" alt="" />
							</div>
							<div className="box-buttons d-flex justify-content-between align-items-center">
								<button>
									<i className="icon-thumbs-up"></i>
								</button>
								<p>
									15 <i className="icon-thumbs-up"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-2">
						<div className="comentarios">
							<div className="row no-gutters comentario">
								<div className="col-auto photo">
									<a href="#">
										<img src="img/persona2.jpg" alt="" />
									</a>
								</div>
								<div className="col">
									<form action="">
										<textarea name="" id="" placeholder="Comentario"></textarea>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="publication">
				<div className="row">
					<div className="col-auto photo">
						<a href="#">
							<img src="img/persona2.jpg" alt="" />
						</a>
					</div>
					<div className="col">
						<div className="post">
							<a href="#" className="name">
								Alejandro Lorem Ipsum
							</a>
							<div className="image">
								<img src="img/paisaje2.jpg" alt="" />
							</div>
							<div className="box-buttons d-flex justify-content-between align-items-center">
								<button>
									<i className="icon-thumbs-up"></i>
								</button>
								<p>
									15 <i className="icon-thumbs-up"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-10 offset-2">
						<div className="comentarios">
							<div className="row no-gutters comentario">
								<div className="col-auto photo">
									<a href="#">
										<img src="img/persona2.jpg" alt="" />
									</a>
								</div>
								<div className="col">
									<form action="">
										<textarea name="" id="" placeholder="Comentario"></textarea>
									</form>
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
