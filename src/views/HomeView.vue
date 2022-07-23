<script setup lang="ts">
import ShowSearchVue from "@/components/ShowSearch.vue";
import type { Show } from "@/data/Show";
import { fetchRandomShows, mapShowsToGenres } from "@/helpers/fetchShows";
import {
  fetchShowsBySearchQuery,
  type SearchResult,
} from "@/helpers/fetchShowsBySearchQuery";
import { computed, onMounted, ref, type Ref } from "vue";
import ShowSection from "../components/ShowSection.vue";
import SearchResults from "../components/SearchResults.vue";

const SEARCH_RESULTS_LIMIT = 3;

const searchShows = ref<SearchResult[]>([]);
const isSearching = ref(false);
const shows: Ref<Show[]> = ref([]);
const isLoading: Ref<boolean> = ref(true);
onMounted(async () => {
  shows.value = await fetchRandomShows();
  isLoading.value = false;
});
const genres = computed(() => mapShowsToGenres(shows.value));
const shuffle = async () => {
  if (isLoading.value) return;
  isLoading.value = true;
  shows.value = await fetchRandomShows(true);
  isLoading.value = false;
};

const search = async (query: string) => {
  if (isLoading.value) return;
  if (query.length === 0) {
    searchShows.value = [];
    return;
  }
  isSearching.value = true;
  searchShows.value = (await fetchShowsBySearchQuery(query)).slice(
    0,
    SEARCH_RESULTS_LIMIT
  );
  isSearching.value = false;
};
</script>
<template>
  <div class="flex flex-col w-full h-full text-6xl">
    <div class="w-full flex justify-center items-center gap-5">
      <div
        class="w-full h-full max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg relative z-50"
      >
        <ShowSearchVue @search="search" />
        <SearchResults
          v-if="searchShows.length"
          :results="searchShows"
          :isSearching="isSearching"
        />
      </div>
      <div
        class="h-full flex items-center mt-6 cursor-pointer hover:text-slate-200"
      >
        <strong class="text-lg select-none" @click="shuffle">Shuffle</strong>
      </div>
    </div>
    <div class="flex-1 w-full h-full flex justify-center items-center mt-5">
      <div class="w-full h-full p-5 flex flex-col gap-10">
        <ShowSection
          :isLoading="isLoading"
          v-for="genre in Object.keys(genres)"
          :key="genre"
          :genre="genre"
          :shows="genres[genre]"
        />
      </div>
    </div>
  </div>
</template>
