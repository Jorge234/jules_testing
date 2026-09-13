const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/index.html');

  // Click first cell
  await page.click('.cell[data-index="0"]');
  let statusText = await page.innerText('#status');
  console.log('Status after 1st click:', statusText); // Expected: "Turno de O"

  // Click second cell
  await page.click('.cell[data-index="1"]');
  statusText = await page.innerText('#status');
  console.log('Status after 2nd click:', statusText); // Expected: "Turno de X"

  // X wins scenario
  await page.click('.cell[data-index="3"]'); // X
  await page.click('.cell[data-index="4"]'); // O
  await page.click('.cell[data-index="6"]'); // X

  statusText = await page.innerText('#status');
  console.log('Status after X wins:', statusText); // Expected: "¡Gana X!"

  await browser.close();
})();
