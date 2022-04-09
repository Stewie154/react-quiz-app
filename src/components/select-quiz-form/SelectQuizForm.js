import React from 'react'
import './SelectQuizForm.scss'

const SelectQuizForm = () => {
	return (
		<>
			<h3 className="header">Quiz Selection</h3>
			<form>
				<div className="form-group">
					<label>Number of Questions</label>
					<input 
						className="form-element" 
						type="number" 
						name="no_of_questions" 
						min="5" 
						max="50"
					/>
				</div>
			</form>
		</>
		
	)
}

export default SelectQuizForm