import { afterEach, describe, expect, vi, test } from 'vitest';
import { type DirectiveBinding } from 'vue';
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
    test('should copy text to the clipboard on click', () => {
      window.navigator = navigatorMock;

      const el = document.createElement('div');
      vClipboard(el, { value: 'John Duck' } as DirectiveBinding);
      el.click();

      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('John Duck');
    });
  });
});
