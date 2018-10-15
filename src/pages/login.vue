<template>
  <div class="home">
    <form @submit.prevent="() => {}">
      <p>
        <vs-input class="inputx" vs-size="large" placeholder="メールアドレス" v-model="formData.email"/>
      </p>
      <p>
        <vs-input class="inputx" type="password" vs-size="large" placeholder="パスワード" v-model="formData.password"/>
      </p>
      <p style="text-align: right;">
        <vs-button color="primary" @click="login" vs-type="flat" type="button">Login</vs-button>
        <vs-button color="primary" @click="signup" vs-type="flat" type="button" style="margin-left: 16px;">Signup</vs-button>
      </p>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  layout: 'login',
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  mounted() {
    if (this.isLoggedIn) {
      this.$router.push('/mypage')
    }
  },
  methods: {
    async login() {
      await this.$store.dispatch('login', {...this.formData})
      if (this.isLoggedIn) {
        this.$vs.notify({
          title: 'ログイン成功',
          text: 'ログインに成功しました'
        })
        this.$router.push('/mypage')
      } else {
        this.$vs.notify({
          title: 'ログイン失敗',
          text: 'メールアドレスやパスワードが違います',
          color: 'danger'
        })
      }
    },
    async signup() {
      await this.$store.dispatch('login', {...this.formData})
      if (this.isLoggedIn) {
        this.$vs.notify({
          title: '登録成功',
          text: 'アカウント登録に成功しました'
        })
        this.$router.push('/mypage')
      } else {
        this.$vs.notify({
          title: '登録失敗',
          text: 'そのアドレスは既に登録されています',
          color: 'danger'
        })
      }
    }
  }
}
</script>

<style scoped>
.inputx {
  width: 360px;
}
</style>
