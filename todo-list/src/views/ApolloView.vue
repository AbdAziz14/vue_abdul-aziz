<template>
  <div class="about">
    <h1>Vue Apollo</h1>
    <div class="loader" v-if="loader"></div>
    <div v-if="!loader">
      <input type="text" v-model="search" placeholder="Search By ID">
      <ApolloQuery
        :query="search!==''?(gql => gql(`
        query MyQuery($id: Int!) {
          messages_messages_by_pk(id: $id) {
            id
            text
          }
        }
        `)) :  (gql => gql(`
        query MyQuery {
          messages_messages {
            id
            text
          }
        }
        `))"
        :variables="searchInComputed"
      >
        <template v-slot="{ result: { data, error } }">
          <div v-if="error">{{ error }}</div>
          <div v-else-if="data">
            <ol v-if="data.messages_messages" class="result apollo">
              <!-- <li v-for="message in data.messages_messages" :key="message.id">
                {{ message.text }}
              </li> -->
              <ApolloList v-for="message in data.messages_messages" :key="message.id" :todoList="message" @deleteRow="deleteMessage" @changeText="editMessage" />
            </ol>
            <ol v-else-if="data.messages_messages_by_pk">
              <li>{{ data.messages_messages_by_pk.text }}</li>
            </ol>
          </div>
          <div v-else>Loading</div>
        </template>
        <ApolloSubscribeToMore
          :document="gql => gql(`
            subscription MySubscription {
              messages_messages {
                id
                text
              }
            }
          `)"
          :updateQuery="onNewMessage"
        />
        <div class="todolist-form ">
          <input type="text" v-model="newMessage.text">
          <button @click="addMessage(newMessage.text)" :disabled="disabledInput === 1">
            Tambah
          </button>
        </div>
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import ApolloList from '@/components/ToDoListWithApollo.vue'

export default {
  name: 'ApolloPage',
  components: {
    ApolloList
  },
  data () {
    return {
      loader: false,
      search: '',
      disabledInput: 0,
      newMessage: {}
    }
  },
  computed: {
    searchInComputed () {
      console.log('Search computed :', this.search)
      if (this.search !== '') {
        return { id: this.search }
      }
      return {}
    }
  },
  methods: {
    onNewMessage (prev, { subscriptionData }) {
      return { messages_messages: subscriptionData.data.messages_messages }
    },
    async addMessage (inputText) {
      this.disabledInput = 1
      console.log(inputText)
      if (inputText !== '') {
        await this.$apollo.mutate({
          mutation: gql`
            mutation MyMutation($text: String) {
              insert_messages_messages(objects: {text: $text}) {
                returning {
                  text
                  id
                }
              }
            }
          `,
          variables: {
            text: inputText
          }
        })
        this.newMessage = {}
      }
      this.disabledInput = 0
    },
    async deleteMessage (idMessage) {
      this.loader = !this.loader
      await this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($id: Int!) {
            delete_messages_messages_by_pk(id: $id) {
              id
              text
            }
          }
        `,
        variables: {
          id: idMessage
        }
      })
      this.newMessage = {}
      this.loader = !this.loader
    },
    async editMessage (idMessage, newText) {
      this.loader = !this.loader
      console.log(idMessage)
      console.log(newText)
      await this.$apollo.mutate({
        mutation: gql`
          mutation MyMutation($id: Int!, $text: String) {
            update_messages_messages_by_pk(pk_columns: {id: $id}, _set: {text: $text}) {
              id
              text
            }
          }
        `,
        variables: {
          id: idMessage,
          text: newText
        }
      })
      this.newMessage = {}
      this.loader = !this.loader
    }
  }
}
</script>

<style scoped>
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
.todolist-form button:disabled {
  background-color: red;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  margin: auto;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}
/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
