/* eslint-disable */ 
import axios from 'axios'
const urlApi = `http://127.0.0.1:3000`

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
        const { cpf, rg, endereco, email, permissoesEventos, permissoesIngressos, telefone, nome } = user
        return axios.post(`${urlApi}/users`, {
            cpf, rg, endereco, email, permissoesEventos, permissoesIngressos, telefone, nome
        })
    }

    static async getUsers() {
            // Make a request for a user with a given ID
            return await axios.get(`${urlApi}/users`)
    }
}

export default UserService