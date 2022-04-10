 import axios from 'axios'

 const questionsApiCall = async (submittedQuizInfo) => {
	const url = `https://opentdb.com/api.php?amount=${submittedQuizInfo.no_of_questions}&category=${submittedQuizInfo.trivia_category}&difficulty=${submittedQuizInfo.trivia_difficulty}&type=${submittedQuizInfo.trivia_type}`
	console.log(url)
	const response = await axios.get(url)
	console.log(response.data.results)
 }

 export default questionsApiCall