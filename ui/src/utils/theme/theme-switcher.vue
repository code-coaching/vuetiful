<template>
  <div class="cc-theme-switcher">
    <VButton :class="`cc-theme-switcher__button ${buttonClasses}`" @click="showPopup = !showPopup">
      Theme
    </VButton>

    <div v-if="showPopup" class="cc-theme-switcher__popup p-4 shadow-xl" :class="classes">
      <div class="space-y-4">
        <section class="flex items-center justify-between">
          <h6>Mode</h6>
          <DarkModeSwitch />
        </section>
        <nav class="list-nav -m-4 overflow-y-auto p-4" :class="listClasses">
          <ul class="flex flex-col gap-4">
            <li
              class="h-full w-full p-2 text-center capitalize hover:cursor-pointer hover:bg-primary-100 hover:text-primary-900"
              :class="`${listItemClasses} ${
                chosenTheme === theme
                  ? 'bg-primary-50 text-primary-900'
                  : 'bg-surface-200 text-surface-900'
              }`"
              v-for="(theme, index) in themes"
              :key="index"
              @click="loadTheme(theme)"
            >
              {{ theme }}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CssClasses, DarkModeSwitch, useDarkMode, useTheme, VButton } from "@/index";
import { computed, defineComponent, onMounted, ref } from "vue";

export default defineComponent({
  components: {
    DarkModeSwitch,
    VButton,
  },
  props: {
    bgLight: {
      type: String as () => CssClasses,
      default: "bg-surface-50",
    },
    bgDark: {
      type: String as () => CssClasses,
      default: "bg-surface-900",
    },
    textOnLight: {
      type: String as () => CssClasses,
      default: "text-surface-900",
    },
    textOnDark: {
      type: String as () => CssClasses,
      default: "text-surface-50",
    },
    width: {
      type: String as () => CssClasses,
      default: "w-60",
    },
    height: {
      type: String as () => CssClasses,
      default: "max-h-64 lg:max-h-[500px]",
    },
    ring: {
      type: String as () => CssClasses,
      default: "ring-[1px] ring-surface-500/30",
    },
    rounded: {
      type: String as () => CssClasses,
      default: "rounded-token",
    },
    roundedContainer: {
      type: String as () => CssClasses,
      default: "rounded-container-token",
    },
    buttonClasses: {
      type: String as () => CssClasses,
      default: "w-24",
    },
  },
  setup(props, { attrs }) {
    const { initializeTheme, loadTheme, themes, chosenTheme } = useTheme();
    const { currentMode, MODE } = useDarkMode();

    const showPopup = ref(false);
    onMounted(() => {
      initializeTheme();
    });

    const cTransition = `transition-all duration-[200ms]`;

    type OnKeyDownEvent = KeyboardEvent & { currentTarget: EventTarget & HTMLDivElement };
    function onKeyDown(event: KeyboardEvent): void {
      if (["Enter", "Space"].includes(event.code)) {
        event.preventDefault();
        (event as OnKeyDownEvent).currentTarget.click();
      }
    }

    const background = computed(() => {
      return currentMode.value === MODE.LIGHT ? props.bgLight : props.bgDark;
    });

    const text = computed(() => {
      return currentMode.value === MODE.LIGHT ? props.textOnLight : props.textOnDark;
    });

    const classes = computed(() => {
      return `${cTransition} 
      ${background.value} 
      ${text.value} 
      ${props.width} 
      ${props.ring}
      ${props.roundedContainer}
      ${attrs.class ?? ""}`;
    });

    const listClasses = computed(() => {
      return `${cTransition} 
      ${props.height}`;
    });

    const listItemClasses = computed(() => {
      return `${cTransition} 
      ${props.ring} 
      ${props.rounded}`;
    });

    return {
      onKeyDown,
      loadTheme,
      currentMode,
      classes,
      chosenTheme,
      themes,
      showPopup,
      listClasses,
      listItemClasses,
    };
  },
});
</script>

<style scoped>
.cc-theme-switcher__popup {
  position: absolute;
  z-index: 1;
  margin-top: 0.25rem;
}
</style>
