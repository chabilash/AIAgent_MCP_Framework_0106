# Playwright Test Automation Framework

A TypeScript-based test automation framework built with Playwright and Page Object Model (POM) pattern for testing the PrestaShop demo website.

## Project Structure

```
├── src/
│   ├── pages/
│   │   ├── BasePage.ts          # Base class for all pages
│   │   ├── HomePage.ts          # Home page object model
│   │   └── index.ts             # Export all pages
│   ├── data/
│   │   └── testData.ts          # Test data and constants
│   └── utils/
│       └── PageHelper.ts        # Utility methods for page interactions
├── tests/
│   └── homepage.spec.ts         # Test cases for homepage
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Project dependencies
└── README.md                    # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Install Playwright browsers:
```bash
npx playwright install
```

## Running Tests

Run all tests:
```bash
npm test
```

Run tests in UI mode:
```bash
npm run test:ui
```

Run tests in debug mode:
```bash
npm run test:debug
```

Run tests in headed mode (see browser):
```bash
npm run test:headed
```

## Test Features

- **Page Object Model (POM)**: Organized page objects for maintainable tests
- **BasePage**: Abstract base class for common page interactions
- **HomePage**: Specific page object for homepage interactions
- **Test Data**: Centralized test data management
- **PageHelper**: Utility methods for common operations
- **Cross-browser Testing**: Tests run on Chromium, Firefox, and WebKit
- **HTML Reports**: Automatic HTML report generation

## Key Components

### BasePage (src/pages/BasePage.ts)
Base class providing common functionality:
- Navigate to base URL
- Wait for page load
- Get page title and URL
- Check element visibility

### HomePage (src/pages/HomePage.ts)
Home page specific interactions:
- Search for products
- Verify logo visibility
- Get product count
- Navigate to sale section
- Access cart

### Test Cases (tests/homepage.spec.ts)
Basic test scenarios:
1. Navigate to PrestaShop demo base URL
2. Verify logo visibility
3. Verify product cards display
4. Verify page title

## Configuration

### playwright.config.ts
- Base URL: https://demo.prestashop.com/#/en/front
- Screenshot on failure
- Trace on first retry
- Runs on Chromium, Firefox, and WebKit

## Browser Support

- Chromium
- Firefox
- WebKit (Safari)

## Reports

HTML test reports are generated in the `playwright-report` directory after test execution.

```bash
npx playwright show-report
```

## Best Practices Implemented

✓ Page Object Model Pattern
✓ Separation of concerns
✓ DRY principle with BasePage
✓ Centralized test data
✓ Utility methods for common operations
✓ Proper waits and timeouts
✓ Error handling
✓ Clear test descriptions
✓ Logging for debugging
