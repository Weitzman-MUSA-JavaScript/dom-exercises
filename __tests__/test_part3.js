/* global describe, beforeAll, it, page, expect */
beforeAll(async () => {
  await page.goto('http://localhost:8080/exercises/');
});

describe('The allResults variable', () => {
  it('should contain exactly 5 elements', async () => {
    const elements = await page.evaluate(() => window.allResults);
    expect(elements).toBeDefined();

    const elementsArray = await page.evaluate(() => Array.from(window.allResults));
    expect(elementsArray.length).toBe(5);
  });
});
