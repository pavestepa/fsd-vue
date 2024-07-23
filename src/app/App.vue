<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from "@widgets/header"
import Footer from '@widgets/footer';

</script>

<template>
  <div>
    <Header/>
    <RouterView/>
    <Footer/>
  </div>
</template>

<style scoped>
  @import 'index.css'
</style>