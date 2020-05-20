<template>
  <q-page class="flex flex-center">
    <!-- content -->
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
      style="min-width: 400px;"
    >
      <q-input
        filled
        v-model="description"
        label="Descrição"
        hint="Descrição da tarefa"
        type="textarea"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor, informe a descrição da tarefa.']"
      />

      <div>
        <q-btn label="Enviar" type="submit" color="primary"/>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  // name: 'PageName',
  data () {
    return {
      description: ''
    }
  },
  methods: {
    ...mapActions('main', [
      'setTask'
    ]),
    onSubmit () {
      this.setTask({
        description: this.description,
        status: 'O'
      })
    }
  }
}
</script>
