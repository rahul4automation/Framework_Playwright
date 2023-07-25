import { Given, Then, When, DataTable } from '@cucumber/cucumber';
import "../test.setup";
import { LandingPage } from '../Pages/landinPage';

let landingpage = new LandingPage();

Given('I launch Best buy landing page', async () => {

    await global.page.goto("https://www.bestbuy.com/?intl=nosplash")

});

Then('User able to Validate {string} button', async (option) => {
    await landingpage.ValidateTextOnLoginPage(option)

});



Then('Verify the below texts are displayed on shop page', async (dataTable: DataTable) => {
    const dataFormed = dataTable.raw();
    for (let index = 0; index < dataFormed.length; index++) {
        const element = dataFormed[index][0];
        await landingpage.verifyVisiblityOfText(element);
    }


});


Then('Verify the below texts are displayed on deal page', async (dataTable: DataTable) => {
    const dataFormed = dataTable.raw();

    for (let index = 0; index < dataFormed.length; index++) {
        const element = dataFormed[index][0];
        await landingpage.verifyVisiblityofDealPage(element);
    }

});

When('User click on MoreButton to validate All the opptions' ,async() =>
{    
     await global.page.waitForTimeout(1000);
      await landingpage.clickOnMoreButton();
});


Then('Verify the below texts are displayed on more dropdown options', async (moreDataTable: DataTable) => {
    const optiondata = moreDataTable.raw();
    console.log("value is :",optiondata);
    for (let index = 0; index < optiondata.length; index++) {
        const element = optiondata[index][0];
        await landingpage.verifyVisiblityofMoreDropDownOptions(element);
    }

});