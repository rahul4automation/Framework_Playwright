import { Assertion, assert, expect } from "chai";

export class CreditCardPage {
    public pageObjects = {

        CreditCard: (option: string) => `//a[contains(text(),'${option}')]`,
        myBestBuyCreditCard: (option: string) => `//h1[contains(text(),'${option}')]`
        



    }

    public async verifyCreditCardLink(option: string) {
        await global.page.waitForTimeout(1000);
        let credtcardtext = await global.page.locator(this.pageObjects.CreditCard(option)).textContent();
        expect(credtcardtext).to.equal('Credit Cards');
    }


    public async clickOnCreditCardLink(option: string) {
        await global.page.waitForTimeout(1000);
        await global.page.locator(this.pageObjects.CreditCard(option)).click();
        await global.page.waitForTimeout(1000);
        

    }

    public async verifBestBuyCard(option: string) {
        await global.page.waitForTimeout(1000);
        let bestbuycreaditcardpage = await global.page.locator(this.pageObjects.myBestBuyCreditCard(option)).textContent();
        expect(bestbuycreaditcardpage).to.equal('My Best Buy® Credit Cards');
    }


}