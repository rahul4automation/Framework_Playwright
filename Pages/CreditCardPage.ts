import { Assertion, assert, expect } from "chai";

export class CreditCardPage {
    public pageObjects = {

        CreditCard: (option: string) => `//a[contains(text(),'${option}')]`,
        myBestBuyCreditCard: (option: string) => `//h1[contains(text(),'${option}')]`,
        signInButton: `//h3[contains(text(),'Already a Cardmember?')]/..//a[contains(text(),'Sign in')]`,
        emailUsername: `//input[@type='email']`,
        emailPassword: `//input[@type='password']`,
        userName: (option: string) => `//label[contains(text(),'${option}')]`,
        userPassword: (option: string) => `//label[contains(text(),'${option}')]`,
        SignInButtonLink:`//button[@type='submit']`




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

    public async signInToCreditCardPage(userName: string, PassWord: string) {
        let loginButton = await global.page.locator(this.pageObjects.signInButton).textContent();
        expect(loginButton).to.equal('Sign in');
        await global.page.locator(this.pageObjects.signInButton).click();
        await global.page.locator(this.pageObjects.emailUsername).type(userName);
        await global.page.locator(this.pageObjects.emailPassword).type(PassWord);
        await global.page.locator(this.pageObjects.SignInButtonLink).click();
        await global.page.waitForTimeout(5000);

    }
}