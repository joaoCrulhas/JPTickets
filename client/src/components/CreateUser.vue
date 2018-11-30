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

      <b-form-group id="email"
                    label="Email:"
                    label-for="email">
        <b-form-input id="email"
                      type="email"
                      v-model="form.email"
                      required
                      placeholder="Enter email">
        </b-form-input>
      </b-form-group>

      <b-form-group id="telefone"
                    label="Telefone:"
                    label-for="telefone">
        <b-form-input id="telefone"
                      type="text"
                      v-model="form.telefone"
                      required
                      placeholder="Enter telefone">
        </b-form-input>
      </b-form-group>


      <b-form-group id="cpf"
                    label="CPF:"
                    label-for="cpf">
        <b-form-input id="cpf"
                      type="text"
                      v-model="form.cpf"
                      required
                      placeholder="Enter CPF">
        </b-form-input>
      </b-form-group>

      <b-form-group id="rg"
                    label="RG:"
                    label-for="rg">
        <b-form-input id="rg"
                      type="text"
                      v-model="form.rg"
                      required
                      placeholder="Enter RG">
        </b-form-input>
      </b-form-group>

      <b-form-group id="endereco"
                    label="Endereco:"
                    label-for="endereco">
        <b-form-input id="endereco"
                      type="text"
                      v-model="form.endereco"
                      required
                      placeholder="Enter Endereco">
        </b-form-input>
      </b-form-group>

        <b-form-group label="Permissão Eventos">
        <b-form-checkbox-group id="checkboxEventos" name="checkboxEventos" v-model="form.permissoesEventos">
            <b-form-checkbox value="criar">Criar</b-form-checkbox>
            <b-form-checkbox value="editar">Editar</b-form-checkbox>
            <b-form-checkbox value="excluir">Excluir</b-form-checkbox>
        </b-form-checkbox-group>
        </b-form-group>

        <b-form-group label="Permissão Ingressos">
        <b-form-checkbox-group id="checkboxIngressos" name="checkboxIngressos" v-model="form.permissoesIngressos">
            <b-form-checkbox value="criar">Criar</b-form-checkbox>
            <b-form-checkbox value="editar">Editar</b-form-checkbox>
            <b-form-checkbox value="excluir">Excluir</b-form-checkbox>
        </b-form-checkbox-group>
        </b-form-group>

        <b-button type="button" variant="primary" @click="onSubmit">Submit</b-button>
      <!-- <b-button type="submit" variant="primary">Submit</b-button> -->
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import UsersService from '../services/UsersService';

export default {
  data () {
    return {
      form: {
        cpf: '',
        rg: '',
        endereco: '',
        permissoesEventos: [],
        permissoesIngressos: [],
        telefone: '',
        nome: '',
        email: '',
      },
      show: true
    }
  },
  methods: {
    async onSubmit (evt) {
      let { data, status } = await UsersService.createUser(this.form)
      if (status == 201) {
        this.$store.commit('LOGIN_USER', data.doc)
      }
      
    },
    onReset (evt) {
      evt.preventDefault();
        this.form.cpf = ''
        this.form.rg = ''
        this.form.endereco = ''
        this.form.permissoesEventos = []
        this.form.permissoesIngressos = []
        this.form.telefone = ''
        this.form.nome = ''
        this.form.email = ''
      /* Trick to reset/clear native browser form validation state */
      this.show = false;
      this.$nextTick(() => { this.show = true });
    }
  },
  name:'createuser',
}
</script>

