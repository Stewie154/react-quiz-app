import React, {useState, useEffect} from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'
import SelectQuizForm from '../select-quiz-form/SelectQuizForm'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'
import ResubmitComponent from '../resubmit-component/ResubmitComponent'
import GameComponent from '../game-component/GameComponent'

const App = () => {
	const [welcomeScreen, setWelcomeScreen] = useState(true)
	const [selectingQuiz, setSelectingQuiz] = useState(false)
	const [userResubmitting, setUserResubmitting] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [questionsData, setQuestionsData] = useState([])
	const [gameOn, setGameOn] = useState(false)


	useEffect(() => {
		if (gameOn || userResubmitting) {
			setIsLoading(false)
		}
		
	}, [gameOn, userResubmitting])

	const startGame = (questions) => {
		setQuestionsData(questions)
		setGameOn(true)
	}
	
	const toggleIsLoading = () => {
		setIsLoading(!isLoading)
	}

	const toggleQuizSelection = () => {
		if (welcomeScreen) {
			setWelcomeScreen(false)
		}
		setSelectingQuiz(!selectingQuiz)
	}

	const toggleUserResubmitting = () => {
		setUserResubmitting(!userResubmitting)
	}



	return (
		<div className="wrapper">
			<h1 className="main-title">Quiz App</h1>
			<div className='app-container'>
				{welcomeScreen  && <WelcomeComponent  selectQuizClick={toggleQuizSelection}/>}
				{selectingQuiz && 
					<SelectQuizForm 
						toggleQuizSelection={toggleQuizSelection} 
						isLoading={isLoading}
						toggleIsLoading={toggleIsLoading}
						startGame={startGame}
						toggleUserResubmitting={toggleUserResubmitting}
					/>
				}
				{userResubmitting && 
					<ResubmitComponent 
						toggleQuizSelection={toggleQuizSelection} 
						toggleUserResubmitting={toggleUserResubmitting}
						startGame={startGame}
						toggleIsLoading={toggleIsLoading}
					/>
				}
				{isLoading && <LoadingSpinner />}
				{gameOn && <GameComponent questions={questionsData}/>}
			</div>
		</div>
		
	)
}

export default App