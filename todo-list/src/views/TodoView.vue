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
      ListTaskToDo: [{ todo: 'test', isEdit: 0 }]
    }
  },
  methods: {
    addInputToList (taskTodo) {
      if (taskTodo !== '') {
        this.ListTaskToDo.push({ todo: taskTodo, isEdit: 0 })
      }
    },
    deleteItemList (id) {
      this.ListTaskToDo.splice(id, 1)
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
    }
  }
}
</script>

<style scoped>
ol {
  text-align: left;
}
</style>
