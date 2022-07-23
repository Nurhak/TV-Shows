import { mount } from "@vue/test-utils";
import { describe, it, expect } from "vitest";
import EpisodeItemVue from "../EpisodeItem.vue";

describe("EpisodeItem", () => {
  it("should render", () => {
    const wrapper = mount(EpisodeItemVue, {
      propsData: {
        episode: {
          id: 1,
          name: "test",
          summary: "<p>test</p>",
          image: {
            medium: "test",
          },
        },
      },
    } as any);
    expect(wrapper.find('[data-testid="episode-name"]').text()).toBe("test");
    expect(wrapper.find("img").attributes("src")).toBe("test");
  });

  it("should not render image if no image is provided", () => {
    const wrapper = mount(EpisodeItemVue, {
      propsData: {
        episode: {
          id: 1,
          name: "test",
          summary: "<p>test</p>",
        },
      },
    } as any);
    expect(wrapper.find("img").exists()).toBe(false);
  });
});
