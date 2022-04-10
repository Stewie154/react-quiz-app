 import axios from 'axios'

 const questionsApiCall = async (submittedQuizInfo) => {
	const url = `https://opentdb.com/api.php?amount=${submittedQuizInfo.no_of_questions}&category=${submittedQuizInfo.trivia_category}&difficulty=${submittedQuizInfo.trivia_difficulty}&type=${submittedQuizInfo.trivia_type}`
	const response = await axios.get(url)
	if (response.data.response_code == 0) {
		console.log(response.data.results)
		return response.data.results
	}
	else {
		console.log(response.data.response_code)
		return response.data.response_code
	}

 }

 export default questionsApiCall