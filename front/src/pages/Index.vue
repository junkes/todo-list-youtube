<template>
  <q-page class=''>
    <!-- <img
      alt='Quasar logo'
      src='~assets/quasar-logo-full.svg'
    > -->
    <div class='q-pa-xl'>
      <div v-for='(task, index) in tasks' v-bind:key='index'>
        Id: {{task.id}} <br />
        Descrição: {{task.description}} <br />
        Status: {{task.status === 'O' ? 'Aberto' : 'Fechado' }}
        <hr />
      </div>
    </div>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageIndex',
  data () {
    return {
      tasks: []
    }
  },
  methods: {
    getTasks () {
      axios.get('http://localhost:3000/tasks')
        .then(response => {
          if (response.data && response.data.length) {
            this.tasks = response.data
          }
        })
    }
  },
  created () {
    this.getTasks()
  }
}
</script>
