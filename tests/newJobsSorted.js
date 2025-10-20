/* make sure that most recent jobs are posted first */

// https://news.ycombinator.com/jobs

export async function newJobSorted(page) {
  await page.goto("https://news.ycombinator.com/jobs");
  console.log(page.url());
}
