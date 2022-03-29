const state = () => ({
  todoListGlobal: [{ todo: 'Belajar Vuex', isEdit: 0, description: 'Test' }]
})

const mutations = {
  setTodoGlobal (state, object) {
    state.todoListGlobal = object
  }
}

const actions = {
  addNewTask (store, param) {
    const temp = [...this.state.todolist.todoListGlobal]
    temp.push({ todo: param, isEdit: 0, description: '-' })
    console.log(temp)
    store.commit('setTodoGlobal', temp)
  },
  deleteTask (store, indexList) {
    const temp = [...this.state.todolist.todoListGlobal]
    temp.splice(indexList, 1)
    store.commit('setTodoGlobal', temp)
  },
  editTask (store, object) {
    const temp = object
    store.commit('setTodoGlobal', temp)
  },
  editDesc (store, param) {
    const temp = [...this.state.todolist.todoListGlobal]
    temp.filter(function (value, index) {
      if (index === param.id) {
        value.description = param.desc
      }
      return value
    })
    store.commit('setTodoGlobal', temp)
  }
}

export default {
  state,
  mutations,
  actions
}
