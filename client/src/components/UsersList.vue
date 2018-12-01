<template>
    <div>
      <b-table striped hover :items="users" :fields="fields"></b-table>
    </div>
</template>

<script>
    import UsersService from '../services/UsersService';
    export default {
        data() {
            return {
                fields: ['nome', 'permissoesEventos', 'permissoesIngressos', 'email', 'telefone'],
                users: [],
            }
        },
        async beforeCreate() {
            let { data, status } = await UsersService.getUsers()
            this.users = data.Users;
        }
    }

</script>

<style scoped>

</style>