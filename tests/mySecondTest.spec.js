const {test , expect} = require('@playwright/test')

// writing test

/*test ('My first test', () =>{
    console.log('test sucess')
})*/

// writing test case with fixture

test ('My browser test', async ({page}) =>{

    await page.goto ('https://www.google.com/')
    await expect(page).toHaveTitle('Gooogle')
    console.log('UI TEST RUN SUCCESS')
})