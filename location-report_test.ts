Feature('location-report');

Scenario('download and save CO Location report', async ({ I }) => {
    I.amOnPage('/');
    tryTo(() => I.click('Click Here to Start Over', '.SessionMessageContainer'));
    tryTo(() => I.click('Click here'));
    I.waitForClickable('Find Sales and Use Tax Rates');
    I.click('Find Sales and Use Tax Rates');
    I.waitForClickable('View Business Location Rates');
    I.retry().click('View Business Location Rates');
    I.see('Colorado Account Number');

    await retryTo((tryNum) => {
        I.clearField('Colorado Account Number');
        I.fillField('Colorado Account Number', '94608811');
        I.seeInField('Colorado Account Number', '94608811');
    }, 3);

    
    I.click('.DocTableHeader');
    
    // pause();

    I.handleDownloads('downloads/COLocationReport.txt');
    I.click('Export');
    I.amInPath('output/downloads');
    // I.waitForFile('COLocationReport.txt', 5); // not working
});
