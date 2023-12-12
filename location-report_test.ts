import request from './request.json';

Feature('location-report');

Scenario('download and save CO Location report', async ({ I }) => {
    I.amOnPage('/');
    tryTo(() => I.click('Click Here to Start Over', '.SessionMessageContainer'));
    tryTo(() => I.click('Click here'));
    I.retry({ retries: 3, minTimeout: 200 }).click('Find Sales and Use Tax Rates');
    I.retry({ retries: 3, minTimeout: 200 }).click('View Business Location Rates');
    

    await retryTo(() => {
        I.see('Colorado Account Number');
        I.clearField('Colorado Account Number');
        I.fillField('Colorado Account Number', request.accountNumber);
        I.seeInField('Colorado Account Number', request.accountNumber);
    }, 3);
    
    I.click('.DocTableHeader');

    I.handleDownloads('downloads/COLocationReport.txt');
    I.click('Export');
    I.amInPath('output/downloads');
    // Handle slow connection, fails when download is not finished
    I.waitForFile('COLocationReport.txt', 10);
});
