import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz2019.firebaseio.com/'
})