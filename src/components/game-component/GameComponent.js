import React, { useState, useEffect } from 'react'
import './GameComponent.scss'
import DOMPurify from 'dompurify'

import ButtonComponent from '../button-component/ButtonComponent'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'
import EndOfGameComponent from '../end-of-game-component/EndOfGameComponent'

const GameComponent = ({ questions, resetGame}) => {

	const [currentQuestion, setCurrentQuestion] = useState(null)
	const [questionIndex, setQuestionIndex] = useState(0)
	const [answers, setAnswers] = useState([])
	const [score, setScore] = useState(0)
	const [nextButton, setNextButton] = useState(false)
	const [answeredCorrectly, setAnsweredCorrectly] = useState(true)
	const [endGameScreen, setEndGameScreen] = useState(false)

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
		setEndGameScreen(true)
	}

	const sanitizedData = (d) => ({
		__html: DOMPurify.sanitize(d)
	  })

	const renderHTML = (rawHTML) => React.createElement("div", { dangerouslySetInnerHTML: { __html: rawHTML } });

	const answerButtons = answers !== [] && answers.map((answer, index) => {
		let uiFeedbackClass = answer === currentQuestion.correct_answer ? 'correct' : 'incorrect'
		return (
			<ButtonComponent 
				disabled={nextButton} 
				key={index} 
				text={renderHTML(sanitizedData(answer).__html)} 
				handleClick={() => handleQuestionAnswer(answer)}
				classes={nextButton && uiFeedbackClass}
			/>
		)
	})	
	
return (
	<>
		{!currentQuestion && <LoadingSpinner />}
		{currentQuestion &&
			<div className={`game-component ${nextButton && getColorFeedback()} ${endGameScreen && 'hidden'}`}>
				<h1 className="number-display">Question {questionIndex + 1} / {questions.length}</h1>
				<h2 className="question">{currentQuestion && renderHTML(sanitizedData(currentQuestion.question).__html)}</h2>
				<main className="answers-grid">
					{answerButtons}
				</main>
				{nextButton && 
					<div className="main-btn-container">
						<ButtonComponent classes="next-btn" text="Next Question" handleClick={updateCurrentQuestion}/>
					</div>
				}
			</div>
		}
		{endGameScreen && <EndOfGameComponent score={score} questionsLength={questions.length} resetGame={resetGame}/>}
	</>
	
)
}

export default GameComponent