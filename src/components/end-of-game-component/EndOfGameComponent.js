import React from 'react'
import './EndOfGameComponent.scss'

const EndOfGameComponent = ({score, questionsLength}) => {
	return (
		<div className="end-of-game-component">
			<h1>You scored {score} / {questionsLength}</h1>
		</div>
	)
}

export default EndOfGameComponent