
const { assert } = require('console');
var obj = require("./Loginelements.js");
var d = require("./Logindata.js");
var using = require('jasmine-data-provider');
const { browser } = require('protractor');
var commonf = require("./Commonfunction");


describe("Login",function(){
    beforeEach(function(){
        commonf.getURL();
 
    }) 
    
    using(d.logindataFail, function (data, description) {
        it('Login in AsseTrak Failed Cases', function () {
            commonf.login(data.user, data.passw);
            browser.getCurrentUrl().then(function (a) {
                expect(a).toEqual(obj.FailURL)
                if(a==obj.FailURL)
                {
                    console.log('Test is complete : '+a)
                }  
                else
                {
                    console.log('Test is failed because URL: '+a)
                } 
            })

        })
    }) 


    it('Login in AsseTrak Pass Case',function(){  
        commonf.login(d.logindataPass.Correctuserpass.user,d.logindataPass.Correctuserpass.passw);
        browser.getCurrentUrl().then(function(a){
            expect(a).toEqual(obj.SuccessURL)
            if(a==obj.SuccessURL)
            {
                console.log('Test is complete : '+a)
            }  
            else
            {
                console.log('Test is failed because URL: '+a)
            } 
        })   
    
    })
    
})

