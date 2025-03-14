const { ApiHelper } = require('./labAssignment-lab4');

test('fetchViaHelper should return the expected JSON object', async () => {
  const mockApiCallFunction = jest.fn(() => Promise.resolve({ key: 'value' }));
  const apiHelper = new ApiHelper();
  
  const result = await apiHelper.fetchViaHelper(mockApiCallFunction);
  
  expect(result).toEqual({ key: 'value' });
});

test('fetchViaHelper should throw an error for invalid data', async () => {
  const mockApiCallFunction = jest.fn(() => Promise.resolve(null));
  const apiHelper = new ApiHelper();
  
  await expect(apiHelper.fetchViaHelper(mockApiCallFunction)).rejects.toThrow('Invalid data');
});