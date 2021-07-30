// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

    // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../Specs/TransferInitiation.js'],
  //specs: ['../Specs/Test.js','../Specs/Test3.js','../Specs/Test2.js','../Specs/Test4.js','../Specs/Test5.js'],

 
  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 300000
  },

  onPrepare : function()
  {
    browser.manage().window().maximize();
    //browser.waitForAngularEnabled(false);
  }
};
