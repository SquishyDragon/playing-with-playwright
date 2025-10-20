/* make sure that new comments are properly sorted */

export async function newCommentSorted(page) {
  await page.goto("https://news.ycombinator.com/newcomments");
  console.log(page.url());
}
