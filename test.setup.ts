
//require('module-alias/register');

import { BeforeAll, AfterAll, Before, After, setDefaultTimeout, AfterStep } from '@cucumber/cucumber';
import { Page, BrowserContext ,chromium } from 'playwright';

//import {chromium} from "playwright"




//process.env.testCaseName = '';

setDefaultTimeout(2 * 60000);
declare global {
    var actionDriver: any;
    var apiDriver: any;
    var pageList:Page[]
    var page : Page
    var context :BrowserContext;

}




BeforeAll(async () => {

    let browser = await chromium.launch({ headless: false, slowMo: 1000, channel: "chrome"});
    global.context =  await browser.newContext({ ignoreHTTPSErrors: true,acceptDownloads: true ,viewport:{width:1552,height:840}});
    global.page = await  global.context.newPage();

   });


Before(async (testCase) => {

});

AfterStep(async function (step) {

});

After(async () => {

});

After(async () => {

});

AfterAll(async () => {

});


export {}