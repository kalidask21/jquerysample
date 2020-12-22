const puppeteer = require('puppeteer');
console.log('PUP is started');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.waitForSelector('input[id=fakebox-input]')
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();