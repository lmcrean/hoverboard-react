import fs from 'fs';
import path from 'path';

const BASE_URL = 'http://localhost:8080';

import { Page } from 'playwright';

export async function captureScreenshot(page: Page, testName: string, pageName: string) {
    const devices = [
      { name: 'mobile', width: 375, height: 667 },
      { name: 'tablet', width: 768, height: 1024 },
      { name: 'laptop-small', width: 1024, height: 768 },
      { name: 'laptop', width: 1366, height: 768 },
      { name: 'desktop', width: 1920, height: 1080 }
    ];
  
    const screenshotDir = path.join('tests', 'screenshots', testName);
  
    // Ensure the directory exists
    if (!fs.existsSync(screenshotDir)) {
      fs.mkdirSync(screenshotDir, { recursive: true });
    }
  
    for (const device of devices) {
      console.log(`Capturing screenshot for ${device.name} view of ${pageName}`);
      await page.setViewportSize({ width: device.width, height: device.height });
      await page.waitForLoadState('networkidle');
      
      const fileName = `${device.name}-${pageName}.png`;
      await page.screenshot({
        path: path.join(screenshotDir, fileName),
        fullPage: false
      });
    }
  }