 import axios from 'axios'

 const questionsApiCall = async (submittedQuizInfo) => {
	const url = `https://opentdb.com/api.php?amount=${submittedQuizInfo.no_of_questions}&category=${submittedQuizInfo.trivia_category}&difficulty=${submittedQuizInfo.trivia_difficulty}&type=${submittedQuizInfo.trivia_type}`
	await axios.get(url).then(res => console.log(res))
 }

 export default questionsApiCall