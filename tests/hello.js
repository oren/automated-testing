this.testTitle = function (browser) {
  browser
    .url("localhost:3000")
    .waitForElementVisible('body', 1000)
    .assert.containsText('.title', 'Nightwatch')
    .end();
};
