<template>
  <q-page class=''>
    <!-- <img
      alt='Quasar logo'
      src='~assets/quasar-logo-full.svg'
    > -->
    <div class='q-pa-xl'>
      <div v-for='(task, index) in getTasks' v-bind:key='index'>
        Id: {{task.id}} <br />
        Descrição: {{task.description}} <br />
        Status: {{task.status === 'O' ? 'Aberto' : 'Fechado' }}
        <hr />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters('main', [
      'getTasks'
    ])
  },
  methods: {
    ...mapActions('main', [
      'setTasks'
    ])
  },
  created () {
    this.setTasks()
  }
}
</script>
