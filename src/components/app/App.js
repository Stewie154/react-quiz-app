import React, {useState} from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'

const App = () => {

	const [selectingQuiz, setSelectingQuiz] = useState(false)

	const toggleQuizSelection = () => {
		setSelectingQuiz(!selectingQuiz)
		console.log(selectingQuiz)
	}


	return (
		<div className="wrapper">
			<h1 className="main-title">Quiz App</h1>
			<div className='app-container'>
				<WelcomeComponent  selectQuizClick={toggleQuizSelection}/>

			</div>
		</div>
		
	)
}

export default App