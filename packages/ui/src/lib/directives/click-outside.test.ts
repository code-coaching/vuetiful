import { mount } from '@vue/test-utils';
import { describe, test, vi, expect } from 'vitest'
import { vClickOutside } from '.';

interface HTMLElementWithClickOutsideHandler extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void;
}

describe('vClickOutside Directive', () => {
  test("should call the callback when clicking outside the element", async () => {
    const callback = vi.fn();

    const innerElement = document.createElement('div');
    document.body.appendChild(innerElement);

    const directiveBinding = { value: callback } as any;
    vClickOutside.mounted(innerElement, directiveBinding);

    innerElement.click();
    expect(callback).not.toHaveBeenCalled();
    document.body.click();
    expect(callback).toHaveBeenCalled();
  })

  test("should remove _clickOutsideHandler when unmounted", async () => {
    const callback = vi.fn();

    const innerElement = document.createElement('div') as HTMLElementWithClickOutsideHandler;
    document.body.appendChild(innerElement);

    const directiveBinding = { value: callback } as any;
    vClickOutside.mounted(innerElement, directiveBinding);

    expect(innerElement._clickOutsideHandler).toBeDefined();
    vClickOutside.beforeUnmount(innerElement);
    expect(innerElement._clickOutsideHandler).toBeUndefined();
  })
});
