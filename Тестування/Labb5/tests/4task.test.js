const { Builder, By } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');

describe('Wikipedia Element Access (Task 4)', () => {
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

  test('Check article page elements', async () => {
    await driver.get('https://en.wikipedia.org/wiki/Selenium');

    // Пошук заголовку статті за XPath
    const articleTitle = await driver.findElement(By.xpath('//h1[@id="firstHeading"]'));
    const titleText = await articleTitle.getText();
    expect(titleText).toBe('Selenium');

    // Пошук посилань у меню навігації за CSS
    const navLinks = await driver.findElements(By.css('#p-navigation .vector-menu-content li a'));
    expect(navLinks.length).toBeGreaterThan(0);

    // Перевірка формату посилань
    const firstLink = await navLinks[0].getAttribute('href');
    expect(firstLink).toContain('https://en.wikipedia.org');
  });
});