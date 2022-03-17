<template>
    <div id="app">
        <div class="todo-wrapper">
            <ol>
                <li v-for="todo in toDoList" :key="todo" >
                    {{ todo }}
                </li>
            </ol>

            <input type="text" v-model="task">
            <button @click="addTask">Tambahkan</button>

            <p v-if="limit === true">{{ message }}</p>
        </div>
    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
        return {
            message: 'Hebat!!',
            toDoList: [],
            limit: false,
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
                    this.limit = true;
                }
            }
        }
    },
  components: {
    
  }
}
</script>

<style scoped>
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
