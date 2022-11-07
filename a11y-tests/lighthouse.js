const fs = require('fs')
const lighthouse = require('lighthouse')
const chromeLauncher = require('chrome-launcher')

;(async () => {
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless'],
  })
  const options = {
    logLevel: 'info',
    output: 'html',
    onlyCategories: ['accessibility'],
    port: chrome.port,
  }
  const runnerResult = await lighthouse(
    'http://localhost:3000/product',
    options
  )

  // `.report` is the HTML report as a string
  const reportHtml = runnerResult.report
  fs.writeFileSync('lhreport.html', reportHtml)

  // `.lhr` is the Lighthouse Result as a JS object
  console.log(
    'Report is done for',
    runnerResult.lhr.finalDisplayedUrl
  )
  console.log(
    'accessibility score was',
    runnerResult.lhr.categories.accessibility
      .score * 100
  )

  await chrome.kill()
})()
