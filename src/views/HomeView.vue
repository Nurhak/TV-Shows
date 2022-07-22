<script setup lang="ts">
import ShowSearchVue from "@/components/ShowSearch.vue";
import { fetchRandomShows, mapShowsToGenres } from "@/helpers/fetchShows";
import { computed } from "vue";
import ShowSection from "../components/ShowSection.vue";

const { shows, isLoading, error } = fetchRandomShows();
const genres = computed(() => mapShowsToGenres(shows.value));

const log = (val: any) => console.log(val);
</script>
<template>
  <div class="flex flex-col w-full h-full text-6xl">
    <div class="w-full flex justify-center items-center">
      <div class="w-full h-full max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg">
        <ShowSearchVue @search="log" />
      </div>
    </div>
    <div class="flex-1 w-full h-full flex justify-center items-center mt-5">
      <div class="w-full h-full p-5 flex flex-col gap-10">
        <ShowSection
          v-for="genre in Object.keys(genres)"
          :key="genre"
          :genre="genre"
          :shows="genres[genre]"
        />
      </div>
    </div>
  </div>
</template>
