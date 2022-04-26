import React from 'react'
import './WelcomeComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'
import Fade from 'react-reveal/Fade';


const WelcomeComponent = (props) => {
	return (
		<Fade up delay={100}>
			<div className="welcome-component">
				<h3 className="greeting-message">Welcome!</h3>
				<div className="main-btn-container">
					<ButtonComponent text="Select Quiz" handleClick={props.selectQuizClick}/>
				</div>
			</div>
		</Fade>
	)
}

export default WelcomeComponent