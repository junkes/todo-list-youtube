import axios from 'axios'
export function setTasks (context) {
  axios.get('http://localhost:3000/tasks')
    .then(response => {
      if (response.data) {
        context.commit('setTasks', response.data)
      }
    })
}

export function newTask (context, data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.post('http://localhost:3000/tasks', data, config)
    .then(response => {
      if (response.data) {
        // context.commit('setTasks', response.data)
      }
    })
}

export function updateTask (context, data) {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  axios.put(`http://localhost:3000/tasks/${data.id}`, data, config)
    .then(response => {
      if (response.data) {
        // context.commit('setTasks', response.data)
      }
    })
}

export function getTask (context, data) {
  axios.get(`http://localhost:3000/tasks/${data.id}`)
    .then(response => {
      if (response.data) {
        context.commit('setTask', response.data)
      }
    })
}

export function deleteTask (context, data) {
  axios.delete(`http://localhost:3000/tasks/${data.id}`)
    .then(response => {
      if (response.status === 204) {
        context.dispatch('main/setTasks', null, { root: true })
      }
    })
}
