import { test, expect } from '@playwright/test';
import * as utils from '../tests/testUtils';

test('homepage content', async ({ page }) => {
  // Navigate to the homepage
  await page.goto('http://localhost:3000');

  // Capture screenshots
  await utils.captureScreenshot(page, 'home-page', 'Landing');
});
