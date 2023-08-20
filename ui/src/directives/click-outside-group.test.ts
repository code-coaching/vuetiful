import { mount } from '@vue/test-utils';
import { describe, test, vi, expect } from 'vitest'
import { vClickOutsideGroup } from '.';

interface HTMLElementWithClickOutsideHandler extends HTMLElement {
  _clickOutsideHandler?: (event: MouseEvent) => void;
}

describe('vClickOutsideGroup Directive', () => {
  test("should call the callback when clicking outside the element", async () => {
    const callback = vi.fn();

    const innerElement = document.createElement('div');
    const outerElement = document.createElement('div');
    outerElement.id = 'outer';
    document.body.appendChild(outerElement);
    document.body.appendChild(innerElement);
    
    const directiveBinding = { value: {
      elementsInGroup: ['#outer'],
      callback
    } } as any;
    vClickOutsideGroup.mounted(innerElement, directiveBinding);

    innerElement.click();
    expect(callback).not.toHaveBeenCalled();
    outerElement.click();
    expect(callback).not.toHaveBeenCalled();
    document.body.click();
    expect(callback).toHaveBeenCalled();
  })

  test("should remove _clickOutsideHandler when unmounted", async () => {
    const callback = vi.fn();
    const directiveBinding = { value: callback } as any;
    const innerElement = document.createElement('div') as HTMLElementWithClickOutsideHandler;
    document.body.appendChild(innerElement);
    vClickOutsideGroup.mounted(innerElement, directiveBinding);

    expect(innerElement._clickOutsideHandler).toBeDefined();
    vClickOutsideGroup.beforeUnmount(innerElement);
    expect(innerElement._clickOutsideHandler).toBeUndefined();
  })
});
