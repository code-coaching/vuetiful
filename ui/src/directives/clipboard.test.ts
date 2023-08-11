import { afterEach, describe, expect, it, vi } from 'vitest';
import { DirectiveBinding } from 'vue';
import { vClipboard } from '.';

const navigatorMock = {
  clipboard: {
    writeText: vi.fn(),
  } as any,
} as any;

describe('clipboard', () => {
  afterEach(() => {
    vi.resetAllMocks();
  });
  describe('given the v-clipboard directive is used', () => {
    it('should copy text to the clipboard on click', () => {
      window.navigator = navigatorMock;

      const el = document.createElement('div');
      vClipboard(el, { value: 'John Duck' } as DirectiveBinding);
      el.click();

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('John Duck');
    });
  });
});
