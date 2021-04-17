import React from 'react'

const Questions = () => {
    return (
        <div class="col contenido-principal">
					<div class="publicar">
						<div class="row">
							<div class="col">
								<a
									href="#"
									class="btn-menu d-md-none d-flex justify-content-between"
									id="btn-menu"
								>
									<span>Menu</span>
									<i class="icon-menu"></i>
								</a>
							</div>
						</div>
						<div class="row">
							<div class="col-auto foto">
								<a href="#">
									<img src="img/persona2.jpg" alt="" />
								</a>
							</div>
							<div class="col">
								<form action="">
									<textarea name="mensaje" id="" placeholder="Publicar Mensaje"></textarea>
									<div class="contenedor-botones d-flex justify-content-between">
										<div class="media">
											<a href="#"><i class="icon-file-image"></i></a>
											<a href="#"><i class="icon-play"></i></a>
											<a href="#"><i class="icon-music"></i></a>
										</div>
										<div>
											<button>Publicar</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class="publicacion">
						<div class="row">
							<div class="col-auto foto">
								<a href="#">
									<img src="img/persona5.jpg" alt="" />
								</a>
							</div>
							<div class="col">
								<div class="post">
									<a href="#" class="nombre">Andrea Lorem Ipsum</a>
									<p class="texto">
										Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
										tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
										veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
										commodo consequat.
									</p>
									<div class="caja-botones d-flex justify-content-between align-items-center">
										<button><i class="icon-thumbs-up"></i></button>
										<p>15 <i class="icon-thumbs-up"></i></p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-10 offset-2">
								<div class="comentarios">
									<div class="row no-gutters comentario">
										<div class="col-auto foto">
											<a href="#">
												<img src="img/persona2.jpg" alt="" />
											</a>
										</div>
										<div class="col">
											<form action="">
												<textarea name="" id="" placeholder="Comentario"></textarea>
											</form>
										</div>
									</div>

									<div class="row no-gutters comentario">
										<div class="col-auto foto">
											<a href="#">
												<img src="img/persona2.jpg" alt="" />
											</a>
										</div>
										<div class="col">
											<p class="respuesta">
												Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
												eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
												minim veniam.
											</p>
											<a href="#" class="me-gusta">Me gusta</a>
										</div>
									</div>

									<div class="row no-gutters comentario">
										<div class="col-auto foto">
											<a href="#">
												<img src="img/persona5.jpg" alt="" />
											</a>
										</div>
										<div class="col">
											<p class="respuesta">Incididunt ut labore et dolore magna aliqua.</p>
											<a href="#" class="me-gusta">Me gusta</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="publicacion">
						<div class="row">
							<div class="col-auto foto">
								<a href="#">
									<img src="img/persona1.jpg" alt="" />
								</a>
							</div>
							<div class="col">
								<div class="post">
									<a href="#" class="nombre">Jose Lorem Ipsum</a>
									<div class="imagen">
										<img src="img/paisaje1.jpg" alt="" />
									</div>
									<div class="caja-botones d-flex justify-content-between align-items-center">
										<button><i class="icon-thumbs-up"></i></button>
										<p>15 <i class="icon-thumbs-up"></i></p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-10 offset-2">
								<div class="comentarios">
									<div class="row no-gutters comentario">
										<div class="col-auto foto">
											<a href="#">
												<img src="img/persona2.jpg" alt="" />
											</a>
										</div>
										<div class="col">
											<form action="">
												<textarea name="" id="" placeholder="Comentario"></textarea>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="publicacion">
						<div class="row">
							<div class="col-auto foto">
								<a href="#">
									<img src="img/persona2.jpg" alt="" />
								</a>
							</div>
							<div class="col">
								<div class="post">
									<a href="#" class="nombre">Alejandro Lorem Ipsum</a>
									<div class="imagen">
										<img src="img/paisaje2.jpg" alt="" />
									</div>
									<div class="caja-botones d-flex justify-content-between align-items-center">
										<button><i class="icon-thumbs-up"></i></button>
										<p>15 <i class="icon-thumbs-up"></i></p>
									</div>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-10 offset-2">
								<div class="comentarios">
									<div class="row no-gutters comentario">
										<div class="col-auto foto">
											<a href="#">
												<img src="img/persona2.jpg" alt="" />
											</a>
										</div>
										<div class="col">
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