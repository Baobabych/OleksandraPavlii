const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('Wikipedia Test', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser('chrome')
      .setChromeOptions(new chrome.Options())
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Open Wikipedia and check elements', async () => {
    await driver.get('https://www.wikipedia.org');

    // Перевірка поля пошуку за id
    const searchInput = await driver.findElement(By.id('searchInput'));
    expect(searchInput).toBeDefined();

    // Перевірка логотипу Wikipedia за тегом
    const logo = await driver.findElement(By.css('.central-featured-logo'));
    expect(logo).toBeDefined();
  });
});