const { UserService } = require('./labAssignment-lab4');

test('greet method should call getFullName with "John" and "Doe" and return HELLO, JOHN DOE!', () => {
  const mockGetFullName = jest.fn((firstName, lastName) => `${firstName} ${lastName}`);
  const userService = new UserService(mockGetFullName);
  
  const greeting = userService.greet();
  
  expect(mockGetFullName).toHaveBeenCalledWith('John', 'Doe');
  expect(greeting).toBe('HELLO, JOHN DOE!');
});