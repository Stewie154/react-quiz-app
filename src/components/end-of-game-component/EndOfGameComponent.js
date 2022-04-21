import React from 'react'
import './EndOfGameComponent.scss'

const EndOfGameComponent = ({score, questionsLength}) => {
	const images = {
		winner: [
			'images/winner.gif',
			'images/good.gif',
		],
		notBad: [
			'not-bad.gif',
			'not-bad-2.gif'
		],
		loser: [
			'loser-2.gif',
			'loser.gif'
		]
	}

	const getImage = (score, questionsLength) => {
		let percentage = score / questionsLength * 100
		console.log(percentage)
	}
	getImage(score, questionsLength)

	return (
		<div className="end-of-game-component">
			<h1>You scored {score} / {questionsLength}</h1>
			<img src='images/winner.gif'/>
		</div>
	)
}

export default EndOfGameComponent