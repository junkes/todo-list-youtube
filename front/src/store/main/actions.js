import axios from 'axios'
export function setTasks (context) {
  axios.get('http://localhost:3000/tasks')
    .then(response => {
      if (response.data) {
        context.commit('setTasks', response.data)
      }
    })
}
