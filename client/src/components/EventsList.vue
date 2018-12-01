<template>
	<div>  
      <b-table striped hover :items="events" :fields="fields"></b-table>
    </div>
</template>

<script>
    import EventsService from '../services/EventsService' 
    export default {
        data() {
            return {
                events: [],
                fields: ['nome', 'atracoes', 'ingressos', 'local'],
            }
        },
        async beforeCreate() {
            let retonroAPI = await EventsService.getEvents()
            this.events = retonroAPI.data.Event

        }
    }
</script>

<style scoped>

</style>