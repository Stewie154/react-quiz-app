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
						type="number" 
						name="no_of_questions" 
						className="form-element" 
						min="5" 
						max="50"
					/>
				</div>
			</form>
		</>
		
	)
}

export default SelectQuizForm