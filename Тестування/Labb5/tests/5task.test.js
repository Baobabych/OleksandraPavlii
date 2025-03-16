const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

describe('Wikipedia Selenium Page Test', () => {
  let driver;

  beforeAll(async () => {
    // Ініціалізація драйвера для Microsoft Edge
    driver = await new Builder()
      .forBrowser('MicrosoftEdge')
      .setEdgeOptions(new edge.Options())
      .build();
  });

  afterAll(async () => {
    // Закриття браузера після завершення тестів
    await driver.quit();
  });

  test('Check Selenium element in infobox', async () => {
    // Відкриття сторінки Wikipedia про Selenium
    await driver.get('https://en.wikipedia.org/wiki/Selenium');

    // Очікування появи елемента <th> з текстом "Selenium"
    const element = await driver.wait(
      until.elementLocated(By.xpath('//th[contains(text(), "Selenium")]')),
      10000 // Час очікування 10 секунд
    );

    // Перевірка тексту елемента
    const text = await element.getText();
    expect(text).toBe('Selenium'); // Перевіряємо, що текст елемента дорівнює "Selenium"

    // Перевірка CSS властивості (колір фону)
    const backgroundColor = await element.getCssValue('background-color');
    expect(backgroundColor).toBe('rgba(253, 255, 140, 1)'); // Перевіряємо колір фону
  }, 15000); // Збільшуємо тайм-аут для тесту до 15 секунд
});