import { test, expect } from '@playwright/test';

test('Search women clothing on Amazon', async ({ page }) => {

    // 1. Open Amazon
    await page.goto('https://www.amazon.in/');
    const continueShopping = page.getByRole('button', {
        name: 'Continue Shopping'
    });

    if (await continueShopping.isVisible()) {
        await continueShopping.click();
    }

    // 2. Search for women's clothing
    await page
        .getByRole('searchbox', { name: 'Search Amazon.in' })
        .fill("women's clothing");

    // 3. Click Search
    await page
        .getByRole('button', { name: 'Go', exact: true })
        .click();

    // 4. Select Dress
    await page
        .getByRole('link', { name: 'Dress', exact: true })
        .click();

    // Check whether "Get It Today" exists
    console.log(
        'Get It Today count:',
        await page.getByText('Get It Today', { exact: true }).count()
    );

    // 5. Select Free Shipping
    await page
        .getByRole('link', { name: 'Free Shipping' })
        .click();

    // 6. Open product in new page
    const page1Promise = page.waitForEvent('popup');

    await page
        .getByRole('link', {
            name: "Women's Rayon Printed"
        })
        .first()
        .click();

    const page1 = await page1Promise;

    // 7. Select size L
    await page1
        .getByRole('radio', { name: 'L', exact: true })
        .click();

    // 8. Add clothing product to cart
    await page1
        .getByRole('button', {
            name: 'Add to cart',
            exact: true
        })
        .click();
    await page1.getByRole('link', { name: 'Mobiles' }).click();
    await page1.getByRole('link', { name: 'Smartphones & Basic Mobiles' }).click();
    await page1.getByRole('link', { name: 'OPPO Reno 16 5G 12GB+256GB Twilight Violet' }).click();
    await page1.getByRole('button', { name: 'Add to cart' }).click();




// 11. Find Televisions
await page1.pause();
});