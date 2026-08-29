/* global describe, beforeAll, it, page, expect */
beforeAll(async () => {
  await page.goto('http://localhost:8080/exercises/');
});

describe('The secondAndThirdResults variable', () => {
  it('should contain exactly 2 elements', async () => {
    const elements = await page.evaluate(() => window.secondAndThirdResults);
    expect(elements).toBeDefined();

    const elementsArray = await page.evaluate(() => Array.from(window.secondAndThirdResults));
    expect(elementsArray.length).toBe(2);
  });
});
