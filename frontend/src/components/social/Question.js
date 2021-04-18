import React, {useState} from 'react'
import { auth, db } from '../../functions/signIn'
const Question = ({ question }) => {
	const [bool, setBool] = useState(true);

	const { photoURL, displayName, text, id, likes } = question

	const questionsRef = db.collection('questions')
	
	const decorationLike={
		color: '#aaaaaa'
	}

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
									if(bool){
										await questionsRef.doc(id).update({
											likes: likes + 1,
										})
										setBool(false);
									} else {
										await questionsRef.doc(id).update({
											likes: likes - 1,
										})
										setBool(true);
									}
								}}
							>
								<i style={bool? {}: decorationLike} className="fas fa-thumbs-up"></i>
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
								<form action="">
									<textarea name="" id="" placeholder="comment"></textarea>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Question
