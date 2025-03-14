const { calculateFinalPrice } = require('./labAssignment-lab4');

test('calculateFinalPrice should correctly calculate the final price for a valid order', () => {
  const order = {
    items: [{ price: 10, quantity: 2 }],
    taxRate: 0.1,
  };
  
  const discountService = {
    getDiscount: jest.fn(() => 0.2),
  };
  
  const finalPrice = calculateFinalPrice(order, discountService);
  expect(finalPrice).toBe(17.6);
});

test('calculateFinalPrice should throw an error for invalid order', () => {
  const order = { items: [] };
  
  expect(() => calculateFinalPrice(order)).toThrow('Invalid order');
});

test('calculateFinalPrice should throw an error for invalid item data', () => {
  const order = {
    items: [{ price: -10, quantity: 2 }],
    taxRate: 0.1,
  };
  
  expect(() => calculateFinalPrice(order)).toThrow('Invalid item data');
});