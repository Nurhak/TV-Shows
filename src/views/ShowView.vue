<script setup lang="ts">
import ShowDetailsVue from "@/components/ShowDetails.vue";
import type { Episode } from "@/data/Episode";
import type { Show } from "@/data/Show";
import { fetchEpisodes } from "@/helpers/fetchEpisodes";
import { fetchShowDetails } from "@/helpers/fetchShowDetails";
import logger, { LogType } from "@/lib/logger";
import type { AxiosError } from "axios";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const showDetails = ref<Show | null>(null);
const episodes = ref<Episode[]>([]);

onMounted(async () => {
  try {
    showDetails.value = await fetchShowDetails(route.params.id as string);
    episodes.value = await fetchEpisodes(route.params.id as string);
  } catch (e: unknown) {
    logger.log((e as AxiosError).message, LogType.ERROR);
  }
});
</script>
<template>
  <ShowDetailsVue v-if="showDetails" :show="showDetails" :episodes="episodes" />
</template>
