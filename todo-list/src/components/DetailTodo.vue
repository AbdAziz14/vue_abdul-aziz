<template>
  <div class="todo-detail">
    <button @click="goBack()">Kembali</button><br>
    <h2 v-if="isEdit === false">Detail : {{ deskripsi }}</h2>
    <button v-if="isEdit === false" @click="editDesc">Edit Deskirpsi</button>
    <br>
    <input v-if="isEdit === true" type="text" ref="inputedit" v-bind:value="deskripsi">
    <button v-if="isEdit === true" @click="editNewDesc">Kirim</button>
  </div>
</template>

<script>
export default {
  name: 'DetailTodo',
  props: {
    deskripsi: String
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    editDesc () {
      this.isEdit = true
    },
    editNewDesc () {
      this.isEdit = false
      this.$emit('editDescription', this.$refs.inputedit.value)
    }
  }
}
</script>
