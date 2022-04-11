import React, {useState} from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'
import SelectQuizForm from '../select-quiz-form/SelectQuizForm'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'
import ResubmitComponent from '../resubmit-component/ResubmitComponent'

const App = () => {
	const [welcomeScreen, setWelcomeScreen] = useState(true)
	const [selectingQuiz, setSelectingQuiz] = useState(false)
	const [isLoading, setIsLoading] = useState(false)
	const [userResubmitting, setUserResubmitting] = useState(false)
	const [questionsData, setQuestionsData] = useState([])
	

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
						setQuestionsData={setQuestionsData}
						toggleUserResubmitting={setUserResubmitting}
					/>
				}
				{userResubmitting && <ResubmitComponent toggleUserResubmitting={toggleUserResubmitting} />}
				{isLoading && <LoadingSpinner />}
			</div>
		</div>
		
	)
}

export default App