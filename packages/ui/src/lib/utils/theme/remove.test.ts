import { describe, expect, test } from 'vitest';

describe('given there is an existing theme', () => {
  test('should switch to the new theme', async () => {
    const { useTheme } = await import('./theme.service');
    const { applyTheme, themeArray } = useTheme();

    applyTheme(themeArray[0]);
    expect(document.documentElement.getAttribute('data-theme')).toBe(themeArray[0].name);

    applyTheme(themeArray[1]);
    expect(document.documentElement.getAttribute('data-theme')).toBe(themeArray[1].name);
  });
});
