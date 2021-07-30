var obj = require("./Loginelements.js");

var commonfunctions = function () {

    this.login = function (usern,passw) {
        obj.username.sendKeys(usern);
        obj.password.sendKeys(passw);
        obj.submitlogin.click();

    }

    this.getURL = function(){
        browser.get('https://quality.assetrak.net/#/core/login');   
    }

    this.selectCompany = function(){
        element(by.css('.chosen-container-single')).click();
        element(by.css('.chosen-results')).element(by.css('li.active-result[data-option-array-index="'+1+'"]')).click();
        element(by.css('[ng-click="Index()"]')).click();
        //browser.waitForAngularEnabled(true);

    }


};

module.exports = new commonfunctions();