/* global describe, beforeAll, it, page, expect */
beforeAll(async () => {
  await page.goto('http://localhost:8080/exercises/');

  const btnHandle = await page.$('#add-span-button');
  for (let i = 0; i < 5; ++i) {
    await btnHandle.click();
  }
});

describe('The addSpanButton variable', () => {
  it('should refer to the #add-span-button button element', async () => {
    const btn = await page.evaluate(() => window.addSpanButton);
    expect(btn).toBeDefined();

    const btnId = await page.evaluate(() => window.addSpanButton.id);
    expect(btnId).toBe('add-span-button');
  });
});

describe('Clicking the #add-span-button', () => {
  it('should add 5 spans to the #span-container (in addition to the initial span)', async () => {
    const spanCount = await page.evaluate(() => window.spanContainer.children.length);
    expect(spanCount).toBe(6);
  });

  it('should have the last span contain the number 5', async () => {
    const lastSpanText = await page.evaluate(() => window.spanContainer.lastChild.textContent);
    expect(lastSpanText).toBe('5');
  });
});
