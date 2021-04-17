import React from 'react'
import {auth} from '../../functions/signIn'
const Question = ({question}) => {
    const {photoURL, displayName, text} = question;
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
							<p className="text">
								{text}
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

export default Question;