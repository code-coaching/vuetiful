import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('visits the app root url', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('p').getByText('This is a')).toHaveText(
    'This is a sandbox for @code-coaching/vuetiful. Select a feature from the list to preview.',
  );
});

test('visits the switch component', async ({ page }) => {
  await page.goto('/components/switch');
  await expect(page.locator('h1')).toHaveText('Switch');
});
