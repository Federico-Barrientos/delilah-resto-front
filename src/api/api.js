import Axios from 'axios';
const baseUrl = 'http://localhost:3000'

export const login = (credentials) => {
    Axios.post(`${baseUrl}/users/login`, credentials)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
}
