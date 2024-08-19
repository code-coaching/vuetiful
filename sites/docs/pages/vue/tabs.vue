<script setup lang="ts">
import {
  VCodeBlock,
  VPreview,
  VTab,
  VTabPanel,
  VTabs,
} from "@code-coaching/vuetiful";

const basicTemplate = `<v-tabs>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const basicVerticalTemplate = `<v-tabs vertical class="h-[250px]">
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const exampleOneTemplate = `<v-tabs>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nobis dicta placeat ipsam vitae error ipsa temporibus optio
      autem nam voluptates libero ex esse enim maxime nemo eum
      mollitia doloribus magnam itaque deleniti eos, nihil
      veritatis. Voluptate iste exercitationem sequi reiciendis
      provident facilis praesentium? Tempore tenetur modi ipsa alias
      voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      nemo saepe, qui veniam dolores, quam aliquid inventore
      laborum, animi vitae excepturi at? Impedit nam ex esse cumque
      labore nihil sint nulla error odio illo soluta iusto
      repudiandae molestiae cum, totam architecto, eius sit.
      Corrupti fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
      nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
      rerum similique, labore sed dolor repellendus consequuntur.
      Aut perspiciatis veritatis, odio non eveniet voluptas veniam
      ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleTwoTemplate = `<v-tabs
  class-tabs="bg-surface-200-800"
  class-panels="bg-surface-300-700"
>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nobis dicta placeat ipsam vitae error ipsa temporibus optio
      autem nam voluptates libero ex esse enim maxime nemo eum
      mollitia doloribus magnam itaque deleniti eos, nihil
      veritatis. Voluptate iste exercitationem sequi reiciendis
      provident facilis praesentium? Tempore tenetur modi ipsa alias
      voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      nemo saepe, qui veniam dolores, quam aliquid inventore
      laborum, animi vitae excepturi at? Impedit nam ex esse cumque
      labore nihil sint nulla error odio illo soluta iusto
      repudiandae molestiae cum, totam architecto, eius sit.
      Corrupti fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
      nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
      rerum similique, labore sed dolor repellendus consequuntur.
      Aut perspiciatis veritatis, odio non eveniet voluptas veniam
      ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleThreeTemplate = `<v-tabs
  vertical
  class="h-[250px]"
  class-panels="px-4"
  class-tab="w-[100px] py-2"
>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nobis dicta placeat ipsam vitae error ipsa temporibus optio
      autem nam voluptates libero ex esse enim maxime nemo eum
      mollitia doloribus magnam itaque deleniti eos, nihil
      veritatis. Voluptate iste exercitationem sequi reiciendis
      provident facilis praesentium? Tempore tenetur modi ipsa alias
      voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      nemo saepe, qui veniam dolores, quam aliquid inventore
      laborum, animi vitae excepturi at? Impedit nam ex esse cumque
      labore nihil sint nulla error odio illo soluta iusto
      repudiandae molestiae cum, totam architecto, eius sit.
      Corrupti fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
      nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
      rerum similique, labore sed dolor repellendus consequuntur.
      Aut perspiciatis veritatis, odio non eveniet voluptas veniam
      ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFourTemplate = `<v-tabs
  vertical
  class-tabs="bg-surface-200-800"
  class-panels="bg-surface-300-700"
  class-tab="w-[100px] py-2"
>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nobis dicta placeat ipsam vitae error ipsa temporibus optio
      autem nam voluptates libero ex esse enim maxime nemo eum
      mollitia doloribus magnam itaque deleniti eos, nihil
      veritatis. Voluptate iste exercitationem sequi reiciendis
      provident facilis praesentium? Tempore tenetur modi ipsa alias
      voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      nemo saepe, qui veniam dolores, quam aliquid inventore
      laborum, animi vitae excepturi at? Impedit nam ex esse cumque
      labore nihil sint nulla error odio illo soluta iusto
      repudiandae molestiae cum, totam architecto, eius sit.
      Corrupti fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
      nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
      rerum similique, labore sed dolor repellendus consequuntur.
      Aut perspiciatis veritatis, odio non eveniet voluptas veniam
      ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFiveTemplate = `<v-tabs
  hide-separator
  class-tab-active="preset-filled"
  class-tab-hover="hover:preset-outlined-surface-950-50"
>
  <template #tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nobis dicta placeat ipsam vitae error ipsa temporibus optio
      autem nam voluptates libero ex esse enim maxime nemo eum
      mollitia doloribus magnam itaque deleniti eos, nihil
      veritatis. Voluptate iste exercitationem sequi reiciendis
      provident facilis praesentium? Tempore tenetur modi ipsa alias
      voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
      nemo saepe, qui veniam dolores, quam aliquid inventore
      laborum, animi vitae excepturi at? Impedit nam ex esse cumque
      labore nihil sint nulla error odio illo soluta iusto
      repudiandae molestiae cum, totam architecto, eius sit.
      Corrupti fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
      nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
      rerum similique, labore sed dolor repellendus consequuntur.
      Aut perspiciatis veritatis, odio non eveniet voluptas veniam
      ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;
</script>

<template>
  <h1 class="h1">VTabs</h1>
  <section class="section">
    <v-code-block
      language="ts"
      :code="`import { VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';`"
    />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template #tabs>
      <v-tab>Usage</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs>
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block language="html" :code="basicTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Vertical</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs vertical class="h-[250px]">
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="basicVerticalTemplate"
            />
            <p>
              <code class="code">vertical</code> will place the tabs into a
              vertical orientation.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p>
            <kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>:
            Move focus onto and away from the active tab.
          </p>
          <p class="mt-2">Horizontal tabs:</p>
          <p>
            <kbd class="kbd">Left Arrow</kbd> and
            <kbd class="kbd">Right Arrow</kbd>: Moves focus to previous and next
            tab.
          </p>
          <p class="mt-2">Vertical tabs:</p>
          <p>
            <kbd class="kbd">Up Arrow</kbd> and
            <kbd class="kbd">Down Arrow</kbd>: Moves focus to previous and next
            tab.
          </p>
        </section>
        <section class="section">
          <p>
            <code class="code">v-tab</code> and
            <code class="code">v-tab-panel</code> are automatically connected by
            their position. This means that the first
            <code class="code">v-tab</code> will be connected to the first
            <code class="code">v-tab-panel</code>, the second
            <code class="code">v-tab</code> to the second
            <code class="code">v-tab-panel</code>, etc.
          </p>
        </section>
      </section>

      <h2 class="h2">Examples</h2>
      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs>
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis dicta placeat ipsam vitae error ipsa temporibus optio
                  autem nam voluptates libero ex esse enim maxime nemo eum
                  mollitia doloribus magnam itaque deleniti eos, nihil
                  veritatis. Voluptate iste exercitationem sequi reiciendis
                  provident facilis praesentium? Tempore tenetur modi ipsa alias
                  voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  nemo saepe, qui veniam dolores, quam aliquid inventore
                  laborum, animi vitae excepturi at? Impedit nam ex esse cumque
                  labore nihil sint nulla error odio illo soluta iusto
                  repudiandae molestiae cum, totam architecto, eius sit.
                  Corrupti fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
                  rerum similique, labore sed dolor repellendus consequuntur.
                  Aut perspiciatis veritatis, odio non eveniet voluptas veniam
                  ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                  explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="exampleOneTemplate"
            />
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs
              class-tabs="bg-surface-200-800"
              class-panels="bg-surface-300-700"
            >
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis dicta placeat ipsam vitae error ipsa temporibus optio
                  autem nam voluptates libero ex esse enim maxime nemo eum
                  mollitia doloribus magnam itaque deleniti eos, nihil
                  veritatis. Voluptate iste exercitationem sequi reiciendis
                  provident facilis praesentium? Tempore tenetur modi ipsa alias
                  voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  nemo saepe, qui veniam dolores, quam aliquid inventore
                  laborum, animi vitae excepturi at? Impedit nam ex esse cumque
                  labore nihil sint nulla error odio illo soluta iusto
                  repudiandae molestiae cum, totam architecto, eius sit.
                  Corrupti fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
                  rerum similique, labore sed dolor repellendus consequuntur.
                  Aut perspiciatis veritatis, odio non eveniet voluptas veniam
                  ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                  explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="exampleTwoTemplate"
            />
            <p>
              <code class="code">class-tabs</code> will be merged with the
              <code class="code">class</code> property of the tabs element.
            </p>
            <p>
              <code class="code">class-panels</code> will be merged with the
              <code class="code">class</code> property of the panels element.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs
              vertical
              class="h-[250px]"
              class-panels="px-4"
              class-tab="w-[100px] py-2"
            >
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis dicta placeat ipsam vitae error ipsa temporibus optio
                  autem nam voluptates libero ex esse enim maxime nemo eum
                  mollitia doloribus magnam itaque deleniti eos, nihil
                  veritatis. Voluptate iste exercitationem sequi reiciendis
                  provident facilis praesentium? Tempore tenetur modi ipsa alias
                  voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  nemo saepe, qui veniam dolores, quam aliquid inventore
                  laborum, animi vitae excepturi at? Impedit nam ex esse cumque
                  labore nihil sint nulla error odio illo soluta iusto
                  repudiandae molestiae cum, totam architecto, eius sit.
                  Corrupti fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
                  rerum similique, labore sed dolor repellendus consequuntur.
                  Aut perspiciatis veritatis, odio non eveniet voluptas veniam
                  ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                  explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="exampleThreeTemplate"
            />
            <p>
              <code class="code">vertical</code> will place the tabs into a
              vertical orientation.
            </p>
            <p>
              <code class="code">class-panels</code> will be merged with the
              <code class="code">class</code> property of the panels element.
            </p>
            <p>
              <code class="code">class-tab</code> will be merged with the
              <code class="code">class</code> property of each individual tab.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs
              vertical
              class-tabs="bg-surface-200-800"
              class-panels="bg-surface-300-700"
              class-tab="w-[100px] py-2"
            >
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis dicta placeat ipsam vitae error ipsa temporibus optio
                  autem nam voluptates libero ex esse enim maxime nemo eum
                  mollitia doloribus magnam itaque deleniti eos, nihil
                  veritatis. Voluptate iste exercitationem sequi reiciendis
                  provident facilis praesentium? Tempore tenetur modi ipsa alias
                  voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  nemo saepe, qui veniam dolores, quam aliquid inventore
                  laborum, animi vitae excepturi at? Impedit nam ex esse cumque
                  labore nihil sint nulla error odio illo soluta iusto
                  repudiandae molestiae cum, totam architecto, eius sit.
                  Corrupti fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
                  rerum similique, labore sed dolor repellendus consequuntur.
                  Aut perspiciatis veritatis, odio non eveniet voluptas veniam
                  ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                  explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="exampleFourTemplate"
            />
            <p>
              <code class="code">vertical</code> will place the tabs into a
              vertical orientation.
            </p>
            <p>
              <code class="code">class-tabs</code> will be merged with the
              <code class="code">class</code> property of the tabs element.
            </p>
            <p>
              <code class="code">class-panels</code> will be merged with the
              <code class="code">class</code> property of the panels element.
            </p>
            <p>
              <code class="code">class-tab</code> will be merged with the
              <code class="code">class</code> property of each individual tab.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template #preview>
            <v-tabs
              hide-separator
              class-tab-active="preset-filled"
              class-tab-hover="hover:preset-outlined-surface-950-50"
            >
              <template #tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nobis dicta placeat ipsam vitae error ipsa temporibus optio
                  autem nam voluptates libero ex esse enim maxime nemo eum
                  mollitia doloribus magnam itaque deleniti eos, nihil
                  veritatis. Voluptate iste exercitationem sequi reiciendis
                  provident facilis praesentium? Tempore tenetur modi ipsa alias
                  voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                  nemo saepe, qui veniam dolores, quam aliquid inventore
                  laborum, animi vitae excepturi at? Impedit nam ex esse cumque
                  labore nihil sint nulla error odio illo soluta iusto
                  repudiandae molestiae cum, totam architecto, eius sit.
                  Corrupti fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                  nemo ipsum ex tenetur veritatis, eius hic nulla a quisquam
                  rerum similique, labore sed dolor repellendus consequuntur.
                  Aut perspiciatis veritatis, odio non eveniet voluptas veniam
                  ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                  explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template #source>
            <v-code-block
              class="mb-2"
              language="html"
              :code="exampleFiveTemplate"
            />
            <p>
              <code class="code">hide-separator</code> will hide the separator
              between the tabs and the tab panels.
            </p>
            <p>
              <code class="code">class-tab-active</code> will be applied to each
              individual tab if that tab is active.
            </p>
            <p>
              <code class="code">class-tab-hover</code> will be applied to each
              individual tab if that tab is hovered.
            </p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
