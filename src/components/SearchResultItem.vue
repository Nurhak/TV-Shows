<script setup lang="ts">
import type { Show } from "@/data/Show";
const props = defineProps<{
  show: Show;
}>();
</script>

<template>
  <router-link
    :to="{
      name: 'showDetails',
      params: {
        id: show.id,
      },
    }"
  >
    <div
      class="flex flex-row gap-2 items-start text-black hover:bg-slate-200 p-5"
    >
      <div class="min-w-[50px]">
        <img
          v-if="props.show.image"
          :src="props.show.image.medium"
          class="w-14 h-auto rounded-lg"
        />
        <div v-else class="w-14 h-20 rounded-lg bg-gray-400"></div>
      </div>
      <div class="flex-1 text-base flex items-center h-full m-auto">
        {{ props.show.name }}
      </div>
    </div>
  </router-link>
</template>
