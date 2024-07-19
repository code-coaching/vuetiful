import { describe, expect, vi, test } from 'vitest';

/**
 * No clue why, but when this test is added to theme.service.test.ts, it fails.
 * Running it in isolation works fine.
 */

describe('given there is a callback', () => {
  test('should call the callback', async () => {
    const { useTheme } = await import('./theme.service');
    const { applyTheme, themes } = useTheme();

    const callbackSpy = vi.fn();
    const callbackFunction = () => {
      callbackSpy();
    };

    const newTheme = JSON.parse(JSON.stringify(themes[0]));
    newTheme.name = 'new-theme';
    applyTheme(newTheme, callbackFunction);

    const link = document.querySelector('#vuetiful-theme') as HTMLLinkElement;
    // @ts-ignore
    link.onload();

    expect(callbackSpy).toHaveBeenCalled();
  });
});
