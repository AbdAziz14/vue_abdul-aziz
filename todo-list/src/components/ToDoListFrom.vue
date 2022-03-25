<template>
  <div class="todolist-form">
    <input type="text" v-model="inputToDo" placeholder="Masukan Input To Do !" >
    <button @click="addInputToDo">Input</button>
    <p v-if="!inputToDo">Masukan Input Todo</p>
  </div>
</template>

<script>
export default {
  name: 'FormTodoList',
  data () {
    return {
      inputToDo: ''
    }
  },
  methods: {
    addInputToDo () {
      this.$emit('addInputToDoList', this.inputToDo)
      this.inputToDo = ''
    }
  }
}
</script>

<style scoped>
.todolist-form {
  width: 100%;
}
.todolist-form input {
  width: 80%;
  margin: 10px;
  padding: 12px 20px;
  box-sizing: border-box;
}
.todolist-form input:focus {
  border: 3px solid #97DBAE;
}
.todolist-form button {
  background-color: #04AA6D;
  border: none;
  color: white;
  padding: 16px 32px;
  text-decoration: none;
  margin: 10px;
  cursor: pointer;
}
.todolist-form p {
  text-align: center;
}
</style>
