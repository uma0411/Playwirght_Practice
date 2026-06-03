import {test} from '@playwright/test'
import { AmazonPage } from '../pom/amazonPage'

test('test1', async ({page})=>{
    await page.goto('https://google.com')
    
}
)