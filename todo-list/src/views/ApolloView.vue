<template>
  <div class="about">
    <h1>Vue Apollo</h1>
    <div>
      <input type="text" v-model="search" placeholder="Search">
      <!-- <button>
        Send
      </button> -->
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
            <!-- <div>Aada isinya</div> -->
            <ol v-if="data.messages_messages">
              <li v-for="message in data.messages_messages" :key="message.id">
                {{ message.text }}
              </li>
            </ol>
            <ol v-else-if="data.messages_messages_by_pk">
              <li>{{ data.messages_messages_by_pk.text }}</li>
            </ol>
          </div>
          <div v-else>Loading</div>
        </template>
        <!-- <ApolloSubscriveToMore
          :document="gpl => gpl(`
            subscription MySubscription {
              messages_messages {
                id
                text
              }
            }
          `)"
          :updateQuery="onNewMessage"
        /> -->
      </ApolloQuery>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApolloPage',
  data () {
    return {
      search: '',
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
    }
  }
}
</script>
