import React from 'react'

const Answers = ({ response }) => {
	return (
		<div>
			<div className="row no-gutters comment">
				<div className="col-auto photo">
					<a href="#">
						<img src={response.photoURL} alt="" />
					</a>
				</div>
				<div className="col">
					<p className="answer-question">{response.displayName}</p>
					<p className="answer">{response.text}</p>
				</div>
			</div>
		</div>
	)
}

export default Answers
