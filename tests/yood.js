var yood = {}
module.exports = {
    beforeEach: browser => {
        yood = browser.page.yoodlizePage()
        yood
            .navigate()
    },
    after: browser => {
        yood
            .end()
    },
    'Navigating the See All buttons': browser => {
        yood
            .waitForElementPresent('@recSeeAll')
            .click('@recSeeAll')
            .waitForElementPresent('@result')
            .verify.containsText('@result', 'Recreational Vehicles')
            .api.back()
        yood
            .waitForElementPresent('@outSeeAll')
            .click('@outSeeAll')
            .waitForElementVisible('@result')
            .verify.containsText('@result', 'Outdoor Gear')
    },
    'Search Button': browser => {
        yood
            .waitForElementPresent('@srchBar')
            .setValue('@srchBar', 'Nintendo Switch')
            .click('@srchBtn')
            .waitForElementVisible('@result')
            .verify.containsText('@result', 'Nintendo Switch')
            .pause(3000)
            .click('@imgClk')
            .waitForElementVisible('@imgScrn')
    }
}