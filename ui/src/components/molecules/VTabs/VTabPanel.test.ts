import { TabGroup } from "@headlessui/vue";
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VTabPanel } from "..";

describe("VTabs", () => {
  test("default props", () => {
    const wrapper = mount({
      template: /*html*/ `
          <TabGroup>
            <v-tab-panel data-test='tab-panel'>John Duck</v-tab-panel>
          </TabGroup>
        `,
      components: {
        TabGroup: TabGroup,
        "v-tab-panel": VTabPanel,
      },
    });

    const tabPanel = wrapper.find("[data-test='tab-panel']");
    expect(tabPanel.text()).toEqual("John Duck");
  });
});
