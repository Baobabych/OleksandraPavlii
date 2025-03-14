const { ApiClient } = require('./labAssignment-lab4');

test('fetchData should return data with fetchedAt field', async () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ key: 'value' }),
    })
  );

  const apiClient = new ApiClient();
  const result = await apiClient.fetchData();

  expect(result).toEqual({ key: 'value', fetchedAt: expect.any(Number) });
});