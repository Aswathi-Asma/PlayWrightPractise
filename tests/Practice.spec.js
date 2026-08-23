import{test , expect} from '@playwright/test';
test('Practice' , async({page}) => {
    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.getByRole('textbox', { name: 'Username' }).fill('student');
    await page.getByRole('textbox', {name: 'Password'}).fill('Password123');
    await page.getByRole('button', {name: 'Submit'}).click();
    await expect(page).toHaveTitle(/Logged In Successfully/);
    await expect(page).toHaveTitle(/Logged In/);
    await page.pause();
})
