const { element } = require("protractor");

function login()
{

    this.username = element(by.model('email'));
    this.password = element(by.model('pass'));
    this.submitlogin = element(by.css('[ng-click="login(email,pass)"]'));
    this.FailURL = 'https://quality.assetrak.net/#/core/login';
    this.SuccessURL = 'https://quality.assetrak.net/#/core/HomeController';
      
}

module.exports = new login();