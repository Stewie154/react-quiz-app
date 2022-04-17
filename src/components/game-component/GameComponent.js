import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

const GameComponent = (props) => {

	const [currentQuestion, setCurrentQuestion] = useState(props.questions[0])

	console.log(currentQuestion)

return (
	<div className="game-component">
		<h1 className="question">{currentQuestion.question}</h1>
	</div>
)
}

export default GameComponent