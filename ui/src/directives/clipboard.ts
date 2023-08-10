import { DirectiveBinding } from 'vue';

const clipboard = (el: HTMLElement, binding: DirectiveBinding) => {
  el.addEventListener('click', () => {
    navigator.clipboard.writeText(binding.value);
  });
};

export default clipboard;
