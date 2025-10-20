/* make sure that the newest articles are sorted in proper order */
import { chromium } from "playwright";

export async function newArticlesSorted(page) {
  await page.goto("https://news.ycombinator.com/newest");
  console.log(page.url());
}
