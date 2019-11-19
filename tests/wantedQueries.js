var inputFill = function (pageObjects, data) {
    // steps for your search go here
        pageObjects
            .waitForElementVisible('@hdr')
            .setValue('@hdr', data.hdr)
            .waitForElementVisible('@mke')
            .setValue('@mke', data.mke)
            .waitForElementVisible('@oai')
            .setValue('@oai', data.oai)
            .waitForElementVisible('@name')
            .setValue('@name', data.name)
            .waitForElementVisible(`[name="sexInput"] option[value="${data.sex}"]`)
            .click(`[name="sexInput"] option[value="${data.sex}"]`)
            .waitForElementVisible(`[name="racInput"] option[value="${data.race}"]`)
            .click(`[name="racInput"] option[value="${data.race}"]`)
            .waitForElementVisible('@hgt')
            .setValue('@hgt', data.hgt)
            .waitForElementVisible('@wgt')
            .setValue('@wgt', data.wgt)
            .waitForElementVisible('@hair')
            .setValue('@hair', data.hair)
            .waitForElementVisible('@offense')
            .setValue('@offense', data.offense)
            .waitForElementVisible('@dow')
            .setValue('@dow', data.dow)
            .waitForElementVisible('@oln')
            .setValue('@oln', data.oln)
            .waitForElementVisible('@ols')
            .setValue('@ols', data.ols)
            .waitForElementVisible('@old')
            .setValue('@old', data.old)
            .waitForElementVisible('@lic')
            .setValue('@lic', data.lic)
            .waitForElementVisible('@lis')
            .setValue('@lis', data.lis)
            .waitForElementVisible('@lid')
            .setValue('@lid', data.lid)
}
var clearValues = function (pageObjects) {
    pageObjects
    .waitForElementVisible('@hdr')
    .clearValue('@hdr')
}
var sasquatch = {}
module.exports = {
    beforeEach: browser => {
        sasquatch = browser.page.enterWanted()
        sasquatch
            .navigate()
    },
    after: browser => {
        sasquatch
            .end()
    },
    'Wanted-Queries': browser => {
        inputFill(sasquatch, {hdr: '1234567890', mke: 'GOOD', oai: '123456789', name: 'John Doe', sex: 'U', race: 'U', hgt: '600', wgt:'190', hair: 'brown', offense: 'Treason', dow: '07/09/1997', oln: 'GWA12394182', ols:'CA', old: '07/31/2020', lic: 'GU21348', lis: 'UT', lid: '03/04/2020' })
        sasquatch
        .click('@submit')
        // .expect.element('@queryBody').contains.text('1234567890.GOOD.123456789.John Doe.U.U.600.190.brown.Treason.1997-07-09.GWA12394182.CA.2020-07-31.GU21348.UT.2020-03-04')
        .api.pause(5000)
    },
}