<template>
  <li class="todolist-item">
    <div class="label-group">
      <label v-if="todoList.isEdit === 0">
        {{ todoList.todo }}
      </label>
      <label v-if="todoList.isEdit === 1">
        <input type="text" ref="inputedit" v-bind:value="todoList.todo ">
      </label>
    </div>
    <div class="button-group">
      <button v-if="todoList.isEdit === 0" class="edit" @click="editItemList(id)">Edit</button>
      <button v-if="todoList.isEdit === 1" class="edit" @click="editItemListNew(id)">Masukan Edit</button>
      <button class="delete" @click="deleteItemList(id)">Hapus</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'ListTaskToDo',
  props: {
    todoList: Object,
    id: Number
  },
  methods: {
    deleteItemList (listIndex) {
      this.$emit('HapusItemList', listIndex)
    },
    editItemList (listIndex) {
      this.$emit('EditItemList', listIndex)
    },
    editItemListNew (listIndex) {
      this.$emit('EditItemListNew', listIndex, this.$refs.inputedit.value)
    }
  }
}
</script>

<style scoped>
.todolist-item {
  padding: 20px;
  width: 85%;
  margin: auto;
}
.todolist-item label{
  margin: 10px;
  padding: 10px;
}
.todolist-item button{
  margin-right: 10px;
  border: none;
  color: white;
  padding: 10px;
}
.todolist-item .delete{
  background-color: #C74B50;
}
.todolist-item .edit{
  background-color: #4D77FF;
}
.todolist-item .label-group {
  float: left;
  width: 25%;
}
.todolist-item .label-group input{
  width: 100%;
  padding: 8px 16px;
  box-sizing: border-box;
}
.todolist-item .button-group {
  float: left;
  text-align: right;
  width: 60%;
}
</style>
