import { afterEach, describe, it, expect } from "vitest";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";
import { shallowMount } from "@vue/test-utils";
import ShowSectionVue from "../ShowSection.vue";
import { vi } from "vitest";

vi.mock("@/composables/useBreakpoints", () => {
  const useBreakpoints = vi.fn(() => {
    return {
      width: 300,
      type: "xs",
    };
  });
  return { default: useBreakpoints };
});

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("ShowSection", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render", () => {
    const wrapper = shallowMount(
      ShowSectionVue as any,
      {
        propsData: {
          shows: [],
          genre: "test",
          isLoading: false,
        },
        global: {
          plugins: [router],
        },
      } as any
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render with shows", () => {
    const wrapper = shallowMount(
      ShowSectionVue as any,
      {
        propsData: {
          shows: [{ id: 1, name: "test" }],
          genre: "test",
          isLoading: false,
        },
        global: {
          plugins: [router],
        },
      } as any
    );
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should next and back button not exist", () => {
    const wrapper = shallowMount(
      ShowSectionVue as any,
      {
        propsData: {
          shows: [],
          genre: "test",
          isLoading: false,
        },
        global: {
          plugins: [router],
        },
      } as any
    );
    expect(wrapper.find('[data-testid="next"]').exists()).toBe(false);
    expect(wrapper.find('[data-testid="previous"]').exists()).toBe(false);
  });

  it("should slide on next click", () => {
    const wrapper = shallowMount(
      ShowSectionVue as any,
      {
        propsData: {
          shows: [
            { id: 1, name: "test" },
            { id: 2, name: "test" },
            { id: 3, name: "test" },
          ],
          genre: "test",
          isLoading: false,
        },
        global: {
          plugins: [router],
        },
      } as any
    );
    const nextSpy = vi.spyOn(wrapper.vm, "next" as any);
    wrapper.find('[data-testid="next"]').trigger("click");
    expect(nextSpy).toHaveBeenCalled();
  });
});
