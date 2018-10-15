<template>
  <div>
    <vs-card>
      <form @submit.prevent="publish" style="padding: 10px;">
        <p>
          <vs-input class="inputx" vs-size="large" placeholder="title" v-model="formData.title"/>
        </p>
        <p>
          <vs-textarea class="inputx" vs-size="large" placeholder="body" v-model="formData.body"/>
        </p>
        <p style="text-align: right;margin-bottom:20px;">
          <vs-button color="primary">Publish</vs-button>
        </p>
      </form>
    </vs-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      formData: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    async publish() {
    }
  }
}
</script>

<style scoped>
.inputx {
  width: 100%;
  background: #fff;
}
</style>
