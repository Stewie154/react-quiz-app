 import axios from 'axios'

 const questionsApiCall = async (submittedQuizInfo, token) => {
	
	const url = `https://opentdb.com/api.php?amount=${submittedQuizInfo.no_of_questions}&token=${token}&category=${submittedQuizInfo.trivia_category}&difficulty=${submittedQuizInfo.trivia_difficulty}&type=${submittedQuizInfo.trivia_type}`
	const response = await axios.get(url)
	if (response.data.response_code === 0) {
		return response.data.results
	}
	else {
		return response.data.response_code
	}

 }

 export default questionsApiCall

