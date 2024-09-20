import {test , expect}  from '@playwright/test'

test ('login applidemo', async ({page}) => {

    await page.goto ('https://demo.applitools.com/')
    await page.pause()
    console.log('TEST RUN SUCCESS')
    await page.locator ('id=username').fill('TEST123456')
    await page.locator('id=password').fill('TESTTEST')
    await page.waitForSelector('id=log-in',{timeout:5000})
    await  expect(page.locator('id=log-in')).toHaveCount(1)
    await page.locator('id=log-in').click()
    console.log('TEST RUN SUCCESS  2')

});

test.only ('login demo', async ({page}) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.pause()
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.getByRole('heading', { name: 'Dashboard' }).click();
    await page.getByPlaceholder('Search').click();
    await page.getByRole('button', { name: '' }).click();
    await page.locator('div').filter({ hasText: /^Dashboard$/ }).click();
    await page.locator('a').filter({ hasText: 'Dashboard' }).click();
    await page.getByText('AlfaTest 61 Beta').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
  
    // ---------------------
   


    
})