<template>
    <div id="app">
        
        <div class="todo-component-wrapper">
            <h1>To Do List</h1>
            <ol>
                <ToDoListItem 
                    v-for="(item, index ) in itemTodoList" 
                    :key="index" 
                    :title="item.todo" 
                    :id="index"
                    :edit="item.edit" 
                    @HapusItemList="deleteItemList"
                    @EditItemList="editItemList"
                    @EditItemList2="editItemList2"
                />
            </ol>

            <ToDoListForm 
                :message="message"
                @addItemToDo="addItemToList" 
            />
            
        </div>

    </div>
</template>

<script>
import ToDoListForm from '@/components/TodoListForm.vue';
import ToDoListItem from '@/components/ToDoListItem.vue';

export default {
    name: 'App',
    components: {
        ToDoListForm,
        ToDoListItem
    },
    data() {
        return {
            message : '',
            itemTodoList: [],
        }
    },
    methods: {
        addItemToList: function(itemToDo){
            if(itemToDo !== ''){
                this.itemTodoList.push({ todo: itemToDo, edit: 0 })
            }else{
                this.message = "Masukan Inputan To Do !!"
            }
        },
        deleteItemList: function(id){
            this.itemTodoList.splice(id, 1);
        },
        editItemList: function(id){
            this.itemTodoList.filter(function(value, index){
                if(index == id){
                    if(value.edit === 0){
                        return value.edit = 1;
                    }else{
                        return value.edit = 0;
                    }
                }
            })
        },
        editItemList2: function(id, newtodo){
            this.itemTodoList.filter(function(value, index){
                if(index == id){
                    if(value.edit === 1){
                        return value.todo = newtodo;
                    }
                }
            })
            this.editItemList(id);
        }
    },
}
</script>

<style scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
