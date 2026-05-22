import { page } from '@playwright/test';

export class AmazonPage {

    static productsButton(page) {
        return page.locator('a[href="/products"]');
    }

    static cartButton(page) {
        return page.getByRole('link', { name: /cart/i });
    }

};

