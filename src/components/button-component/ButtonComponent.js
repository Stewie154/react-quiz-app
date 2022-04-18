import React from 'react'
import './ButtonComponent.scss'

const ButtonComponent = (props) => {
	const renderButton = () => {
		if (props.submitBtn) {
			return <button type="submit" className={`button-component ${props.classes && props.classes}`} onClick={props.handleClick}>
						{props.text}
					</button>
				
		}
		else {
			return <button  className={`button-component ${props.classes && props.classes}`} onClick={props.handleClick}>
						{props.text}
					</button>
		}
	}
	return (
		<>
			{renderButton()}
		</>
	)
}

export default ButtonComponent