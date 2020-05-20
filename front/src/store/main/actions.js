import axios from 'axios'
export function setTasks (context) {
  axios.get('http://localhost:3000/tasks')
    .then(response => {
      if (response.data) {
        context.commit('setTasks', response.data)
      }
    })
}

export function setTask (context, data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.post('http://localhost:3000/tasks', data, config)
    .then(response => {
      if (response.data) {
        context.commit('setTasks', response.data)
      }
    })
}
