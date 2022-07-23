<script setup lang="ts">
import type { SearchResult } from "@/helpers/fetchShowsBySearchQuery";
import SearchResultItem from "./SearchResultItem.vue";

const props = defineProps<{
  results: SearchResult[];
  isSearching: boolean;
}>();
</script>

<template>
  <div
    class="absolute bg-white w-full max-w-xs sm:max-w-screen-sm lg:max-w-screen-lg rounded-b-lg -mt-1"
  >
    <ul>
      <li
        class="mb-2 last:mb-0"
        v-for="result in props.results"
        :key="result.show.id"
      >
        <SearchResultItem :show="result.show" />
      </li>
    </ul>
  </div>
</template>
