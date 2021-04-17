import React, { useEffect, useRef, useState } from 'react'
import Persona2 from '../../assets/img/social/persona2.jpg'
import Persona5 from '../../assets/img/social/persona5.jpg'
import { auth, db } from '../../functions/signIn'
import Question from './Question';
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
		photoURL: '',
		displayName: '',
		uid: '',
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

	const dummy = useRef();

	useEffect(() => {
		dummy.current.scrollIntoView({ behavior: 'smooth' });
	  });
	  
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
			{questions && questions.map(quest=> <Question key={quest.id} question={quest}/>)}
			<span ref={dummy}></span>
		</div>
	)
}

export default Questions
