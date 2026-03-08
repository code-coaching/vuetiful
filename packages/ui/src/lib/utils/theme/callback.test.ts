import { describe, expect, vi, test } from 'vitest';

describe('given there is a callback', () => {
  test('should call the callback', async () => {
    const { useTheme } = await import('./theme.service');
    const { applyTheme, themeArray } = useTheme();

    const callbackSpy = vi.fn();
    applyTheme(themeArray[0], callbackSpy);

    expect(callbackSpy).toHaveBeenCalled();
  });
});
