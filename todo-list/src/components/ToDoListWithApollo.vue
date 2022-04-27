<template>
  <div>
    <li class="todolist-item">
      <div class="label-group">
        <label v-if="!isEdit">
          {{ todoList.text }}
        </label>
        <label v-if="isEdit">
          <input type="text" ref="inputedit" v-bind:value="todoList.text">
        </label>
      </div>
      <div class="button-group">
        <button v-if="!isEdit" class="edit" @click="editIsEdit">Edit</button>
        <button v-if="isEdit" class="edit" @click="editWithInput(todoList.id)">Masukan Edit</button>
        <button class="delete" @click="deleteItem(todoList.id)">Hapus</button>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'ApolloList',
  props: {
    todoList: Object
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    editIsEdit () {
      this.isEdit = !this.isEdit
    },
    editWithInput (listIndex) {
      this.editIsEdit()
      this.$emit('changeText', listIndex, this.$refs.inputedit.value)
    },
    deleteItem (listIndex) {
      this.$emit('deleteRow', listIndex)
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
