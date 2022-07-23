import { routes } from "@/router";
import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import { createRouter, createWebHistory } from "vue-router";
import ShowDetailsVue from "../ShowDetails.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

const mockedShow = {
  id: 1,
  name: "test",
  image: {
    original: "test",
  },
  type: "test",
  officialSite: "test",
  summary: "<p>test</p>",
};

describe("ShowDetail", () => {
  it("should render", () => {
    const wrapper = shallowMount(ShowDetailsVue, {
      propsData: {
        show: mockedShow,
        episodes: [],
      },
      global: {
        plugins: [router],
      },
    } as any);

    expect(wrapper.html()).toContain("test");
  });

  it("should not render episodes if empty", () => {
    const wrapper = shallowMount(ShowDetailsVue, {
      propsData: {
        show: mockedShow,
        episodes: [],
      },
      global: {
        plugins: [router],
      },
    } as any);

    expect(wrapper.html()).not.toContain("Episodes");
  });

  it("should route back on back button click", () => {
    const wrapper = shallowMount(ShowDetailsVue, {
      propsData: {
        show: mockedShow,
        episodes: [],
      },
      global: {
        plugins: [router],
      },
    } as any);

    wrapper.find('[data-testid="show-details-back-button"]').trigger("click");
    expect(router.currentRoute.value.fullPath).toBe("/");
  });
});
