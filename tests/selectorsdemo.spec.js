import  {test ,expect } from '@playwright/test'

test (' Selectors demo', async ({page}) => {
    await page.goto ('https://www.saucedemo.com/')
    await page.pause()//
    await page.locator('id=user-name').fill('TESTtttttttttttttttttttttttt')
    await page.locator('anylocator').click
    await page.click('anyloactor')
    await page.pause
});
