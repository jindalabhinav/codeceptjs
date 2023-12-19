Feature('auto_heal');

Scenario('test something',  ({ I }) => {
    I.amOnPage('/');
    I.fillField('Username', 'abhinav');
    I.fillField('Password', 'abcd1234');
    I.click('Login');
    pause();
});
