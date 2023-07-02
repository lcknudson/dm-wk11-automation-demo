// Here we need to Import By, which will allow us to either css or xpat selectors in our code
const { By } = require('selenium-webdriver')

const search = async (driver, searchTerm) => {

    //We are starting with an await since we're dealing with promises and the browers
    //We have our automation find teh element with we can then use the senKeys method to type
    //into that element, and the \n to hit enter after typing the search term
    await driver.findElement(By.name('q')).sendKeys(`${searchTerm}\n`)

    //We are then setting a variable to be the text from the results of our Google search
    //Instaed of using the sendkeys method, we are using the getText method with will return
    //the text in that element as a string
    let resultsText = await driver.findElement(By.id('res')).getText()

    //This console log let's us see what was actually returned
    // console.log({ resultsText })

    //We make our results lower case and then expect it to contain our original search term
    expect(resultsText.toLowerCase()).toContain(searchTerm.toLowerCase())
}

module.exports = {
    search
}
