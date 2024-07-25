<script setup lang="ts">
import { auth } from '@entities/auth';
</script>

<template>
  <button v-if="auth.state.value === true" @click="auth.setLogOut">
    auth
  </button>
  <button v-else @click="auth.setLogIn">
    auth
  </button>
</template>

<style scoped>
.auth-button {
  border: solid 4px gray;
}
</style>