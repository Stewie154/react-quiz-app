import React from 'react'

const GameComponent = (props) => {

const questions = props.questions.map(question => {
	console.log(question)
	return (
		<p>{question.question}</p>
	)
})

return (
	<div>{questions}</div>
)
}

export default GameComponent