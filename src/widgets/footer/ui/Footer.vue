<script setup lang="ts">
import { auth } from '@entities/auth'
</script>

<template>
  <div class="footer" v-if="auth.state.value === true">
    footer widget auth
  </div>
  <div class="footer" v-else>
    foote eidget unAuth
  </div>
</template>

<style scoped>
.footer {
  flex: 1;

  display: flex;
  border: solid 1px red;
  padding: 8px;

  justify-content: center;
  align-items: center;

  font-size: 64px;
}
</style>