<script setup lang="ts">
import AuthButton from '@features/auth/';
</script>

<template>
  <div class="header">
    header widget
    <AuthButton />
  </div>
</template>

<style scoped>
.header {
  flex: 1;

  display: flex;
  border: solid 1px red;
  padding: 8px;

  justify-content: center;
  align-items: center;

  font-size: 64px;
}
</style>