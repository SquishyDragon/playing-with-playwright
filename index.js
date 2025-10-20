import { chromium } from "playwright";
import { newArticlesSorted } from "./tests/newArticlesSorted.js";
import { newCommentSorted } from "./tests/newCommentsSorted.js";
import { isSorted } from "./tests/makeIsSortedCallable.js";
import { newJobSorted } from "./tests/newJobsSorted.js";

(async () => {
  await hackerNewsSite();
})();

async function hackerNewsSite() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();
  await newArticlesSorted(page);
  isSorted();
  await newArticlesSorted(page);
  await newCommentSorted(page);
  await newJobSorted(page);
}
