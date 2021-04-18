import React, { useState } from 'react'
import { auth, db } from '../../functions/signIn'
import Question from './Question'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import firebase from 'firebase/app'

const Questions = () => {
	const { photoURL, displayName, uid } = auth.currentUser || {
		photoURL: '',
		displayName: '',
		uid: '',
	}

	const [formValue, setFormValue] = useState('')

	const questionsRef = db.collection('questions')

	const query = questionsRef.orderBy('createdAt', 'desc')

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
			likes: 0,
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
								required
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
			{questions && questions.map((quest) => <Question key={quest.id} question={quest} />)}
		</div>
	)
}

export default Questions
