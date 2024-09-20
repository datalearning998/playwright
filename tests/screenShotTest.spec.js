import test , {page ,expect} from '@playwright/test'
test ('screen shot demo', async ({page} ) => {

    await page.goto('https://www.google.com/')
    await expect(page).toHaveScreenshot()

})


//  color
//pixels
//size
