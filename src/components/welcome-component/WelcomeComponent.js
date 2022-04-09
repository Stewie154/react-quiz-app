import React from 'react'
import './WelcomeComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'

const WelcomeComponent = () => {
	return (
		<div className="welcome-component">
			<h3 className="greeting-message">Welcome!</h3>
			<div className="start-btn-container">
				<ButtonComponent text="Choose Quiz"/>
			</div>
		</div>
	)
}

export default WelcomeComponent