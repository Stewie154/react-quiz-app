import React from 'react'
import './WelcomeComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'

const WelcomeComponent = (props) => {
	return (
		<div className="welcome-component">
			<h3 className="greeting-message">Welcome!</h3>
			<div className="start-btn-container">
				<ButtonComponent text="Select Quiz" handleClick={props.selectQuizClick}/>
			</div>
		</div>
	)
}

export default WelcomeComponent