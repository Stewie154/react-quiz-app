import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

import ButtonComponent from '../button-component/ButtonComponent'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'

const GameComponent = (props) => {

	const [currentQuestion, setCurrentQuestion] = useState()
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

	useEffect(() => {
		setCurrentQuestion(props.questions[0])
	},[currentQuestion, currentQuestionIndex])

	console.log(currentQuestion)

	const answers = currentQuestion && currentQuestion.incorrect_answers.map((answer) => <ButtonComponent text={answer}/>)

return (
	<div className="game-component">
		{!currentQuestion && <LoadingSpinner />}
		<h1></h1>
		<h1 className="question">{currentQuestion && currentQuestion.question}</h1>
		<main className="answers-grid">
			{answers}
		</main>
	</div>
)
}

export default GameComponent