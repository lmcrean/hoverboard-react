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

  // Setup directories
  if (!fs.existsSync(screenshotDir)) {
    fs.mkdirSync(screenshotDir, { recursive: true });
  } else {
    fs.readdirSync(screenshotDir)
      .filter(file => file.endsWith('.png'))
      .forEach(file => fs.unlinkSync(path.join(screenshotDir, file)));
  }

  for (const device of devices) {
    console.log(`Capturing screenshot for ${device.name} view of ${pageName}`);
    
    // First set width only
    await page.setViewportSize({ width: device.width, height: 800 });
    await page.waitForLoadState('networkidle');

    if (elementToFocus) {
      await elementToFocus.scrollIntoViewIfNeeded();
      
      // Get element dimensions
      const boundingBox = await elementToFocus.boundingBox();
      if (boundingBox) {
        // Set viewport height to match content with some padding
        await page.setViewportSize({ 
          width: device.width, 
          height: Math.ceil(boundingBox.height + 2000) // Add padding
        });
      }
      await page.waitForTimeout(500);
    }
    
    await page.screenshot({
      path: path.join(screenshotDir, `${device.name}.png`),
      fullPage: true,
    });
  }
}

export async function setupPage(page: Page, route: string) {
  await page.goto(`${BASE_URL}${route}`);
  await page.waitForLoadState('networkidle');
}