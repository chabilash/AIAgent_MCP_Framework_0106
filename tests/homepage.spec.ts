import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';
import { BASE_URL } from '../src/data/testData';

test.describe('PrestaShop Demo - Navigation Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
  });

  test('should navigate to PrestaShop demo base URL successfully', async ({ page }) => {
    // Navigate to the base URL
    await homePage.navigateToHomePage();

    // Verify page loaded
    const isLoaded = await homePage.isHomePageLoaded();
    expect(isLoaded).toBeTruthy();

    // Verify the URL contains the base URL
    const currentUrl = await homePage.getPageUrl();
    expect(currentUrl).toContain('demo.prestashop.com');
    expect(currentUrl).toContain('/en/front');

    // Verify page title
    const pageTitle = await homePage.getHomePageTitle();
    expect(pageTitle).toBeTruthy();
    console.log(`✓ Successfully navigated to ${currentUrl}`);
    console.log(`✓ Page title: ${pageTitle}`);
  });

  test('should verify logo is visible on homepage', async ({ page }) => {
    // Navigate to homepage
    await homePage.navigateToHomePage();

    // Verify logo is visible
    const isLogoVisible = await homePage.isLogoVisible();
    expect(isLogoVisible).toBeTruthy();
    console.log('✓ Logo is visible on the homepage');
  });

  test('should verify product cards are displayed', async ({ page }) => {
    // Navigate to homepage
    await homePage.navigateToHomePage();

    // Get product count
    const productCount = await homePage.getProductCount();
    expect(productCount).toBeGreaterThan(0);
    console.log(`✓ Found ${productCount} product cards on the homepage`);
  });

  test('should verify page title contains expected text', async ({ page }) => {
    // Navigate to homepage
    await homePage.navigateToHomePage();

    // Verify page title
    const pageTitle = await homePage.getHomePageTitle();
    expect(pageTitle.length).toBeGreaterThan(0);
    console.log(`✓ Page title is: ${pageTitle}`);
  });
});
