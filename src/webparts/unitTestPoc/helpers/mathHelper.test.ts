import { add, multiply, isEven, isOdd } from './mathHelper';

describe('mathHelper', () => {
  test('add() should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('multiply() should return the product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
  });

  test('isEven() should return true for even numbers, and false for odd numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(120)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(999)).toBe(false);
  });

  test('isOdd() should return true for odd numbers, and false for even numbers', () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(99)).toBe(true);
    expect(isOdd(2)).toBe(false);
    expect(isOdd(1000)).toBe(false);
  });
});