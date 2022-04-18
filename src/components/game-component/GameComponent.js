import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

import ButtonComponent from '../button-component/ButtonComponent'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'

const GameComponent = ({ questions }) => {

	const [currentQuestion, setCurrentQuestion] = useState(null)
	const [questionIndex, setQuestionIndex] = useState(0)
	const [answers, setAnswers] = useState([])

	useEffect(() => {
		setCurrentQuestion(questions[0])
		if (currentQuestion != null) {
			groupAnswers()
		}
	},[currentQuestion, questionIndex])

	const updateQuestionIndex = () => {
		if(questionIndex < questions.length) {
			setQuestionIndex(questionIndex + 1)
		}
		console.log(questionIndex)
	}

	const groupAnswers = () => {
		let answersArray = []
		currentQuestion.incorrect_answers.forEach(incorrect_answer => {
			answersArray.push(incorrect_answer)
		});
		answersArray.push(currentQuestion.correct_answer)
		answersArray.sort(() => Math.random() - 0.5)
		setAnswers(answersArray)
	}

	console.log(questions)

	const answerButtons = answers !== [] && answers.map((answer) => <ButtonComponent text={answer}/>)

return (
	<>
		{!currentQuestion && <LoadingSpinner />}
		{currentQuestion &&
			<div className="game-component">
				<h1>Question {questionIndex + 1} / {questions.length}</h1>
				<h1 className="question">{currentQuestion && currentQuestion.question}</h1>
				<main className="answers-grid">
					{answerButtons}
				</main>
			</div>
		}
	</>
	
)
}

export default GameComponent