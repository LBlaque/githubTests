var fillPage = (browser, myData) => {
    browser
        .click('button')
        // .waitForElementVisible(`#loanTypes option[value="${myData.loantype}"]`)
        .click(`#loanTypes option[value="${myData.loantype}"]`)
        // .waitForElementVisible(`#propertyTypes option[value="${myData.propertytype}"]`)
        .click(`#propertyTypes option[value="${myData.propertytype}"]`)
        .click('button')
        .waitForElementVisible('input[type="text"]',)
        .setValue('input[type="text"]', myData.city)
        // .verify.containsText('input[type="text"]', myData.cityResult)
        .click('button')
        .waitForElementVisible('button[value="Primary Home"]')
        .click('button[value="Primary Home"]')
        .waitForElementVisible('button[name="yesButton"]')
        .click('button[name="yesButton"]')
        .waitForElementVisible('button[name="yesButton"]')
        .click('button[name="yesButton"]')
        .waitForElementVisible('input[name="price"]')
        .setValue('input[name="price"]', myData.price)
        // .verify.containsText('input[name="price"]', myData.priceResult)
        .setValue('input[name="down"]', myData.downPay)
        // .verify.containsText('input[name="down"]', myData.downPayResult)
        .click('button')
        .waitForElementVisible('button[value="good"]')
        .click('button[value="good"]')
        .waitForElementVisible('button[value="Has never been in bankruptcy"]')
        .click('button[value="Has never been in bankruptcy"]')
        .waitForElementVisible('#addressOne')
        .setValue('#addressOne', myData.street)
        .setValue('#addressThree', myData.city)
        .click('button')
        .waitForElementVisible('#first')
        .setValue('#first', myData.first)
        .setValue('#last', myData.last)
        .setValue('#email', myData.email)
        .click('button')
        .verify.containsText('p[class="name p2"]', myData.nameResult)
        .verify.containsText('p[class="email p2"]', myData.emailResult)
        .verify.containsText('p[class="loanType p2"]', myData.loantypeResult)
        .verify.containsText('p[class="propertyType p2"]', myData.propertytypeResult)
        .verify.containsText('p[class="city p2"]', myData.cityResult)
        .verify.containsText('p[class="propertyPurpose p2"]', 'Primary Home')
        .verify.containsText('p[class="found p2"]', 'True')
        .verify.containsText('p[class="agent p2"]', 'True')
        .verify.containsText('p[class="price p2"]', myData.priceResult)
        .verify.containsText('p[class="downPayment p2"]', myData.downPayResult)
        .verify.containsText('p[class="creditScore p2"]', 'Good')
        .verify.containsText('p[class="creditHistory p2"]', 'Has never been in bankruptcy')
        .verify.containsText('#addressOne', myData.streetResult)
        .verify.containsText('#addressThree', myData.cityResult)
        .click('button[name="sendButton"]')
        .waitForElementVisible('button[class="margin-btn"]')
        .click('button')
}
var myData = [
    {
        loantype: 'Refinance',
        loantypeResult: 'Refinance',
        propertytype: 'Condo',
        propertytypeResult: 'Condo',
        price: '250,000',
        priceResult: '250,000',
        downPay: '15,000',
        downPayResult: '15,000',
        street: '1050 North 200 west',
        streetResult: '1050 North 200 west',
        city: 'San Bernardino',
        cityResult: 'San Bernardino',
        first: 'Sasquatch',
        last: 'Hungerman',
        nameResult: 'Sasquatch Hungerman',
        email: 'MrHungerman1230@gmail.com',
        emailResult: 'MrHungerman1230@gmail.com',
    },
    {
        loantype: 'Home Equity',
        loantypeResult: 'Home Equity',
        propertytype: 'Town Home',
        propertytypeResult: 'Town Home',
        price: '300,000',
        priceResult: '300,000',
        downPay: '20,000',
        downPayResult: '20,000',
        street: '700 north on the moon',
        streetResult: '700 north on the moon',
        city: 'Outer Space',
        cityResult: 'Outer Space',
        first: 'Moon',
        last: 'Man',
        nameResult: 'Moon Man',
        email: 'inOrbit@flyingHigh.com',
        emailResult: 'inOrbit@flyingHigh.com',
    },
    {
        loantype: 'Refinance',
        loantypeResult: 'Refinance',
        propertytype: 'Multi Family Dwelling',
        propertytypeResult: 'Multi Family Dwelling',
        price: '80,000,000',
        priceResult: '80,000,000',
        downPay: '1,000,000',
        downPayResult: '1,000,000',
        street: 'big castle on the left cant miss it',
        streetResult: 'big castle on the left cant miss it',
        city: 'Translyvania',
        cityResult: 'Translyvania',
        first: 'Vlad III',
        last: 'Dracula',
        nameResult: 'Vlad III Dracula',
        email: 'Dracula@vampiresonly.com',
        emailResult: 'Dracula@vampiresonly.com',
    }
]
module.exports = {
    beforeEach: browser => {
        browser.url('localhost:3000/#/')
    },
    after: browser => {
        browser.pause(5000)
    },
    // 'Home Loan Test 1': browser => {
    //     fillPage(browser, myData[0])
    //     fillPage(browser, myData[1])
    // },
    'Homeloan forEach Loops': browser => {
        myData.forEach(boogerSugar => {
            fillPage(browser, boogerSugar)
        })
    }
}