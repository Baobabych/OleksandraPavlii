const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

describe('Wikipedia Interactive Actions (Task 3)', () => {
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(new edge.Options())
      .build();
  });

  afterAll(async () => {
    await driver.quit();
  });

  test('Search for Selenium on Wikipedia', async () => {
    await driver.get('https://www.wikipedia.org');

    // Введення тексту у поле пошуку
    const searchInput = await driver.findElement(By.id('searchInput'));
    await searchInput.sendKeys('Selenium');

    // Натискання кнопки пошуку
    const searchButton = await driver.findElement(By.css('.pure-button'));
    await searchButton.click();

    // Очікування завантаження результатів
    await driver.wait(until.titleContains('Selenium'), 5000);

    // Перевірка заголовку сторінки
    const title = await driver.getTitle();
    expect(title).toContain('Selenium');
  });
});