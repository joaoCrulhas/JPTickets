/* eslint-disable */

export default {
    'LOGIN_USER' (state, payload) {
        state.user = payload
    },
    'DEFINE_TOKEN' (state, payload) {
        state.login = true
        state.token = payload
    },
    'LOGOUT' (state) {
        state.login = false
        state.token = ''
        state.user.cpf = ''
        state.user.rg = ''
        state.user.endereco = ''
        state.user.permissoesEventos = []
        state.user.permissoesIngressos = []
        state.user.telefone = ''
        state.user.email = ''
    },
}