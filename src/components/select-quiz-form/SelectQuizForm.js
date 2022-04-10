import React, { useState, useEffect } from 'react'
import './SelectQuizForm.scss'
import questionsApiCall from '../../api/openTDB'
import ButtonComponent from '../button-component/ButtonComponent'

const SelectQuizForm = () => {

	const [submittedQuizInfo, setSubmittedQuizInfo] = useState({})

	useEffect(() => {
		retrieveQuiz()
	},[submittedQuizInfo])

	const handleSubmission = (event) => {
		event.preventDefault()
		setSubmittedQuizInfo(
			{
				no_of_questions: event.target[0].value,
				trivia_category: event.target[1].value,
				trivia_difficulty: event.target[2].value,
				trivia_type: event.target[3].value,
			}
		)
		console.log(submittedQuizInfo)
		
	}

	const retrieveQuiz = () => {
		questionsApiCall(submittedQuizInfo);
	}

	return (
		<>
			<h3 className="header">Quiz Selection</h3>
			<form onSubmit={(event) => handleSubmission(event)}>
				<div className="form-group">
					<label>Number of Questions:</label>
					<input 
						className="form-element" 
						type="number" 
						name="no_of_questions" 
						min="5" 
						max="50"
						defaultValue="10"
					/>
				</div>
				<div className="form-group">
					<label>Select Category</label>
					<select 
						className="form-element" 
						name="trivia_category" 
					>
						<option value="any">Any Category</option>
						<option value="9">General Knowledge</option>
						<option value="10">Entertainment: Books</option>
						<option value="11">Entertainment: Film</option>
						<option value="12">Entertainment: Music</option>
						<option value="13">Entertainment: Musicals &amp; Theatres</option>
						<option value="14">Entertainment: Television</option>
						<option value="15">Entertainment: Video Games</option>
						<option value="16">Entertainment: Board Games</option>
						<option value="17">Science &amp; Nature</option>
						<option value="18">Science: Computers</option>
						<option value="19">Science: Mathematics</option>
						<option value="20">Mythology</option>
						<option value="21">Sports</option>
						<option value="22">Geography</option>
						<option value="23">History</option>
						<option value="24">Politics</option>
						<option value="25">Art</option>
						<option value="26">Celebrities</option>
						<option value="27">Animals</option>
						<option value="28">Vehicles</option>
						<option value="29">Entertainment: Comics</option>
						<option value="30">Science: Gadgets</option>
						<option value="31">Entertainment: Japanese Anime &amp; Manga</option>
						<option value="32">Entertainment: Cartoon &amp; Animations</option>
					</select>
				</div>
				<div className="form-group">
					<label>Select Difficulty</label>
					<select 
						className="form-element" 
						name="trivia_difficulty" 
					>
						<option value="any">Any Difficulty</option>
						<option value="easy">Easy</option>
						<option value="medium">Medium</option>
						<option value="hard">Hard</option>
					</select>
				</div>
				<div className="form-group">
					<label>Select Type</label>
					<select 
						className="form-element" 
						name="trivia_type" 
					>
						<option value="any">Any Type</option>
						<option value="multiple">Multiple Choose</option>
						<option value="boolean">True / False</option>
					</select>
				</div>
				<div className="form-group">
					<ButtonComponent submitBtn text="Start Quiz"/>
				</div>

			</form>
		</>
		
	)
}

export default SelectQuizForm