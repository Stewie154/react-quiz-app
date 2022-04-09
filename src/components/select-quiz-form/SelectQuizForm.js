import React from 'react'

const SelectQuizForm = () => {
	return (
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
	)
}

export default SelectQuizForm