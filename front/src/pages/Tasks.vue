<template>
  <q-page class=''>
    <!-- <img
      alt='Quasar logo'
      src='~assets/quasar-logo-full.svg'
    > -->
    <div class='q-py-xl list-tasks q-gutter-xs'>
      <!-- <div >
        Id: {{task.id}} <br />
        Descrição: {{task.description}} <br />
        Status: {{task.status === 'O' ? 'Aberto' : 'Fechado' }}
        <hr />
      </div> -->
      <q-banner v-for='(task, index) in getTasks' v-bind:key='index' inline-actions rounded class="bg-grey-4">
        {{task.id}} | {{task.description}}

        <template v-slot:action>
          <q-btn :to="`tasks/${task.id}`" flat icon="edit" />
          <q-btn @click=deleteTask(task) color="red" flat icon="delete" />
        </template>
      </q-banner>
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
      'setTasks',
      'deleteTask'
    ])
  },
  created () {
    this.setTasks()
  }
}
</script>

<style>
.list-tasks {
  max-width: 800px;
  margin: 0 auto;
}
</style>
