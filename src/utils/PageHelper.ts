import { expect, Page } from '@playwright/test';

export class PageHelper {
  static async waitForElement(page: Page, selector: string, timeout: number = 5000): Promise<void> {
    await page.locator(selector).waitFor({ state: 'visible', timeout });
  }

  static async clickElement(page: Page, selector: string): Promise<void> {
    await page.locator(selector).click();
  }

  static async fillInput(page: Page, selector: string, text: string): Promise<void> {
    await page.locator(selector).fill(text);
  }

  static async getText(page: Page, selector: string): Promise<string> {
    return await page.locator(selector).textContent() || '';
  }

  static async verifyPageTitle(page: Page, expectedTitle: string): Promise<void> {
    const actualTitle = await page.title();
    expect(actualTitle).toContain(expectedTitle);
  }

  static async verifyURL(page: Page, expectedURL: string): Promise<void> {
    expect(page.url()).toContain(expectedURL);
  }

  static async takeScreenshot(page: Page, name: string): Promise<void> {
    await page.screenshot({ path: `screenshots/${name}.png` });
  }
}
