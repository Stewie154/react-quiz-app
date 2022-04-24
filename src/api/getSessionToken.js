import axios from 'axios'

const getSessionToken = async () => {
	let response = await axios.get('https://opentdb.com/api_token.php?command=request')
	return response.data
}

export default getSessionToken