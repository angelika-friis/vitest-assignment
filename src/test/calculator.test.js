import { beforeAll, test, expect } from 'vitest';
import { createCalculator } from '../lib/calculator.js';

let calculator;

beforeAll(() => {
    calculator = createCalculator();
});

test('add 1 + 1', () => {
    expect(calculator.add(1, 1)).toBe(2);
});

test('add 5 + 6', () => {
    expect(calculator.add(5, 6)).toBe(11);
});

test('subtract 5 - 6', () => {
    expect(calculator.subtract(5, 6)).toBe(-1);
});

test('multiply 1 * 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
});

test('divide 4 / 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
});