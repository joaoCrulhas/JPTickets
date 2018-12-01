<template>
  <div>
    <b-form @reset="onReset" v-if="show">
      <b-form-group id="nome"
                    label="Nome:"
                    label-for="nome">
        <b-form-input id="nome"
                      type="text"
                      v-model="form.nome"
                      required
                      placeholder="Enter Nome">
        </b-form-input>
      </b-form-group>

      <b-form-group id="local"
                    label="Local:"
                    label-for="local">
        <b-form-input id="local"
                      type="text"
                      v-model="form.local"
                      required
                      placeholder="Enter local">
        </b-form-input>
      </b-form-group>
    <ul v-if="inputs.length > 0">
      <li v-for="(input, index) in inputs" :key="index">
        <input type="text" placeholder="Nome Ingresso" 
        v-model="input.nomeIngresso">
        <input style="margin-left:10px" 
        type="text" placeholder="Valor Ingresso" 
        v-model="input.valorIngresso"> 
        <button @click="deleteRow(index)">Delete</button>
      </li>
    </ul>

    <ul v-if="atracoes.length > 0">
      <li v-for="(input, index) in atracoes" :key="index">
        <input style="margin-left:10px" 
        type="text" placeholder="Atrações" 
        v-model="input.nomeatracao"> 
        <button @click="deleteRowAtracao(index)">Delete</button>
      </li>
    </ul>

        <b-button style="margin-left:15px;" type="button" variant="primary"  @click="addRow">Criar ingresso</b-button>
        <b-button style="margin-left:15px;" type="button" variant="primary" @click="addRowAtracao">Criar Atração</b-button>
        <b-button style="margin-left:15px;" type="button" variant="primary" @click="onSubmit">Submit</b-button>
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
      <b-button style="margin-left:15px;" type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import EventsService from '../services/EventsService';

export default {
  data () {
    return {
      form: {
        ingressos: [],
        atracoes: [],
        nome: '',
        local: '',
      },
      inputs: [],
      atracoes: [],
      show: true
    }
  },
  methods: {
    addRowAtracao() {
      this.atracoes.push({
        nomeatracao: '',
      })
    },
    addRow() {
      this.inputs.push({
        nomeIngresso: '',
        valorIngresso: ''
      })
    },
    deleteRow(index) {
      this.inputs.splice(index,1)
    },
    deleteRowAtracao(index) {
      this.atracoes.splice(index,1)
    },
    async onSubmit (evt) {
        this.form.ingressos = this.inputs
        this.form.atracoes  = this.atracoes
        EventsService.createEvent(this.form)
    },
    onReset (evt) {
      evt.preventDefault();
        this.form.local = ''
        this.form.nome = ''
        this.form.atracoes = ''
        this.form.ingressos = []
        this.inputs = []
        this.atracoes = []
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  name:'createevent',
}
</script>

<style scoped>

</style>

//   local: String,
//   nome: String,
//   atracoes: [String],
//   ingressos: [String],