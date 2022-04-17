import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

import ButtonComponent from '../button-component/ButtonComponent'

const GameComponent = (props) => {

	const [currentQuestion, setCurrentQuestion] = useState(props.questions[0])

	console.log(currentQuestion)

	const answers = currentQuestion.incorrect_answers.map((answer) => <ButtonComponent text={answer}/>)

return (
	<div className="game-component">
		<h1 className="question">{currentQuestion.question}</h1>
		<main className="answers-grid">
			{answers}
		</main>
	</div>
)
}

export default GameComponent