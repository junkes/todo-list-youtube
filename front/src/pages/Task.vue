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
import { mapActions, mapGetters } from 'vuex'
export default {
  // name: 'PageName',
  data () {
    return {
      description: ''
    }
  },
  computed: {
    ...mapGetters('main', [
      'getterTask'
    ])
  },
  watch: {
    getterTask (value) {
      this.description = value.description
    }
  },
  methods: {
    ...mapActions('main', [
      'newTask',
      'getTask',
      'updateTask'
    ]),
    onSubmit () {
      if (this.$route.params.id) {
        this.updateTask({
          id: this.$route.params.id,
          description: this.description,
          status: 'O'
        })
      } else {
        this.newTask({
          description: this.description,
          status: 'O'
        })
      }
    }
  },
  created () {
    if (this.$route.params.id) {
      this.getTask({ id: this.$route.params.id })
    }
  }
}
</script>
