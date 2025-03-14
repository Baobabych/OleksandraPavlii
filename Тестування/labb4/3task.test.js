const { computeValue } = require('./labAssignment-lab4');

test('computeValue should return 94', async () => {
  const result = await computeValue();
  expect(result).toBe(94);
});