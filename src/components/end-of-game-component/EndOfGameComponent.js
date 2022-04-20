import React from 'react'

const EndOfGameComponent = ({score, questionsLength}) => {
  return (
    <div>You scored {score} / {questionsLength}</div>
  )
}

export default EndOfGameComponent