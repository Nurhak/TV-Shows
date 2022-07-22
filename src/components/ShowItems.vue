<script lang="ts">
export default {
  props: {
    shows: {
      type: Array,
      required: false,
    },
    nextClicked: {
      type: Boolean,
      required: false,
    },
    prevClicked: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<template>
  <div
    :class="{
      'transition-all ease-linear translate-x-full': nextClicked || prevClicked,
    }"
    class="p-2 h-80 flex-1 max-w-sm rounded-md flex flex-col gap-2 justify-center items-center shadow-lg shadow-slate-400 relative cursor-pointer hover:scale-105 select-none"
    v-for="show in shows"
    :key="show.id"
  >
    <h2 class="text-lg text-center select-text">{{ show.name }}</h2>
    <img v-if="show.image" :alt="show.name" :src="show.image.medium" />
    <span
      class="absolute bottom-0 text-center text-sm bg-black bg-opacity-80 max-h-16 p-2 text-clip overflow-y-hidden select-text"
      v-html="show.summary"
    ></span>
  </div>
</template>
