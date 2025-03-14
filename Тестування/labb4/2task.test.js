const { asyncHello } = require('./labAssignment-lab4');

test('asyncHello should resolve with "hello world"', async () => {
  await expect(asyncHello()).resolves.toBe('hello world');
});