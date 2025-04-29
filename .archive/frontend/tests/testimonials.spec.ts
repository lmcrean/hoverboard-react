
// testimonials.test.ts
import { test } from '@playwright/test';
import { captureScreenshot, setupPage } from './testUtils';

test('testimonials section', async ({ page }) => {
  await setupPage(page, '/');

  // Locate the testimonials section
  const testimonialsHeader = page.locator('section[class*="testimonials-header"]');

  // Scroll to the testimonials section
  await testimonialsHeader.scrollIntoViewIfNeeded();

  // Wait for the testimonials section to be visible
  await testimonialsHeader.waitFor({ state: 'visible' });

  // Capture screenshot with the testimonials section in view
  await captureScreenshot(page, 'home-page', 'testimonials', testimonialsHeader);
});