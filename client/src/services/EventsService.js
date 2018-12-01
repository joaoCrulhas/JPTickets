/* eslint-disable */ 
import axios from 'axios'
const urlApi = `http://127.0.0.1:3000/events`

// const urlApi = `http://127.0.0.1:3000/api/v1/users`
// const urlApiAuth = `http://127.0.0.1:3000/api/v1/auth`

// const urlApi = `api/v1/users`
// const urlApiAuth = `api/v1/auth`


class EventService {
        /**
         * Create a new user
         * @param {object} user
         * @returns {String}
         */
        static createEvent(event) {

            const atracoes = []
            const ingressos = []

            event.atracoes.forEach(element => {
                atracoes.push(element.nomeatracao)
            });

            event.ingressos.forEach(element => {
                ingressos.push(`${element.nomeIngresso}/${element.valorIngresso}`)
            });

            return axios.post(`${urlApi}`, {
                "local" : event.local,
                "nome": event.nome,
                "atracoes": atracoes,
                "ingressos": ingressos
            })
        }
        static  getEvents() {
            return axios.get(`${urlApi}`)
        }
    }

export default EventService