import React from 'react'
import './EndOfGameComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'
import Fade from 'react-reveal/Fade';


const EndOfGameComponent = ({score, questionsLength, resetGame}) => {
	const images = {
		winner: [
			'images/winner.gif',
			'images/good.gif',
			'images/winner-3.gif',
			'images/winner-4.gif',
		],
		notBad: [
			'images/not-bad.gif',
			'images/not-bad-2.gif'
		],
		loser: [
			'images/loser.gif',
			'images/loser-2.gif',
			'images/loser-3.gif',
			'images/loser-4.gif'
		]
	}

	const getResult = (score, questionsLength) => {
		let percentage = score / questionsLength * 100
		let result = {
			image: '',
			text: ''
		}
		if (percentage >= 80) {
			result.image =  images.winner[Math.floor(Math.random() * images.winner.length)]
			result.text = 'Fantastic!'
		}
		else if (percentage >= 50) {
			result.image = images.notBad[Math.floor(Math.random() * images.notBad.length)]
			result.text = 'Not Bad...'
		}
		else {
			result.image = images.loser[Math.floor(Math.random() * images.loser.length)]
			result.text = 'Um...thanks for playing!'
		}
		return result
	}

	
	getResult(score, questionsLength)

	return (
		<div className="end-of-game-component">
			<Fade down>
				<h1>You scored {score} / {questionsLength}</h1>
				<img className="result-image" src={getResult(score, questionsLength).image} />
			</Fade>
			
			<Fade up>
				<h3>{getResult(score, questionsLength).text}</h3>
				<div className="main-btn-container">
					<ButtonComponent text="Play again" handleClick={() => resetGame()} />
				</div>
			</Fade>
		</div>
	)
}

export default EndOfGameComponent