module.exports = {
    url:'localhost:3000/#/enter',
    elements: {
        hdr: 'input[name="hdrInput"]', //9-19 characters in length, any allowed
        mke: 'input[name="mkeInput"]', //2-4 alpha/special characters in length
        oai: 'input[name="oriInput"]', //9 alphanumeric characters in length
        name: 'input[name="namInput"]', //3-30 characters in length, any allowed
        hgt: 'input[name="hgtInput"]', //3 characters in length, numeric only in FII format, where F is feet and I is inches
        wgt: 'input[name="wgtInput"]', //1-3 characters in length, numeric only in lbs, leading zeros to be entered systematically as necessary to change the length to 3 characters in the assembled query.
        hair: 'input[name="haiInput"]', //3-10 characters in length, alpha only
        offense: 'input[name="offInput"]', //5-15 characters in length, any allowed
        dow: 'input[name="dowInput"]', //10 characters in length, numeric in MM/DD/YYYY format (allows dates from 1900 to today +1 day, to account for time zone differences
        oln: 'input[name="olnInput"]', //1-20 characters in length
        ols: 'input[name="olsInput"]',
        old: 'input[name="oldInput"]', //2 characters in length
        lic: 'input[name="licInput"]', //10 characters in length, numeric in MM/DD/YYYY format
        lis: 'input[name="lisInput"]', //5-8 alphanumeric characters in length
        lid: 'input[name="lidInput"]', //2 characters in length
        submit: 'button[id="saveBtn"]', //10 characters in length, numeric in MM/DD/YYYY 
        queryBody: 'span[name="queryBody"]',
    },
}