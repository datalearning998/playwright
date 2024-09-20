
import test , {page ,expect} from '@playwright/test'
test ('assertions demo', async ({page} ) => {
await page.goto("https://demo.applitools.com/")
await page.pause()
await page.getByPlaceholder('Enter your username').click();
  await page.getByPlaceholder('Enter your username').fill('test');
  await page.getByPlaceholder('Enter your password').click();
  await page.getByPlaceholder('Enter your password').fill('test');
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByText('Total Balance').click()
  await expect.soft (page.locator('text=Total Blance')).toBeHidden()
  await expect.soft (page.locator('text=Total Blance')).toBeDisabled()
  await expect (page.locator('text=Total Blance')).toBeVisible()

  // example some assertions will fail

})