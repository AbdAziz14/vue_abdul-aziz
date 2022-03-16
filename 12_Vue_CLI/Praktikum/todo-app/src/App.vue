<template>
    <img alt="Vue logo" src="./assets/logo.png">

    <div class="todo-wrapper">
        <ol>
            <li v-for="todo in toDoList" :key="todo" >
                {{ todo }}
            </li>
        </ol>

        <input type="text" v-model="task">
        <button @click="addTask">Tambahkan</button>

        <p>{{ message }}</p>
    </div>
    
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            message: '',
            toDoList: [],
            task: '',
        }
    },
    methods: {
        addTask: function(){
            
            if(this.task){
                if(this.toDoList.length < 4){
                    this.toDoList.push(this.task);
                    this.task = "";
                }else{
                    this.message = "Hebat!";
                }
            }else{
                this.message = "Masih Kosong!";
            }

        }
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

.todo-wrapper {
    width: 50%;
    margin: auto;
}

.todo-wrapper ol {
    list-style-position: inside;
}

</style>
