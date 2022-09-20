import axios from 'axios';

const Axios = axios.create({
   baseURL: 'https://hp-api.herokuapp.com/api'
})

export default Axios;