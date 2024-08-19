import { type DirectiveBinding } from 'vue';

interface HTMLElementWithClickOutsideHandler extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void;
}

const clickOutside = {
  mounted(el: HTMLElementWithClickOutsideHandler, binding: DirectiveBinding) {
    const clickOutsideHandler = (event: MouseEvent) => {
      if (!el.contains(event.target as Node)) {
        binding.value();
      }
    };

    document.addEventListener('click', clickOutsideHandler);

    el._clickOutsideHandler = clickOutsideHandler;
  },

  beforeUnmount(el: HTMLElementWithClickOutsideHandler) {
    if (el._clickOutsideHandler) {
      document.removeEventListener('click', el._clickOutsideHandler);
      delete el._clickOutsideHandler;
    }
  },
};

export default clickOutside;
