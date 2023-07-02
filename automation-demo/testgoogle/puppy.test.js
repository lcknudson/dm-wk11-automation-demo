// These are John's boiler plate code lines

const { Builder, Capabilities, By } = require("selenium-webdriver");
require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

test("Google Search Test: Puppy", async () => {
    await driver.get('https://www.google.com/');
    console.log('Here')
    // await driver.findElement(By.xpath(`//input[@name='q']`)).sendKeys('Puppy\n') //this code worked for John in the demo. I could not make it work. //copied from brower //*[@id="APjFqb"]
    await driver.findElement(By.xpath(`//*[@id="APjFqb"]`)).sendKeys('Puppy\n') //this code worked for John in the demo. I could not make it work. //copied from brower //*[@id="APjFqb"]
    // await driver.findElement(By.name('q')).sendKeys(`Puppy\n`)
    await driver.findElement(By.xpath("//*[@id='cnt']/div[5]/div/div/div[1]/div[1]/div/a[1]/div")).click()
    //John's version that I could not make work 
    // await driver.findElement(By.xpath("//a[text()='Images'")).click()

    let text = await driver.findElement(By.xpath("//div[@role='main']")).getText()    
    const resultText = text.toLowerCase()

    expect(resultText).toContain('puppy');
    driver.quit()

    
  });
