import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import ShowBreadcrumbVue from "../ShowBreadcrumb.vue";

describe("ShowBreadCrumb", () => {
  it("should render", () => {
    const wrapper = mount(ShowBreadcrumbVue, {
      propsData: {
        showName: "test",
      },
    } as any);

    expect(wrapper.find('[data-testid="current-show-name"]').text()).toBe(
      "test"
    );
  });
});
