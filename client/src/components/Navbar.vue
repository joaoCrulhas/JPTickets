<template>
    <div>
        <b-navbar toggleable="md" type="dark" variant="info">

        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

        <b-navbar-brand href="#">JPtickets</b-navbar-brand>

        <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
                
                <b-nav-item-dropdown text="Usuários" right>
                    <b-dropdown-item href="#">Listar</b-dropdown-item>
                    <b-dropdown-item :to="{ name:'CreateUser' }">Cadastrar</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown text="Eventos" right>
                    <b-dropdown-item >Listar</b-dropdown-item>
                    <b-dropdown-item >Cadastrar</b-dropdown-item>
                </b-nav-item-dropdown>
                
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item-dropdown right>
                    <!-- Using button-content slot -->
                    <template slot="button-content">
                    <em>User</em>
                    </template>
                    <b-dropdown-item href="#">Profile</b-dropdown-item>
                    <b-dropdown-item href="#">Signout</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>

        <!-- navbar-1.vue -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>