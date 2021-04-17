import React, { useEffect, useRef, useState } from 'react'
import Persona2 from '../../assets/img/social/persona2.jpg'
import Persona5 from '../../assets/img/social/persona5.jpg'
import { auth, db } from '../../functions/signIn'

import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app'

const Questions = () => {
	const { photoURL, displayName, uid } = auth.currentUser || {
		photoURL: '',
		displayName: '',
		uid: '',
	}

	const [response, setResponse] = useState({
		text: '',
	})

	const [question, setQuestion] = useState({
		photoURL: '',
		displayName: '',
		text: '',
		uid: '',
		response: [response],
	})

	const [formValue, setFormValue] = useState('')

	const questionsRef = db.collection('questions')

	const query = questionsRef.orderBy('createdAt')

	const [questions] = useCollectionData(query, { idField: 'id' })

	const handleOnSubmit = async (e) => {
		e.preventDefault()

		await questionsRef.add({
			photoURL,
			displayName,
			uid,
			text: formValue,
			response: [],
			createdAt: firebase.firestore.FieldValue.serverTimestamp(),
		})

		setFormValue('')
	}

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
						<form onSubmit={handleOnSubmit}>
							<textarea
								name="question"
								id=""
								placeholder="What do you want to know?"
								value={formValue}
								onChange={(e) => {
									setFormValue(e.target.value)
								}}
							></textarea>
							<div className="container-buttons d-flex justify-content-between">
								<div className="media">
									<p>
										<i className="fas fa-images"></i>
									</p>
									<p>
										<i className="fas fa-play"></i>
									</p>
									<p>
										<i className="fas fa-music"></i>
									</p>
								</div>
								<div>
									<button type="submit">Publish</button>
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
