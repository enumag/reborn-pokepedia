import { mount } from "@vue/test-utils";
import Details from "@/views/DetailsView.vue";

describe("DetailsView.vue", () => {
  it("renders details view", () => {
    const mockRoute = {
      params: {
        id: "Outbox",
      },
    };
    const wrapper = mount(Details, {
      global: {
        mocks: {
          $route: mockRoute,
        },
      },
    });
    expect(wrapper.text()).toMatch("Select a Pokemon");
  });
});
