import React from 'react'
import './ResubmitComponent.scss'
import backupQuestions from '../../api/backupQuestions'

import ButtonComponent from '../button-component/ButtonComponent'


const ResubmitComponent = (props) => {


	const handleSearchAgain = () => {
		props.toggleQuizSelection()
		props.toggleUserResubmitting()
	}

	const getTenRandomQuestions = (questionsArray) => {
		let questions = []
		for (let i = 0; i < 10; i++) {
			questions.push(questionsArray[Math.floor(Math.random() * questionsArray.length)])
		}
		return questions
	}

	getTenRandomQuestions(backupQuestions)

	const handleStartGame = (questions) => {
		props.toggleIsLoading()
		props.startGame(questions)
		props.toggleUserResubmitting()
	}

	return (
		<div className="resubmit-component">
			<h1>Failed to retrieve enough questions with your search criteria.</h1>
			<div className="actions-container">
				<ButtonComponent text="Search again" handleClick={handleSearchAgain}/>
				<ButtonComponent text="Play random quiz" handleClick={() => {handleStartGame(getTenRandomQuestions(backupQuestions))}}/>
			</div>
		</div>
	)
}

export default ResubmitComponent