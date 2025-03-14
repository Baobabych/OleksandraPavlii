const { OrderProcessor } = require('./labAssignment-lab4');

test('processOrder should return the converted price if currency conversion is successful', async () => {
  const mockCurrencyConverter = jest.fn(() => Promise.resolve(100));
  const orderProcessor = new OrderProcessor(mockCurrencyConverter);
  
  const order = {
    items: [{ price: 10, quantity: 2 }],
    taxRate: 0.1,
    currency: 'USD',
    discountService: { getDiscount: jest.fn(() => 0.2) },
  };
  
  const result = await orderProcessor.processOrder(order, 'EUR');
  expect(result).toBe(100);
});

test('processOrder should return the original price if currency conversion fails', async () => {
  const mockCurrencyConverter = jest.fn(() => Promise.reject(new Error('Conversion failed')));
  const orderProcessor = new OrderProcessor(mockCurrencyConverter);
  
  const order = {
    items: [{ price: 10, quantity: 2 }],
    taxRate: 0.1,
    currency: 'USD',
    discountService: { getDiscount: jest.fn(() => 0.2) },
  };
  
  const result = await orderProcessor.processOrder(order, 'EUR');
  expect(result).toBe(17.6);
});