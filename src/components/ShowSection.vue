<script lang="ts">
import type { Show } from "@/data/Show";
import { computed } from "vue";
import { ref } from "vue";
import ShowItems from "./ShowItems.vue";
import useBreakpoints from "@/composables/useBreakpoints";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  props: {
    genre: {
      type: String,
      required: true,
    },
    shows: {
      type: Array,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
  },
  setup: (props: {
    genre: string;
    shows: Show[];
    showSize: number;
    isLoading: boolean;
  }) => {
    const index = ref(0);
    const nextClicked = ref(false);
    const prevClicked = ref(false);
    const { width } = useBreakpoints();
    const showSize = computed(() => {
      return Math.floor(width.value / 300) ? Math.floor(width.value / 300) : 1;
    });
    const shows = computed(() => {
      return props.shows.slice(index.value, index.value + showSize.value);
    });

    const next = () => {
      nextClicked.value = true;
      index.value += showSize.value;
      nextClicked.value = false;
    };

    const previous = () => {
      prevClicked.value = true;
      index.value -= showSize.value;
      prevClicked.value = false;
    };

    return {
      index,
      next,
      previous,
      showSize,
      slicedShows: shows,
      nextClicked,
      prevClicked,
    };
  },
  components: { ShowItems, ChevronLeftIcon, ChevronRightIcon },
};
</script>

<template>
  <div class="flex flex-col overflow-x-auto p-2 overflow-y-hidden">
    <h1 class="text-2xl font-bold mb-5 sticky left-0 select-none">
      {{ genre }}
    </h1>
    <div v-if="isLoading" class="flex flex-row gap-5 p-5 justify-start">
      <div
        v-for="index in showSize"
        :key="index"
        class="w-80 h-80 bg-slate-500 animate-pulse"
      ></div>
    </div>
    <div v-if="!isLoading" class="flex flex-row gap-5 p-5 justify-start">
      <div
        @click="previous"
        v-if="index > 0"
        data-testid="previous"
        class="flex-1 flex cursor-pointer justify-center items-center max-w-[50px] hover:bg-slate-300 hover:bg-opacity-70 transition-colors ease-in-out duration-200 rounded-sm"
      >
        <ChevronLeftIcon class="w-16 h-16 fill-white hover:text-purple-500" />
      </div>
      <ShowItems
        :shows="slicedShows"
        :nextClicked="nextClicked"
        :prevClicked="prevClicked"
      />
      <div
        v-if="shows.length !== index && slicedShows.length == showSize"
        @click="next"
        data-testid="next"
        class="flex-1 cursor-pointer flex justify-center items-center max-w-[50px] hover:bg-slate-300 hover:bg-opacity-70 transition-colors ease-in-out duration-200 rounded-sm"
      >
        <ChevronRightIcon class="w-16 h-16 fill-white" />
      </div>
    </div>
  </div>
</template>
