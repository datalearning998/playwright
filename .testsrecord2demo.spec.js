const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  await page.goto('about:blank');
  await page1.goto('https://www.saucedemo.com/');
  await page1.locator('[data-test="username"]').click();
  await page1.locator('[data-test="username"]').fill('standard_user');
  await page1.locator('[data-test="password"]').click();
  await page1.locator('[data-test="password"]').fill('secret_sauce');
  await page1.locator('[data-test="login-button"]').click();

  // ---------------------
  await context.close();
  await browser.close();
})();