/* eslint-disable */ 
import axios from 'axios'
const urlApi = `http://127.0.0.1:3000/`

// const urlApi = `http://127.0.0.1:3000/api/v1/users`
// const urlApiAuth = `http://127.0.0.1:3000/api/v1/auth`

// const urlApi = `api/v1/users`
// const urlApiAuth = `api/v1/auth`


class UserService {
    /**
     * Create a new user
     * @param {object} user
     * @returns {String}
     */
    static createUser(user){
        return axios.post(urlApi, {
            "email": user.email,
            "name": user.name,
            "favouritePokemon": user.favouritePokemon,
            "password": user.password,
            "birthDate": user.birthDate
          })
    }
}

export default UserService