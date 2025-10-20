import { chromium } from "playwright";

(async () => {
  await hackerNewsSite();
})();



async function hackerNewsSite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://news.ycombinator.com/");
}
