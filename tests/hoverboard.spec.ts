import { test, expect } from '@playwright/test';
import { captureScreenshot, setupPage } from './testUtils';

test('homepage content', async ({ page }) => {
  await setupPage(page, '/');

  // Capture initial screenshot
  await captureScreenshot(page, 'home-page', 'landing');

  // Locate the mission intro section
  const missionIntroSection = page.locator('section:has-text("Hoverboard is on a mission to help schools transform with the digital revolution")');
  
  // Wait for the section to be visible
  await missionIntroSection.waitFor({ state: 'visible' });

  // Capture screenshot with the mission intro section in view
  await captureScreenshot(page, 'home-page', 'mission-intro', missionIntroSection);
});