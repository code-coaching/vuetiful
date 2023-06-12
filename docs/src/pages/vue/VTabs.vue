<script setup lang="ts">
import { VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';

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

const basicVerticalTemplate = /*html*/ `<v-tabs vertical>
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>Vuetiful panel</v-tab-panel>
  <v-tab-panel>Is panel</v-tab-panel>
  <v-tab-panel>Beautiful panel</v-tab-panel>
</v-tabs>`;

const exampleOneTemplate = /*html*/ `<v-tabs class="w-full" class-panels="p-4">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2>Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
      error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
      expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
      nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
      odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleTwoTemplate = /*html*/ `<v-tabs class="w-full" class-tabs="bg-surface-300-600-token" class-panels="bg-surface-200-700-token p-4">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2>Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
      error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
      expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
      nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
      odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleThreeTemplate = /*html*/ `<v-tabs vertical class="w-full" class-panels="p-4" class-tab="w-[100px] py-2">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2>Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
      error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
      expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
      nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
      odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFourTemplate = /*html*/ `<v-tabs
  vertical
  class="w-full"
  class-tabs="bg-surface-300-600-token"
  class-panels="bg-surface-200-700-token p-4"
  class-tab="w-[100px] py-2"
>
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2>Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
      error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
      expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
      nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
      odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;

const exampleFiveTemplate = /*html*/ `<v-tabs class="w-full" hide-separator active="variant-filled" hover="hover:variant-soft">
  <template v-slot:tabs>
    <v-tab>Vuetiful</v-tab>
    <v-tab>Is</v-tab>
    <v-tab>Beautiful</v-tab>
  </template>
  <v-tab-panel>
    <h2>Vuetiful</h2>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
      temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
      itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
      praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Is</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
      aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
      error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
      expedita quo labore, saepe porro!
    </p>
  </v-tab-panel>
  <v-tab-panel>
    <h2>Beautiful</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
      nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
      odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
      explicabo, mollitia eos corporis, tempore quidem ducimus?
    </p>
  </v-tab-panel>
</v-tabs>`;
</script>

<template>
  <div class="flex max-w-5xl flex-col p-4">
    <h1>VTabs</h1>
    <section class="section">
      <v-code-block
        language="ts"
        :code="`import { VCodeBlock, VPreview, VTab, VTabPanel, VTabs } from '@code-coaching/vuetiful';`"
      />
    </section>

    <h2>Usage</h2>
    <h3>Basic</h3>
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

    <h3>Vertical</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs vertical>
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
          <p><code>vertical</code> will place the tabs into a vertical orientation.</p>
        </template>
      </v-preview>
    </section>

    <h3>Accessibility</h3>
    <section class="section">
      <h4>Keyboard Interaction</h4>
      <section class="section">
        <p><kbd>Tab</kbd> and <kbd>Shift + Tab</kbd>: Move focus onto and away from the active tab.</p>
        <p class="mt-2">Horizontal tabs:</p>
        <p><kbd>Left Arrow</kbd> and <kbd>Right Arrow</kbd>: Moves focus to previous and next tab.</p>
        <p class="mt-2">Vertical tabs:</p>
        <p><kbd>Up Arrow</kbd> and <kbd>Down Arrow</kbd>: Moves focus to previous and next tab.</p>
      </section>
      <section class="section">
        <p>
          <code>v-tab</code> and <code>v-tab-panel</code> are automatically connected by their position. This means that
          the first <code>v-tab</code> will be connected to the first <code>v-tab-panel</code>, the second
          <code>v-tab</code> to the second <code>v-tab-panel</code>, etc.
        </p>
      </section>
    </section>

    <h3>Examples</h3>
    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs class="w-full" class-panels="p-4">
            <template v-slot:tabs>
              <v-tab>Vuetiful</v-tab>
              <v-tab>Is</v-tab>
              <v-tab>Beautiful</v-tab>
            </template>
            <v-tab-panel>
              <h2>Vuetiful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Is</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
                error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
                expedita quo labore, saepe porro!
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
                nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
                odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                explicabo, mollitia eos corporis, tempore quidem ducimus?
              </p>
            </v-tab-panel>
          </v-tabs>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="exampleOneTemplate" />
          <p>
            <code>class-panels</code> will be appended to the <code>class</code> property of the panels element. This
            can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
        </template>
      </v-preview>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs class="w-full" class-tabs="bg-surface-300-600-token" class-panels="bg-surface-200-700-token p-4">
            <template v-slot:tabs>
              <v-tab>Vuetiful</v-tab>
              <v-tab>Is</v-tab>
              <v-tab>Beautiful</v-tab>
            </template>
            <v-tab-panel>
              <h2>Vuetiful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Is</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
                error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
                expedita quo labore, saepe porro!
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
                nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
                odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                explicabo, mollitia eos corporis, tempore quidem ducimus?
              </p>
            </v-tab-panel>
          </v-tabs>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="exampleTwoTemplate" />
          <p>
            <code>class-tabs</code> will be appended to the <code>class</code> property of the tabs element. This can be
            one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-panels</code> will be appended to the <code>class</code> property of the panels element. This
            can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
        </template>
      </v-preview>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs vertical class="w-full" class-panels="p-4" class-tab="w-[100px] py-2">
            <template v-slot:tabs>
              <v-tab>Vuetiful</v-tab>
              <v-tab>Is</v-tab>
              <v-tab>Beautiful</v-tab>
            </template>
            <v-tab-panel>
              <h2>Vuetiful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Is</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
                error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
                expedita quo labore, saepe porro!
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
                nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
                odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                explicabo, mollitia eos corporis, tempore quidem ducimus?
              </p>
            </v-tab-panel>
          </v-tabs>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="exampleThreeTemplate" />
          <p><code>vertical</code> will place the tabs into a vertical orientation.</p>
          <p>
            <code>class-panels</code> will be appended to the <code>class</code> property of the panels element. This
            can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-tab</code> will be appended to the <code>class</code> property of each individual tab. This can
            be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
        </template>
      </v-preview>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs
            vertical
            class="w-full"
            class-tabs="bg-surface-300-600-token"
            class-panels="bg-surface-200-700-token p-4"
            class-tab="w-[100px] py-2"
          >
            <template v-slot:tabs>
              <v-tab>Vuetiful</v-tab>
              <v-tab>Is</v-tab>
              <v-tab>Beautiful</v-tab>
            </template>
            <v-tab-panel>
              <h2>Vuetiful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Is</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
                error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
                expedita quo labore, saepe porro!
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
                nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
                odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                explicabo, mollitia eos corporis, tempore quidem ducimus?
              </p>
            </v-tab-panel>
          </v-tabs>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="exampleFourTemplate" />
          <p><code>vertical</code> will place the tabs into a vertical orientation.</p>
          <p>
            <code>class-tabs</code> will be appended to the <code>class</code> property of the tabs element. This can be
            one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-panels</code> will be appended to the <code>class</code> property of the panels element. This
            can be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
          <p>
            <code>class-tab</code> will be appended to the <code>class</code> property of each individual tab. This can
            be one or multiple classes. This can be both normal CSS classes or Tailwind classes.
          </p>
        </template>
      </v-preview>
    </section>

    <section class="section">
      <v-preview>
        <template v-slot:preview>
          <v-tabs class="w-full" hide-separator active="variant-filled" hover="hover:variant-soft">
            <template v-slot:tabs>
              <v-tab>Vuetiful</v-tab>
              <v-tab>Is</v-tab>
              <v-tab>Beautiful</v-tab>
            </template>
            <v-tab-panel>
              <h2>Vuetiful</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis dicta placeat ipsam vitae error ipsa
                temporibus optio autem nam voluptates libero ex esse enim maxime nemo eum mollitia doloribus magnam
                itaque deleniti eos, nihil veritatis. Voluptate iste exercitationem sequi reiciendis provident facilis
                praesentium? Tempore tenetur modi ipsa alias voluptate iusto?
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Is</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nemo saepe, qui veniam dolores, quam
                aliquid inventore laborum, animi vitae excepturi at? Impedit nam ex esse cumque labore nihil sint nulla
                error odio illo soluta iusto repudiandae molestiae cum, totam architecto, eius sit. Corrupti fuga
                expedita quo labore, saepe porro!
              </p>
            </v-tab-panel>
            <v-tab-panel>
              <h2>Beautiful</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nemo ipsum ex tenetur veritatis, eius hic
                nulla a quisquam rerum similique, labore sed dolor repellendus consequuntur. Aut perspiciatis veritatis,
                odio non eveniet voluptas veniam ad consequuntur cum dicta ipsa blanditiis porro laudantium quo
                explicabo, mollitia eos corporis, tempore quidem ducimus?
              </p>
            </v-tab-panel>
          </v-tabs>
        </template>
        <template v-slot:source>
          <v-code-block class="mb-2" language="html" :code="exampleFiveTemplate" />
          <p><code>hide-separator</code> will hide the separator between the tabs and the tab panels.</p>
          <p>
            <code>active</code> will be appended to the <code>class</code> property of each invidivual tab. This can be
            one or multiple classes. This can be both normal CSS classes or Tailwind classes. This property is
            automatically applied to the active tab.
          </p>
          <p>
            <code>hover</code> will be appended to the <code>class</code> property of each invidivual tab. This can be
            one or multiple classes. This can be both normal CSS classes or Tailwind classes. This property is
            automatically applied to the inactive tabs.
          </p>
        </template>
      </v-preview>
    </section>
  </div>
</template>
