import React from 'react'
import './EndOfGameComponent.scss'
import ButtonComponent from '../button-component/ButtonComponent'

const EndOfGameComponent = ({score, questionsLength}) => {
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
		console.log(percentage)
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
		console.log(result.image + 'dsssssassaffsaa')
		return result
	}

	
	getResult(score, questionsLength)

	return (
		<div className="end-of-game-component">
			<h1>You scored {score} / {questionsLength}</h1>
			<img className="result-image" src={getResult(score, questionsLength).image} />
			<h3>{getResult(score, questionsLength).text}</h3>
			<ButtonComponent text="Play again" handleClick={() => console.log('play again')} />
		</div>
	)
}

export default EndOfGameComponent