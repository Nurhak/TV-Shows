import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import ShowNavbarVue from "../ShowNavbar.vue";

import { createRouter, createWebHistory } from "vue-router";
import { routes } from "@/router";

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

describe("ShowNavbar", () => {
  it("renders properly", () => {
    const wrapper = mount(ShowNavbarVue);
    expect(wrapper.find('[data-testid="logo"]')).toBeTruthy();
  });

  it("routes to / on click of logo", async () => {
    const wrapper = mount(ShowNavbarVue, {
      global: {
        plugins: [router],
      },
    });
    await wrapper.get("img").trigger("click");
    expect(router.currentRoute.value.fullPath).toBe("/");
  });
});
