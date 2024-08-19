import { type DirectiveBinding } from 'vue';

interface HTMLElementWithClickOutsideHandler extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void;
}

const clickOutsideGroup = {
  mounted(el: HTMLElementWithClickOutsideHandler, binding: DirectiveBinding) {
    const { elementsInGroup = [], callback } = binding.value;

    const elementsToIgnore = elementsInGroup.map((selector: string) => {
      const allElements = document.querySelectorAll(selector);
      const elements = Array.from(allElements) as HTMLElement[];
      return elements;
    });

    const allElementsToIgnore = elementsToIgnore.flat();

    const clickOutsideHandler = (event: MouseEvent) => {
      const clickedIgnoreElement = allElementsToIgnore.some((el: HTMLElement) => el?.contains(event.target as Node));
      if (!el.contains(event.target as Node) && !clickedIgnoreElement) {
        callback();
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

export default clickOutsideGroup;
