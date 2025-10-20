/* make sure that show -> shownew is properly sorted */

export async function newShowSorted(page) {
  await page.goto("https://news.ycombinator.com/show");
  console.log(page.url());
}
