import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { mount } from "@vue/test-utils";
import ShowSearchVue from "../ShowSearch.vue";

describe("ShowSearch", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should render search", () => {
    const wrapper = mount(ShowSearchVue);
    expect(wrapper.find('[data-testid="search"]')).toBeTruthy();
  });

  it("should emit search event with debounce", async () => {
    const wrapper = mount(ShowSearchVue);
    const input = await wrapper.find('[data-testid="search"] > input');
    await input.setValue("test");
    vi.runOnlyPendingTimers();
    await Promise.resolve();
    expect(wrapper.emitted("search")).toEqual([["test"]]);
  });

  it("should clear input on click of clear", async () => {
    const wrapper = mount(ShowSearchVue);
    const input = await wrapper.find('[data-testid="search"] > input');
    await input.setValue("test");
    vi.runOnlyPendingTimers();
    await Promise.resolve();
    const clear = await wrapper.find('[data-testid="reset"]');
    await clear.trigger("click");
    vi.runOnlyPendingTimers();
    await Promise.resolve();
    expect((input.element as HTMLInputElement).value).toBe("");
  });
});
