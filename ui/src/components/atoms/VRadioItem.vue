<template>
  <!-- A11y attributes are not allowed on <label> -->
  <label :for="id">
    <div
      :class="`radio-item cursor-pointer px-4 py-1 text-center text-base rounded-token ${
        checked ? 'variant-filled' : 'hover:variant-soft'
      } `"
      role="radio"
      :aria-checked="checked"
      :tabindex="tabbable"
      :name="name"
      @keydown="handleKeydown"
    >
      <!-- NOTE: Don't use `hidden` as it prevents `required` from operating -->
      <div class="h-0 w-0 overflow-hidden">
        <input
          tabindex="-1"
          type="radio"
          :id="id"
          :name="name"
          :value="value"
          v-model="selectedOption"
        />
      </div>
      <slot />
    </div>
  </label>
</template>

<script setup lang="ts">
import { ComputedRef, computed, defineProps, inject } from "vue";

const props = defineProps({
  value: {
    type: [String, Number],
    required: true,
  },
});

const radioGroup = inject("radioGroup") as ComputedRef<HTMLElement>;
const selectedOption = inject("selectedOption") as ComputedRef<string>;
const name = inject("name") as string;

const id = `radio-${Math.random().toString(36).substring(2, 9)}`;
const isFirst = computed(() => {
  const idOfFirstChild = radioGroup.value?.children[0].querySelector("input")?.id;
  return idOfFirstChild === id;
});

const checked = computed(() => {
  return selectedOption.value === props.value;
});
const tabbable = computed(() => {
  if (!selectedOption.value) return isFirst.value ? 0 : -1;
  return selectedOption.value === props.value ? 0 : -1;
});

const setChecked = (target: HTMLElement) => {
  const input = target.querySelector("input");
  input?.click();
  input?.focus();
};

const setCheckedToNextItem = (target: HTMLElement) => {
  const activeId = target.querySelector("input")?.id;
  const children = radioGroup.value?.children;
  const activeChild = Array.from(children).find((child) => {
    const input = child.querySelector("input");
    return input?.id === activeId;
  });

  const firstchild = children[0];
  const isLast = activeChild === children[children.length - 1];
  if (isLast) {
    const input = firstchild.querySelector("input");
    if (input) {
      input.click();
      input.focus();
    }
    return;
  }

  const nextChild = activeChild?.nextElementSibling;
  const input = nextChild?.querySelector("input");
  if (input) {
    input.click();
    input.focus();
  }
};

const setCheckedToPreviousItem = (target: HTMLElement) => {
  const activeId = target.querySelector("input")?.id;
  const children = radioGroup.value?.children;
  const activeChild = Array.from(children).find((child) => {
    const input = child.querySelector("input");
    return input?.id === activeId;
  });

  const lastchild = children[children.length - 1];
  const isFirst = activeChild === children[0];
  if (isFirst) {
    const input = lastchild.querySelector("input");
    if (input) {
      input.click();
      input.focus();
    }
    return;
  }

  const previousChild = activeChild?.previousElementSibling;
  const input = previousChild?.querySelector("input");
  if (input) {
    input.click();
    input.focus();
  }
};

const handleKeydown = (event: KeyboardEvent) => {
  const target = event.currentTarget as HTMLElement;
  let flag = false;

  switch (event.key) {
    case " ":
    case "Enter":
      setChecked(target);
      flag = true;
      break;

    case "Up":
    case "ArrowUp":
    case "Left":
    case "ArrowLeft":
      setCheckedToPreviousItem(target);
      flag = true;
      break;

    case "Down":
    case "ArrowDown":
    case "Right":
    case "ArrowRight":
      setCheckedToNextItem(target);
      flag = true;
      break;

    default:
      break;
  }

  if (flag) {
    event.stopPropagation();
    event.preventDefault();
  }
};
</script>
