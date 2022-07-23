<script setup lang="ts">
import type { Episode } from "@/data/Episode";
const props = defineProps<{
  episode: Episode;
}>();
</script>

<template>
  <div class="flex-1 w-full h-full">
    <a
      target="_blank"
      rel="noopener noreferrer"
      :href="props.episode.url"
      class="group border-2 border-slate-500 rounded-lg p-2 mr-2 w-full h-full flex flex-row min-h-[100px]"
    >
      <div class="basis-1/3">
        <img
          v-if="props.episode.image"
          class="rounded-sm shadow-lg shadow-slate-400"
          :alt="props.episode.name"
          :src="props.episode.image.medium"
        />
        <div
          v-else
          class="w-auto h-full mr-5 bg-slate-400 flex items-center justify-center text-sm text-center"
        >
          {{ props.episode.name }}
        </div>
      </div>
      <div class="basis-2/3 pr-3 ml-3">
        <h2 class="font-semibold mb-1 group-hover:underline">
          {{ props.episode.name }}
        </h2>
        <span
          class="text-sm font-light max-w-xs"
          v-html="props.episode.summary"
        ></span>
      </div>
    </a>
  </div>
</template>
