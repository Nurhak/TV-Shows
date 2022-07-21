<script setup lang="ts">
import { RouterView } from "vue-router";
import ShowNavbarVue from "./components/ShowNavbar.vue";
</script>

<template>
  <main class="w-full h-full flex flex-col">
    <ShowNavbarVue />
    <RouterView />
  </main>
</template>
