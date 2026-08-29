/* global describe, beforeAll, it, page, expect */
beforeAll(async () => {
  await page.goto('http://localhost:8080/exercises/');
});

describe('The firstResult variable', () => {
  it('should refer to the #result-1 paragraph element', async () => {
    const element = await page.evaluate(() => window.firstResult);
    expect(element).toBeDefined();

    const elementId = await page.evaluate(() => window.firstResult.id);
    expect(elementId).toBe('result-1');
  });
});
