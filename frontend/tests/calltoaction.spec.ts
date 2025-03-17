import { test } from '@playwright/test';
import { captureScreenshot, setupPage } from './testUtils';

test.describe('Features Call to Action Component Screenshots', () => {
  test('captures component at all viewport sizes', async ({ page }) => {
    // Setup initial page
    await setupPage(page, '/');

    // Wait for the component to be fully loaded
    const featuresCTA = page.locator('section:has-text("Curious about our Features?")');
    await featuresCTA.waitFor({ state: 'visible' });

    // Capture screenshots with the component in focus
    await captureScreenshot(
      page,
      'home-page',  // testName
      'features-cta',     // pageName
      featuresCTA      // elementToFocus
    );
  });
});