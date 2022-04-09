import React, {useState} from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'
import SelectQuizForm from '../select-quiz-form/SelectQuizForm'

const App = () => {

	const [selectingQuiz, setSelectingQuiz] = useState(true)

	const toggleQuizSelection = () => {
		setSelectingQuiz(!selectingQuiz)
		console.log(selectingQuiz)
	}


	return (
		<div className="wrapper">
			<h1 className="main-title">Quiz App</h1>
			<div className='app-container'>
				{!selectingQuiz && <WelcomeComponent  selectQuizClick={toggleQuizSelection}/>}
				{selectingQuiz && <SelectQuizForm />}
			</div>
		</div>
		
	)
}

export default App