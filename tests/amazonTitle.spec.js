import { test, expect } from '@playwright/test';
import amazonPage from '../pom/amazonPage';
test('has title', async ({ page }) => {
  const amazonPage = new amazonPage();
  amazonPage.

  await page.goto('https://flipkart.com', { waitUntil: 'load' });
  await page.waitForLoadState('domcontentloaded');
  test.setTimeout(12000);
  let title = await page.title({ timeout: 10_000 });
  // Expect a title "to contain" a substring.
  console.log(title, "title check");
  test.setTimeout(12000);
  const closebtn = await page.getByRole('button', { name: '✕' })
  if (closebtn.isVisible()) {
    closebtn.click();
  }


  // const search= page.locator('input[name="q"]:not([readonly])');
  await amazonPage.search(page).fill('iphone');
  await amazonPage.search(page).press('Enter');

  // await page.press('Enter')
  console.log("iphone text")




});



