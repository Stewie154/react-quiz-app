import React from 'react'
import './App.scss'
import '../../styles/global.scss'

import WelcomeComponent from '../welcome-component/WelcomeComponent'

const App = () => {
	return (
		<div className="wrapper">
			<h1 className="main-title">Quiz App</h1>
			<div className='app-container'>
				<WelcomeComponent />
			</div>
		</div>
		
	)
}

export default App