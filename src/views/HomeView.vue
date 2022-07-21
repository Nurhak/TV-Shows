<script setup lang="ts">
import { getReq } from "@/lib/fetch";
import { onBeforeMount } from "vue";

onBeforeMount(() => {
  getReq("search/shows?q=girls").then((res) => {
    console.log(res);
  });
});
</script>

<template>
  <div class="flex justify-center items-center w-full h-full text-6xl">
    HOME
  </div>
</template>
