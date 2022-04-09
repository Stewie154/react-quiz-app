import React from 'react'
import './ButtonComponent.scss'

const ButtonComponent = (props) => {
	return (
		<button className="button-component">
			{props.text}
		</button>
	)
}

export default ButtonComponent