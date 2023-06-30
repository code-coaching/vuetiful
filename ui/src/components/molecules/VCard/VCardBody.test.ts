import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
import { VCard, VCardBody } from "..";

describe("VCardBody", () => {
  test("defaults", async () => {
    const wrapper = mount({
      template: /*html*/ `
        <v-card>
          <v-card-body>John Duck</v-card-body>
        </v-card>
      `,
      components: {
        "v-card": VCard,
        "v-card-body": VCardBody,
      },
    });

    expect(wrapper.text()).toEqual("John Duck");
  });
});