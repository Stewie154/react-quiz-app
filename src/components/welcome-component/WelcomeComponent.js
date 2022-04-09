import React from 'react'
import './WelcomeComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'

const WelcomeComponent = () => {
	return (
		<div className="welcome-component">
			<h3 className="greeting-message">Welcome to the quiz!</h3>
			<div className="start-btn-container">
				<ButtonComponent text="Start"/>
			</div>
		</div>
	)
}

export default WelcomeComponent