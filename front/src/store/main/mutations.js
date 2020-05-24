export function setTasks (state, data) {
  state.tasks = data
}

export function setTask (state, data) {
  if (data.length) state.task = data[0]
}
