const { assert } = require('console');
var obj = require("./Loginelements.js");
var d = require("./Logindata.js");
const { browser } = require('protractor');
var commonf = require("./Commonfunction");

describe('Transfer Initiation',function(){

    beforeEach(function () {
        commonf.getURL();
        commonf.login(d.logindataPass.Correctuserpass.user, d.logindataPass.Correctuserpass.passw);
        commonf.selectCompany();
    })


    it('Initiate transfer', function () {


        element(by.xpath('//*[@id="navigation"]/li[6]')).click();
        element(by.xpath('//*[@id="navigation"]/li[6]/ul/li[1]')).click();
        element(by.xpath('//*[@id="Select1_chosen"]')).click();
        element(by.xpath('//*[@id="Select1_chosen"]')).element(by.css('.chosen-results')).element(by.css('li.active-result[data-option-array-index="' + 1 + '"]')).click();
        element(by.xpath('//*[@id="content"]/div/div/div[1]/section/form/div/div[3]/div')).click();
        element(by.xpath('//*[@id="content"]/div/div/div[1]/section/form/div/div[3]/div')).element(by.css('.chosen-results')).element(by.css('li.active-result[data-option-array-index="' + 1 + '"]')).click();


        element(by.xpath('//*[@id="table1"]/tbody/tr[1]/td[1]')).click();

        element(by.id('btnRelocate')).click();
        expect(element(by.id('assetTransfer')).isDisplayed()).toBe(true);
        element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[1]/div/div[4]/div')).click();
        element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[1]/div/div[4]/div')).element(by.css('.chosen-results')).element(by.css('li.active-result[data-option-array-index="' + 1 + '"]')).click();

        var picker = element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[2]/div/div[1]/input'));
        picker.click();
        picker.clear();
        picker.sendKeys('27-Dec-2020');
        element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[2]/div/div[2]')).element(by.id('Textarea1')).sendKeys('Transfer the asset');

        var path = require('path');
        var photoupload = element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[2]/div/div[4]')).element(by.id('uploadTransfered'));
        var fileToUpload = 'Screenshot (2).png';
        var absolutePath = path.resolve('C:/Users/DELL/Pictures/Screenshots/', fileToUpload);
        photoupload.sendKeys(absolutePath);
        //browser.sleep(2000);


        var photoupload = element(by.xpath('//*[@id="assetTransfer"]/div/div/div[2]/form/div/div[3]/div/div[1]')).element(by.id('uploadFile'));
        var fileToUpload = 'June_2020.xlsx';
        var absolutePath = path.resolve('C:/Users/DELL/Desktop/Shreyas/Office/Attendance/2020/June/', fileToUpload);
        photoupload.sendKeys(absolutePath);
        //browser.sleep(2000);
        element(by.css('[ng-click="SetOutwardLocationDetails();Asset.$setPristine();"]')).click();

        var toast = element(by.xpath('//*[@id="toast-container"]/div/div/div[2]'));
        if (expect(toast.getText()).toEqual('Asset transfer initiated successfully.')) {

            console.log("Asset transfer initiated successfully.");
        }
        else {
            console.log("Error");
        }

        console.log("test");

    })
})