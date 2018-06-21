module.exports = function() {
    this.Given(/^I go to "([^"]*)"$/, function(site) {
        browser.get(site);
    });
    this.When(/^I add "{int1}" in  first textbox/, function(int1){
        firsttextbox = ptor.findElement(protractor.By.ng-model('first'));
        expect(firsttextbox.getText()).toEqual(int1);
    });
    this.Add(/And I change "{valeu1}" in drop-down-list/,function(valeu1) {
        lement.all(by.ng-model('operator')).then(function(options){
            options[valeu1].click();
        })
    this.Add(/^I add "{int2}" in  first textbox/, function(int2){
        secondtextbox = ptor.findElement(protractor.By.ng-model('second'));
        expect(secondtextbox.getText()).toEqual(int2);
    });
        this.Add(/I click the {Go} button/, function(Go){
            element(by.partialButtonText(Go)).click();
        });
        Then(/I should see "{text}" in resutl label/, function(text) {
            return expect(browser.getTitle()).to.eventually.equal(text);
        });
}