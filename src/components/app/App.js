import React, {useState} from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'
import SelectQuizForm from '../select-quiz-form/SelectQuizForm'
import LoadingSpinner from '../loading-spinner/LoadingSpinner'

const App = () => {

	const [selectingQuiz, setSelectingQuiz] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const toggleIsLoading = () => {
		setIsLoading(!isLoading)
	}

	const toggleQuizSelection = () => {
		setSelectingQuiz(!selectingQuiz)
		console.log(selectingQuiz)
	}


	return (
		<div className="wrapper">
			<h1 className="main-title">Quiz App</h1>
			<div className='app-container'>
				{!selectingQuiz && <WelcomeComponent  selectQuizClick={toggleQuizSelection}/>}
				{selectingQuiz && <SelectQuizForm toggleIsLoading={toggleIsLoading}/>}
				{isLoading && <LoadingSpinner />}
			</div>
		</div>
		
	)
}

export default App