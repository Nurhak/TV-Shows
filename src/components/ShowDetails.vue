<script setup lang="ts">
import type { Episode } from "@/data/Episode";
import type { Show } from "@/data/Show";
import EpisodeItem from "./EpisodeItem.vue";
import ShowBreadcrumb from "./ShowBreadcrumb.vue";
const props = defineProps<{
  show: Show;
  episodes: Episode[];
}>();
</script>

<template>
  <div class="mt-5 ml-5">
    <ShowBreadcrumb :show-name="props.show.name" />
  </div>
  <div
    class="flex flex-col justify-center items-center xl:items-start xl:flex-row w-full h-full p-5 gap-5"
  >
    <div class="max-w-sm">
      <img
        class="rounded-sm shadow-lg shadow-slate-400"
        :alt="props.show.name"
        :src="props.show.image.original"
      />
    </div>
    <div class="flex flex-col gap-5 mr-10 justify-center items-center">
      <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold">
        {{ props.show.name }}
      </h1>
      <span
        >{{ props.show.type }} |
        <a class="hover:underline" :href="props.show.officialSite">
          {{ props.show.officialSite }}</a
        >
      </span>
      <span class="max-w-lg" v-html="props.show.summary"></span>
    </div>
    <div
      v-if="episodes.length"
      class="flex flex-col gap-5 flex-1 overflow-y-auto mt-5 max-w-md"
    >
      <h1 class="text-xl sm:text-2xl font-bold">Episodes</h1>
      <EpisodeItem
        v-for="episode in props.episodes"
        :episode="episode"
        :key="episode.id"
      />
    </div>
  </div>
</template>
