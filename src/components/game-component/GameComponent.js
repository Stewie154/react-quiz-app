import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

import ButtonComponent from '../button-component/ButtonComponent'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'

const GameComponent = (props) => {

	const [currentQuestion, setCurrentQuestion] = useState()
	const [questionIndex, setQuestionIndex] = useState(0)
	const [answers, setAnswers] = useState([])

	useEffect(() => {
		setCurrentQuestion(props.questions[0])
	},[currentQuestion, questionIndex])

	const updateQuestionIndex = () => {
		if(questionIndex < props.questions.length) {
			setQuestionIndex(questionIndex + 1)
		}
		console.log(questionIndex)
	}

	const updateAnswers = () => {
		let answersArray = []
		
		currentQuestion.incorrect_answers.forEach(incorrect_answer => {
			answersArray.push(incorrect_answer)
		});
		answersArray.push(currentQuestion.correct_answer)
		answersArray.sort(() => Math.random() - 0.5)
		setAnswers(answersArray)
	}

	console.log(currentQuestion)

	const answerButtons = currentQuestion && currentQuestion.incorrect_answers.map((answer) => <ButtonComponent text={answer} handleClick={updateAnswers}/>)

return (
	<div className="game-component">
		{!currentQuestion && <LoadingSpinner />}
		<h1></h1>
		<h1 className="question">{currentQuestion && currentQuestion.question}</h1>
		<main className="answers-grid">
			{answerButtons}
		</main>
	</div>
)
}

export default GameComponent