<script setup lang="ts">
import { VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';
import { AlertUnstyled } from 'src/components';

const basicTemplate = /*html*/ `<v-tabs>
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const basicVerticalTemplate = /*html*/ `<v-tabs vertical class="h-[250px]">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const exampleOneTemplate = /*html*/ `<v-tabs>
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
      nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
      fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
      hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
      veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
      quo explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleTwoTemplate = /*html*/ `<v-tabs class-tabs="bg-surface-300-700" class-panels="bg-surface-200-800">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
      nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
      fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
      hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
      veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
      quo explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleThreeTemplate = /*html*/ `<v-tabs vertical class="h-[250px]" class-panels="px-4" class-tab="w-[100px] py-2">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
      nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
      fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
      hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
      veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
      quo explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFourTemplate = /*html*/ `<v-tabs
  vertical
  class-tabs="bg-surface-300-700"
  class-panels="bg-surface-200-800"
  class-tab="w-[100px] py-2"
>
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
      nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
      fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
      hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
      veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
      quo explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFiveTemplate = /*html*/ `<v-tabs hide-separator active="preset-filled" hover="hover:preset-outlined-surface-950-50">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2 class="h2">Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
      nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
      fuga expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2 class="h2">Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
      hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
      veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
      quo explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const unstyledTemplate = /*html*/ `<v-tabs unstyled>
  <template v-slot:tabs>
    <v-tab unstyled>Vuetiful</v-tab>
    <v-tab unstyled>Is</v-tab>
    <v-tab unstyled>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const unstyledPropTemplate = /*html*/ `<v-tabs unstyled hover="" hide-separator>
  <template v-slot:tabs>
    <v-tab unstyled>Vuetiful</v-tab>
    <v-tab unstyled>Is</v-tab>
    <v-tab unstyled>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const unstyledCustomTemplate = /*html*/ `<v-tabs
  unstyled
  hover="hover:bg-blue-500"
  active="bg-green-600"
  class="w-full"
  class-tab="bg-blue-600 w-full p-4"
  class-tabs="flex"
  class-separator="border-red-600"
  class-tab-separator="border-green-50"
  class-panels="bg-blue-600 text-white p-8"
>
  <template v-slot:tabs>
    <v-tab unstyled class="w-full">Vuetiful</v-tab>
    <v-tab unstyled class="w-full">Is</v-tab>
    <v-tab unstyled class="w-full">Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;
</script>

<template>
  <h1 class="h1">VTabs</h1>
  <section class="section">
    <v-code-block language="ts" :code="`import { VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';`" />
  </section>

  <v-tabs class-panels="py-4 md:py-10">
    <template v-slot:tabs>
      <v-tab>Usage</v-tab>
      <v-tab>Unstyled</v-tab>
    </template>
    <v-tab-panel>
      <h2 class="h2">Basic</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs>
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="basicTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Vertical</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs vertical class="h-[250px]">
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="basicVerticalTemplate" />
            <p><code class="code">vertical</code> will place the tabs into a vertical orientation.</p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Accessibility</h2>
      <section class="section">
        <h3 class="h3">Keyboard Interaction</h3>
        <section class="section">
          <p>
            <kbd class="kbd">Tab</kbd> and <kbd class="kbd">Shift + Tab</kbd>: Move focus onto and away from the active
            tab.
          </p>
          <p class="mt-2">Horizontal tabs:</p>
          <p>
            <kbd class="kbd">Left Arrow</kbd> and <kbd class="kbd">Right Arrow</kbd>: Moves focus to previous and next
            tab.
          </p>
          <p class="mt-2">Vertical tabs:</p>
          <p>
            <kbd class="kbd">Up Arrow</kbd> and <kbd class="kbd">Down Arrow</kbd>: Moves focus to previous and next tab.
          </p>
        </section>
        <section class="section">
          <p>
            <code class="code">v-tab</code> and <code class="code">v-tab-panel</code> are automatically connected by
            their position. This means that the first <code class="code">v-tab</code> will be connected to the first
            <code class="code">v-tab-panel</code>, the second <code class="code">v-tab</code> to the second
            <code class="code">v-tab-panel</code>, etc.
          </p>
        </section>
      </section>

      <h2 class="h2">Examples</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs>
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                  temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                  itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                  praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                  aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
                  nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
                  fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
                  hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
                  veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
                  quo explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="exampleOneTemplate" />
            <p>
              <code class="code">class-panels</code> will be appended to the <code class="code">class</code> property of
              the panels element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs class-tabs="bg-surface-300-700" class-panels="bg-surface-200-800">
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                  temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                  itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                  praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                  aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
                  nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
                  fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
                  hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
                  veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
                  quo explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="exampleTwoTemplate" />
            <p>
              <code class="code">class-tabs</code> will be appended to the <code class="code">class</code> property of
              the tabs element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
            <p>
              <code class="code">class-panels</code> will be appended to the <code class="code">class</code> property of
              the panels element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs vertical class="h-[250px]" class-panels="px-4" class-tab="w-[100px] py-2">
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                  temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                  itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                  praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                  aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
                  nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
                  fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
                  hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
                  veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
                  quo explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="exampleThreeTemplate" />
            <p><code class="code">vertical</code> will place the tabs into a vertical orientation.</p>
            <p>
              <code class="code">class-panels</code> will be appended to the <code class="code">class</code> property of
              the panels element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
            <p>
              <code class="code">class-tab</code> will be appended to the <code class="code">class</code> property of
              each individual tab. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs
              vertical
              class-tabs="bg-surface-300-700"
              class-panels="bg-surface-200-800"
              class-tab="w-[100px] py-2"
            >
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                  temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                  itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                  praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                  aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
                  nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
                  fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
                  hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
                  veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
                  quo explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="exampleFourTemplate" />
            <p><code class="code">vertical</code> will place the tabs into a vertical orientation.</p>
            <p>
              <code class="code">class-tabs</code> will be appended to the <code class="code">class</code> property of
              the tabs element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
            <p>
              <code class="code">class-panels</code> will be appended to the <code class="code">class</code> property of
              the panels element. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
            <p>
              <code class="code">class-tab</code> will be appended to the <code class="code">class</code> property of
              each individual tab. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes.
            </p>
          </template>
        </v-preview>
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs hide-separator active="preset-filled" hover="hover:preset-outlined-surface-950-50">
              <template v-slot:tabs>
                <v-tab>Vuetiful</v-tab>
                <v-tab>Is</v-tab>
                <v-tab>Beautiful</v-tab>
              </template>
              <v-tab-panel>
                <h2 class="h2">Vuetiful</h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                  temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                  itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                  praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Is</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                  aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint
                  nulla error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti
                  fuga expedita quo labore, saepe porro!
                </p>
              </v-tab-panel>
              <v-tab-panel>
                <h2 class="h2">Beautiful</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius
                  hic nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis
                  veritatis, odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium
                  quo explicabo, mollitia eos corporis, tempore quidem ducimus?
                </p>
              </v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="exampleFiveTemplate" />
            <p><code class="code">hide-separator</code> will hide the separator between the tabs and the tab panels.</p>
            <p>
              <code class="code">active</code> will be appended to the <code class="code">class</code> property of each
              invidivual tab. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes. This property is automatically applied to the active tab.
            </p>
            <p>
              <code class="code">hover</code> will be appended to the <code class="code">class</code> property of each
              invidivual tab. This can be one or multiple classes. This can be both normal CSS classes or Tailwind
              classes. This property is automatically applied to the inactive tabs.
            </p>
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
    <v-tab-panel>
      <section class="section">
        <alert-unstyled />
      </section>

      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs unstyled>
              <template v-slot:tabs>
                <v-tab unstyled>Vuetiful</v-tab>
                <v-tab unstyled>Is</v-tab>
                <v-tab unstyled>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledTemplate" />
          </template>
        </v-preview>
      </section>

      <h2 class="h2">No prop-based styles</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs unstyled hover="" hide-separator>
              <template v-slot:tabs>
                <v-tab unstyled>Vuetiful</v-tab>
                <v-tab unstyled>Is</v-tab>
                <v-tab unstyled>Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block class="mb-2" language="html" :code="unstyledPropTemplate" />
            <p>
              Set <code class="code">hover</code> to an empty string and add <code class="code">hide-separator</code> to
              have no prop-based styles.
            </p>
          </template>
        </v-preview>
      </section>

      <h2 class="h2">Custom style example</h2>
      <section class="section">
        <v-preview>
          <template v-slot:preview>
            <v-tabs
              unstyled
              hover="hover:bg-blue-500"
              active="bg-green-600"
              class="w-full"
              class-tab="bg-blue-600 w-full p-4"
              class-tabs="flex"
              class-separator="border-red-600"
              class-tab-separator="border-green-50"
              class-panels="bg-blue-600 text-white p-8"
            >
              <template v-slot:tabs>
                <v-tab unstyled class="w-full">Vuetiful</v-tab>
                <v-tab unstyled class="w-full">Is</v-tab>
                <v-tab unstyled class="w-full">Beautiful</v-tab>
              </template>
              <v-tab-panel>Vuetiful panel</v-tab-panel>
              <v-tab-panel>Is panel</v-tab-panel>
              <v-tab-panel>Beautiful panel</v-tab-panel>
            </v-tabs>
          </template>
          <template v-slot:source>
            <v-code-block language="html" :code="unstyledCustomTemplate" />
          </template>
        </v-preview>
      </section>
    </v-tab-panel>
  </v-tabs>
</template>
