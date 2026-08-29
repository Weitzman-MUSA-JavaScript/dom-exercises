/* global describe, beforeAll, it, page, expect */
beforeAll(async () => {
  await page.goto('http://localhost:8080/exercises/');

  const btnHandle = await page.$('#im-clicked-button');
  await btnHandle.click();
});

describe('The imClickedButton variable', () => {
  it('should refer to the #im-clicked-button button element', async () => {
    const btn = await page.evaluate(() => window.imClickedButton);
    expect(btn).toBeDefined();

    const btnId = await page.evaluate(() => window.imClickedButton.id);
    expect(btnId).toBe('im-clicked-button');
  });
});

describe('Clicking the #im-clicked-button', () => {
  it('should change the button text to "I\'m Clicked!"', async () => {
    const btnText = await page.evaluate(() => document.querySelector('#im-clicked-button').textContent);
    expect(btnText).toBe("I'm Clicked!");
  });
});
