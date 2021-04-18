import React, { useState } from 'react'
import { auth, db } from '../../functions/signIn'

import Answers from './Answers'

const Question = ({ question }) => {
	const [bool, setBool] = useState(true)

	const { photoURL, displayName, text, id, likes, response } = question

	const questionsRef = db.collection('questions')

	const decorationLike = {
		color: '#aaaaaa',
	}

	const [formValue, setFormValue] = useState('')

	return (
		<div className="publication">
			<div className="row">
				<div className="col-auto photo">
					<a href="#">
						<img src={photoURL} alt="" />
					</a>
				</div>
				<div className="col">
					<div className="post">
						<a href="#" className="name">
							{displayName}
						</a>
						<p className="text">{text}</p>
						<div className="box-buttons d-flex justify-content-between align-items-center">
							<button
								onClick={async () => {
									if (bool) {
										await questionsRef.doc(id).update({
											likes: likes + 1,
										})
										setBool(false)
									} else {
										await questionsRef.doc(id).update({
											likes: likes - 1,
										})
										setBool(true)
									}
								}}
							>
								<i style={bool ? {} : decorationLike} className="fas fa-thumbs-up"></i>
							</button>
							<p>
								{likes} <i className="fas fa-thumbs-up"></i>
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
									<img src={auth.currentUser.photoURL} alt="" />
								</a>
							</div>
							<div className="col">
								<form
									onSubmit={(e) => {
										e.preventDefault()
									}}
								>
									<textarea
										name=""
										id=""
										placeholder="comment"
										onChange={(e) => {
											setFormValue(e.target.value)
										}}
									></textarea>
									<button
										onClick={async () => {
											if (response.length === 0) {
												await questionsRef.doc(id).update({
													response: [
														{
															text: formValue,
															photoURL: auth.currentUser.photoURL,
															displayName: auth.currentUser.displayName,
															uid: auth.currentUser.uid,
														},
													],
												})
											} else {
												response.push({
													text: formValue,
													photoURL: auth.currentUser.photoURL,
													displayName: auth.currentUser.displayName,
													uid: auth.currentUser.uid,
												})
												await questionsRef.doc(id).update({
													response: response,
												})
											}
										}}
										type="submit"
										style={{ display: 'block' }}
										className="btn"
									>
										Reply
									</button>
								</form>
							</div>
						</div>

						{response && response.map((res) => <Answers key={res.text} response={res} />)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Question
