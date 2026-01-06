import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  // Selectors
  readonly searchInput = 'input[class*="search"]';
  readonly categorySection = '.ps-customization';
  readonly productCard = '.product-item';
  readonly saleButton = 'a[href*="special-prices"]';
  readonly cartButton = 'button[class*="cart"]';
  readonly logo = 'img[alt*="logo"]';

  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateToBaseUrl();
    await this.waitForPageLoad();
  }

  async isHomePageLoaded(): Promise<boolean> {
    return await this.isElementVisible(this.productCard);
  }

  async getHomePageTitle(): Promise<string> {
    return await this.getPageTitle();
  }

  async searchForProduct(productName: string): Promise<void> {
    await this.page.locator(this.searchInput).fill(productName);
    await this.page.locator(this.searchInput).press('Enter');
  }

  async isLogoVisible(): Promise<boolean> {
    return await this.isElementVisible(this.logo);
  }

  async getProductCount(): Promise<number> {
    return await this.page.locator(this.productCard).count();
  }

  async clickOnSaleSection(): Promise<void> {
    await this.page.locator(this.saleButton).click();
    await this.waitForPageLoad();
  }

  async clickOnCart(): Promise<void> {
    await this.page.locator(this.cartButton).click();
    await this.waitForPageLoad();
  }
}
