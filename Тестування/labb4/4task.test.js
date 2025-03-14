const { asyncError } = require('./labAssignment-lab4');

test('asyncError should reject with "Something went wrong"', async () => {
  await expect(asyncError()).rejects.toThrow('Something went wrong');
});