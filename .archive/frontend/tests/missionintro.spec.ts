
// mission-intro.test.ts
import { test } from '@playwright/test';
import { captureScreenshot, setupPage } from './testUtils';

test('mission intro section', async ({ page }) => {
  await setupPage(page, '/');

  // Locate the mission intro section
  const missionIntroSection = page.locator('section:has-text("Hoverboard is on a mission to help schools transform with the digital revolution")');
  
  // Wait for the section to be visible
  await missionIntroSection.waitFor({ state: 'visible' });

  // Capture screenshot with the mission intro section in view
  await captureScreenshot(page, 'home-page', 'mission-intro', missionIntroSection);
});
