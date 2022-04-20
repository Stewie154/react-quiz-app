import React, { useState, useEffect } from 'react'
import './GameComponent.scss'

import ButtonComponent from '../button-component/ButtonComponent'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'

const GameComponent = ({ questions }) => {

	const [currentQuestion, setCurrentQuestion] = useState(null)
	const [questionIndex, setQuestionIndex] = useState(0)
	const [answers, setAnswers] = useState([])
	const [score, setScore] = useState(0)
	const [nextButton, setNextButton] = useState(false)
	const [answeredCorrectly, setAnsweredCorrectly] = useState(true)

	useEffect(() => {
		setCurrentQuestion(questions[questionIndex])
		if (currentQuestion != null) {
			groupAnswers()
		}
	},[currentQuestion, questionIndex])

	const updateQuestionIndex = () => {
		if (questionIndex < questions.length - 1) {
			setQuestionIndex(questionIndex + 1)
		}
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

	const updateCurrentQuestion = () => {
		if (questionIndex !== questions.length -1) {
			setNextButton(!nextButton)
			updateQuestionIndex()
			setCurrentQuestion(questions[questionIndex])
			groupAnswers()
		}
		else {
			endQuiz()
		}
	}

	const handleQuestionAnswer = (answer) => {
		if (answer === currentQuestion.correct_answer) {
			setAnsweredCorrectly(true)
			setScore(score + 1) 
		}
		else {
			setAnsweredCorrectly(false)
		}
		
		setNextButton(!nextButton)
	}

	const getColorFeedback = () => {
		if (answeredCorrectly === true) {
			return 'correct'
		}
		if (answeredCorrectly === false) {
			return 'incorrect'
		}
		else return ''
		
	}

	const endQuiz = () => {
		console.log('you scored' + score)
	}

	const answerButtons = answers !== [] && answers.map((answer, index) => <ButtonComponent disabled={nextButton} key={index} text={answer} handleClick={() => handleQuestionAnswer(answer)}/>)
	console.log(currentQuestion)
return (
	<>
		{!currentQuestion && <LoadingSpinner />}
		{currentQuestion &&
			<div className={`game-component ${nextButton && getColorFeedback()}`}>
				<h1 className="number-display">Question {questionIndex + 1} / {questions.length}</h1>
				<h2 className="question">{currentQuestion && currentQuestion.question}</h2>
				<main className="answers-grid">
					{answerButtons}
				</main>
				{nextButton && 
					<div className="next-btn-container">
						<ButtonComponent classes="next-btn" text="Next Question" handleClick={updateCurrentQuestion}/>
					</div>
				}
			</div>
		}
	</>
	
)
}

export default GameComponent