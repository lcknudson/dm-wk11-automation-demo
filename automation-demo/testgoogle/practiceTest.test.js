const { By, Builder, Browser, until, Key, Capabilities } = require("selenium-webdriver");

require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const { search } = require('./search');

beforeAll(async () => {
  await (await driver).get("https://www.google.com/")
});


// Build a new driver for each test, this wasn't in John's demo, so I commented it out
// beforeEach(async() => {
//   let driver = await new Builder().forBrowser(Browser.CHROME).build();
//   console.log('Before')
// });



// Quit a driver after each test
afterEach(async() => {
  // if comment out the code below it will keep google open to see what it did
  // await (await driver).quit();
  console.log('after')
});

// describe("Test the Google homepage", () => {
//   test("can search Google for 'Selenium'", async () => {
//     // Navigate to google.com
//     await driver.get("https://www.google.com/");

//     // Locate the search bar and send the search term to it
//     await driver.findElement(By.name('q')).sendKeys("selenium", Key.RETURN);
//     // Wait until the title of the page changes to include the search term
//     await driver.wait(until.titleIs("selenium - Google Search"), 1000);
//   });
// });

test("Google Search Test", async() => {
  await search(driver, "Tenet")
  console.log('googled Tenet')
})
