<template>
  <div class="layout">
    <router-view/>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 960px;
  margin: 60px auto 0;
  padding: 16px;
}
</style>
