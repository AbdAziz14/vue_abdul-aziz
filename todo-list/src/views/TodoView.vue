<template>
  <div class="todo-wrapper">
    <h1>This is an To Do List page</h1>
    <ol>
      <ListTaskToDo v-for="(item, index ) in ListTaskToDo" :key="index" :todoList="item" :id="index" @HapusItemList="deleteItemList" @EditItemList="editItemList" @EditItemListNew="editItemListNew"  />
    </ol><br>
    <FormTodoList @addInputToDoList="addInputToList" />
  </div>
</template>

<script>
import ListTaskToDo from '@/components/ToDoListItem.vue'
import FormTodoList from '@/components/ToDoListFrom.vue'

export default {
  name: 'TodoView',
  components: {
    ListTaskToDo,
    FormTodoList
  },
  data () {
    return {
      ListTaskToDo: []
    }
  },
  created () {
    this.ListTaskToDo = this.$store.state.todolist.todoListGlobal
  },
  methods: {
    addInputToList (taskTodo) {
      if (taskTodo !== '') {
        this.$store.dispatch('todolist/addNewTask', taskTodo)
        this.getGlobalTodoListState()
      }
    },
    deleteItemList (id) {
      this.$store.dispatch('todolist/deleteTask', id)
      this.getGlobalTodoListState()
    },
    editItemList (id) {
      this.ListTaskToDo.filter(function (value, index) {
        if (index === id) {
          if (value.isEdit === 0) {
            value.isEdit = 1
          } else {
            value.isEdit = 0
          }
        }
        return value
      })
      this.$store.dispatch('todolist/editTask', this.ListTaskToDo)
      this.getGlobalTodoListState()
    },
    editItemListNew (id, newtodo) {
      this.ListTaskToDo.filter(function (value, index) {
        if (index === id) {
          if (value.isEdit === 1) {
            value.todo = newtodo
          }
        }
        return value
      })
      this.editItemList(id)
    },
    getGlobalTodoListState () {
      this.ListTaskToDo = this.$store.state.todolist.todoListGlobal
    }
  }
}
</script>

<style scoped>
ol {
  text-align: left;
}
</style>
