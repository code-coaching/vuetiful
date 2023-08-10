import { describe, expect, it, vi } from 'vitest';

/**
 * No clue why, but when this test is added to theme.service.test.ts, it fails.
 * Running it in isolation works fine.
 */

describe('given there is a callback', () => {
  it('should call the callback', async () => {
    const { useTheme } = await import('./theme.service');
    const { loadTheme } = useTheme();

    const callbackSpy = vi.fn();
    const callbackFunction = () => {
      callbackSpy();
    };
    loadTheme('vuetiful', callbackFunction);
    const link = document.querySelector('#theme') as HTMLLinkElement;
    // @ts-ignore
    link.onload();

    expect(callbackSpy).toHaveBeenCalled();
  });
});
