// home-page.test.ts
import { test } from '@playwright/test';
import { captureScreenshot, setupPage } from './testUtils';

test('homepage landing view', async ({ page }) => {
  await setupPage(page, '/');
  
  // Capture initial screenshot
  await captureScreenshot(page, 'home-page', 'landing');
});
