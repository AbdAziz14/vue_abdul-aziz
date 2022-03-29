<template>
  <div class="about">
    <h1>Halaman Detail "{{ list.todo }}"</h1>
    <DetailTodo :deskripsi="list.description" @editDescription="editTodoDesc" />
  </div>
</template>

<script>
import DetailTodo from '@/components/DetailTodo.vue'

export default {
  name: 'todoDetailView',
  components: {
    DetailTodo
  },
  data () {
    return {
      idDetail: parseInt(this.$route.params.detailId),
      list: this.$store.state.todolist.todoListGlobal[parseInt(this.$route.params.detailId)]
    }
  },
  methods: {
    editTodoDesc (newDesc) {
      console.log(newDesc)
      this.$store.dispatch('todolist/editDesc', { id: this.idDetail, desc: newDesc })
    }
  }
}
</script>
