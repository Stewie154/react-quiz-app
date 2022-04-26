import React, {useState, useEffect} from 'react'
import './App.scss'
import '../../styles/global.scss'
import Fade from 'react-reveal/Fade';

import getSessionToken from '../../api/getSessionToken'

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
	const [sessionToken, setSessionToken] = useState('')


	useEffect(() => {
		if (sessionToken === '') {
			saveToken()
		}
	}, [])


	useEffect(() => {
		if (gameOn || userResubmitting) {
			setIsLoading(false)
		}
		
	}, [gameOn, userResubmitting])

	const saveToken = async () => {
		await getSessionToken()
			.then(res => {
				if (res.response_code == 0) {
					setSessionToken(res.token)
				}
				else {
					setSessionToken('error')
				}
			})
	}

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

	const resetGame = () => {
		setGameOn(false)
		setIsLoading(false)
		setSelectingQuiz(true)
	}



	return (
		<Fade up>
			<div className="wrapper">
				<h1 className="main-title">Quick Quiz</h1>
				<div className='app-container'>
					{welcomeScreen  && <WelcomeComponent  selectQuizClick={toggleQuizSelection}/>}
					{selectingQuiz && 
						<SelectQuizForm 
							toggleQuizSelection={toggleQuizSelection} 
							isLoading={isLoading}
							toggleIsLoading={toggleIsLoading}
							startGame={startGame}
							toggleUserResubmitting={toggleUserResubmitting}
							sessionToken={sessionToken}
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
					{gameOn && <GameComponent questions={questionsData} resetGame={resetGame}/>}
				</div>
			</div>
		</Fade>
		
		
	)
}

export default App