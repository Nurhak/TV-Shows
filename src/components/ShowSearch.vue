<script lang="ts">
import { watch } from "vue";
import useDebouncedRef from "@/composables/useDebouncedRef";
import { XIcon } from "@heroicons/vue/solid";
import type { Context } from "vm";

export default {
  emits: ["search"],
  setup(_props: unknown, context: Context) {
    const query = useDebouncedRef("", 200);

    watch(query, (newQuery) => {
      context.emit("search", newQuery);
    });

    const reset = () => {
      query.value = "";
    };

    return {
      query,
      reset,
    };
  },
  components: {
    XIcon,
  },
};
</script>

<template>
  <div class="w-full h-full relative" data-testid="search">
    <input
      placeholder="Search your show..."
      type="text"
      v-model="query"
      :class="{
        'rounded-b-none outline-none border-none': query.length,
      }"
      class="w-full h-full text-lg pr-10 text-black border-none p-2 rounded-lg bg-white focus:border-yellow-500 focus:outline-2 focus:outline-yellow-500"
    />
    <div
      v-if="query"
      class="absolute w-6 h-auto top-8 right-3 cursor-pointer"
      @click="reset"
      data-testid="reset"
    >
      <XIcon name="search" class="text-slate-400" />
    </div>
  </div>
</template>
