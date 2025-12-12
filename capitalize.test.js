import capitalize from './capitalize.js';

test('capitalize hello', () => {
    expect(capitalize('hello').toBe('Hello'));
});

test('Try to capitalize empty', () => {
    expect(capitalize(' ').toBe(''));
});