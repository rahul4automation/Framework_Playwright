import { Assertion, assert, expect } from "chai";

export class LandingPage {
    public pageObjects = {
        AccountButton: (option: string) => `//span[contains(text(),'${option}')]`,
        DealPageText: (option: string) => `//a[contains(text(),'${option}')]`,
    


    }


    public async ValidateTextOnLoginPage(option: string) {
        let accountbutton = await global.page.locator(this.pageObjects.AccountButton(option)).textContent();
        await global.page.waitForTimeout(1000);
        expect(accountbutton).to.equals("Recently Viewed")
    }


    public async verifyVisiblityOfText(text: string) {
        const isDisplayed = await global.page.locator(this.pageObjects.AccountButton(text)).isVisible();
        expect(isDisplayed).to.equals(true);
    }


    public async verifyVisiblityofDealPage(text: string) {
        const isDisplayed = await global.page.locator(this.pageObjects.DealPageText(text)).isVisible();
        await global.page.waitForTimeout(1000);
        expect(isDisplayed).to.equals(true);
    }

};
