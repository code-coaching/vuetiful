import { describe, expect, vi, test } from 'vitest';

/**
 * No clue why, but when this test is added to theme.service.test.ts, it fails.
 * Running it in isolation works fine.
 */

describe('given there is no existing theme style tag', () => {
  test('should create a new theme style tag', async () => {
    const { useTheme } = await import('./theme.service');
    const { applyTheme, themes } = useTheme();

    const removeObject = { remove: () => {} };
    const removeSpy = vi.spyOn(removeObject, 'remove');
    vi.spyOn(window.document, 'getElementById').mockReturnValueOnce(removeObject as any);

    const newTheme = JSON.parse(JSON.stringify(themes[0]));
    newTheme.name = 'new-theme';
    applyTheme(newTheme);

    const link = document.querySelector('#vuetiful-theme') as HTMLLinkElement;
    // @ts-ignore
    link.onload();

    expect(removeSpy).toHaveBeenCalled();
  });
});
