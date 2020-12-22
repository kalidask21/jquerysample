/**
 * @name Amazon search
 *
 * @desc Looks for a "nyan cat pullover" on amazon.com, goes two page two clicks the third one.
 */
const puppeteer = require('puppeteer')
const screenshot = 'amazon_nyan_cat_pullover.png'
try {
  (async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 800 })
    await page.goto('https://www.amazon.com')
    await page.type('#twotabsearchtextbox', 'lipstick')
    await page.click('input.nav-input')
    //await page.waitForSelector('#resultsCol')
    await page.screenshot({path: 'amazon_nyan_cat_pullovers_list.png'})
    
  })()
} catch (err) {
  console.error(err)
}