<template>
  <div>
    <vs-row vs-w="12" class="mypage">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="1" vs-xs="12" />
      <vs-col vs-type="flex" vs-justify="center" style="flex-direction: column" vs-direction="column" vs-align="center" vs-lg="10" vs-sm="10" vs-xs="12">
        <vs-card style="margin-bottom: 32px;">
          <div slot="header">
            <h3>
              Hello world !
            </h3>
          </div>
          <div>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <FavoriteButton :isLiked="isLiked" @click="like" />
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-lg="1" vs-sm="1" vs-xs="12" />
    </vs-row>
  </div>
</template>

<script>
import FavoriteButton from '../../components/FavoriteButton.vue'

export default {
  components: {
    FavoriteButton
  },
  data() {
    return {
      isLiked: false
    }
  },
  methods: {
    like() {
      this.isLiked = true
    }
  }
}
</script>

<style scoped>
.mypage .vs-sidebar-background {
  display: none;
}
</style>
