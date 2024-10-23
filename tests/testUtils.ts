import fs from 'fs';
import path from 'path';
import { Page, Locator } from 'playwright';

const BASE_URL = 'http://localhost:3000';

const devices = [
  { name: '375-mobile', width: 375, height: 667 },
  { name: '768-tablet', width: 768, height: 1024 },
  { name: '1024-laptop-small', width: 1024, height: 768 },
  { name: '1366-laptop', width: 1366, height: 768 },
  { name: '1920-desktop', width: 1920, height: 1080 },
  { name: '2560-desktop-large', width: 2560, height: 1440 }
];

export async function captureScreenshot(page: Page, testName: string, pageName: string, elementToFocus?: Locator) {
  const screenshotBaseDir = path.join('tests', 'screenshots', testName);
  const screenshotDir = path.join(screenshotBaseDir, pageName);

  // Ensure the directory exists
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  } else {
    // Delete existing screenshots in this directory
    fs.readdirSync(screenshotDir).forEach((file) => {
      const filePath = path.join(screenshotDir, file);
      if (file.endsWith('.png')) {
        fs.unlinkSync(filePath);
      }
    });
  }

  for (const device of devices) {
    console.log(`Capturing screenshot for ${device.name} view of ${pageName}`);
    await page.setViewportSize({ width: device.width, height: device.height });
    await page.waitForLoadState('networkidle');

    // If an element to focus is provided, scroll it into view
    if (elementToFocus) {
      await elementToFocus.scrollIntoViewIfNeeded();
      // Wait a bit for any animations to complete
      await page.waitForTimeout(500);
    }
    
    const fileName = `${device.name}.png`;
    await page.screenshot({
      path: path.join(screenshotDir, fileName),
    });

    // Reset viewport size after capturing mobile screenshot
    if (device.name === 'mobile') {
      await page.setViewportSize({ width: device.width, height: device.height });
    }
  }
}

export async function setupPage(page: Page, route: string) {
  await page.goto(`${BASE_URL}${route}`);
  await page.waitForLoadState('networkidle');
}