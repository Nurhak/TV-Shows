import { describe, expect, it } from "vitest";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { shallowMount } from "@vue/test-utils";
import ShowItemsVue from "../ShowItems.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("ShowItems", () => {
  it("should render", () => {
    const wrapper = shallowMount(ShowItemsVue, {
      props: {
        shows: [
          {
            id: "1",
            name: "test",
            summary: "test",
            image: {
              medium: "test",
            },
          },
        ],
        nextClicked: false,
        prevClicked: false,
      },
      global: {
        plugins: [router],
      },
    });
    expect(wrapper.find("div")).toBeTruthy();
  });
});
