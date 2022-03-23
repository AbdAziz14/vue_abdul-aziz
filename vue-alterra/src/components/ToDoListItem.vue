<template>
    <li class="todolist-item">
        <div class="label-group">
            <label v-if="edit === 0">
                {{ title }}
            </label>
            <label v-if="edit === 1">
                <input type="text" ref="inputedit" v-bind:value="title">
            </label>
        </div>
        <div class="button-group">
            <button v-if="edit === 0" class="edit" @click="editItemList(id)">Edit</button>
            <button v-if="edit === 1" class="edit" @click="editItemList2(id)">Masukan Edit</button>
            <button class="delete" @click="deleteItemList(id)">Hapus</button>
        </div>
    </li>
</template>

<script>
export default {
    name: 'ToDoListItem',
    data() {
        return {
            inputedit: ''
        }
    },
    props:{
        title: String,
        id   : Number,
        edit : Number,
    },
    methods: {
        deleteItemList(listIndex){
            this.$emit('HapusItemList', listIndex);
        },
        editItemList(listIndex){
           this.$emit('EditItemList', listIndex);
        },
        editItemList2(listIndex){
            this.$emit('EditItemList2', listIndex, this.$refs.inputedit.value);
        }
    },
}
</script>

<style>
.todolist-item {
    padding: 20px;
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
    /* margin: 10px; */
    padding: 8px 16px;
    box-sizing: border-box;
}
.todolist-item .button-group {
  float: left;
  text-align: right;
  width: 60%;
}
</style>