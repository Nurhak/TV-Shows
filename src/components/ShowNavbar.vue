<script setup lang="ts"></script>

<template>
  <navbar class="w-full bg-yellow-300 p-2 flex">
    <router-link :to="{ name: 'home' }">
      <img
        data-testid="logo"
        src="../assets/logo.png"
        class="w-10 md:w-20 h-auto"
        alt="logo"
      />
    </router-link>
    <div class="flex-1"></div>
  </navbar>
</template>
