<template>
    <div class="todolist-form">
        <input type="text" v-model="inputtodo" placeholder="Masukan to do">
        <button @click="addInputToDo">Tambahkan</button>
        <p v-if="!inputtodo">{{ message }}</p>
    </div>
</template>

<script>
export default {
    name: 'ToDoListForm',
    data() {
        return {
            inputtodo: '',
        }
    },
    props: {
        message: String
    },
    methods: {
        addInputToDo(){
            this.$emit('addItemToDo', this.inputtodo)
            this.inputtodo = '';
        }
    },
}
</script>

<style>
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