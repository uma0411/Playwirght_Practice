import { test } from '@playwright/test';
import { AmazonPage } from '../pom/amazonPage';

test('test case 1', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    await AmazonPage.productsButton(page).click();
    await page.waitForTimeout(3000);

    await AmazonPage.cartButton(page).click();
    await page.waitForTimeout(3000);
    const title=await page.title();
    const text=await page.w
    console.log("Page title is",title)
    console.log("test message")

});