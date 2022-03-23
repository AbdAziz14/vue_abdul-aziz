<template>
    <div class="test-wrapper">
        <input type="number" v-model.number="variabelSatu">
        <input type="number" v-model.number="variabelDua">
        <br>
        <select v-model="selectOperation">
            <option value="tambah">Pertambahan</option>
            <option value="kurang">Pengurangan</option>
            <option value="kali">Perkalian</option>
            <option value="bagi">Pembagian</option>
        </select>
        <button @click="runMath">
            Lakukan Operasi Matematika
        </button>
        <p>Hasil : {{ resultmath }} dari operasi {{ mathoperation }} </p>
    </div>
</template>

<script>
export default {
    name: 'MathOperation',
    data() {
        return {
            variabelSatu: 0,
            variabelDua: 0,
            selectOperation: '',
        }
    },
    props: {
        resultmath: Number,
        mathoperation: String,
    },
    methods: { 
        runMath(){
            this.$emit("matematika", this.selectOperation , this.variabelSatu, this.variabelDua);
        }
    },
    computed: {

    }
}
</script>