import React from 'react'
import './ButtonComponent.scss'
import Fade from 'react-reveal/Fade';

const ButtonComponent = (props) => {
	const renderButton = () => {
		if (props.submitBtn) {
			return <button type="submit" className={`button-component ${props.classes && props.classes}`} onClick={props.handleClick}>
						{props.text}
					</button>
				
		}
		else {
			return <button disabled={props.disabled}  className={`button-component ${props.classes && props.classes}`} onClick={props.handleClick}>
						{props.text}
					</button>
		}
	}
	return (
		<>
			<Fade>
				{renderButton()}
			</Fade>
		</>
	)
}

export default ButtonComponent