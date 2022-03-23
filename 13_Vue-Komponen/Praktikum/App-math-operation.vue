<template>
    <div id="app">
        <div class="math-wrapper">
            <MathOperation 
                :resultmath="resultmath" 
                :mathoperation="mathops" 
                @matematika="mathOperation"
            />
        </div>
    </div>
</template>

<script>
import { penambahan,pengurangan,perkalian,pembagian } from '@/utils/math.js';
import MathOperation from '@/components/MathOperation.vue';

export default {
    name: 'App',
    components: {
        MathOperation,
    },
    data() {
        return {
            resultmath: 0,
            operation: '',
            mathops: '',
            itemTodoList: [],
        }
    },
    methods: {
        mathOperation: function(operationMath, varx, vary){

            console.log(operationMath, varx, vary)
        
            if(operationMath == "tambah"){
                this.resultmath = penambahan(varx, vary);
            }

            if(operationMath == "kurang"){
                this.resultmath = pengurangan(varx, vary);
            }
            
            if(operationMath == "kali"){
                this.resultmath = perkalian(varx, vary);
            }

            if(operationMath == "bagi"){
                this.resultmath = pembagian(varx, vary);
            }
            
            this.mathops = operationMath;
        },
    },
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
</style>
