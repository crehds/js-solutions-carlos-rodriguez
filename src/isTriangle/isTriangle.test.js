import isTriangle from './isTriangle';

describe('Basic tests', () => {
  test('should return true', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
    expect(isTriangle(4, 5, 3)).toBe(true);
    expect(isTriangle(5, 6, 7)).toBe(true);
    expect(isTriangle(8, 6, 10)).toBe(true);
    expect(isTriangle(8, 7, 10)).toBe(true);
    expect(isTriangle(12, 15, 20)).toBe(true);
    expect(isTriangle(10, 11, 15)).toBe(true);
    expect(isTriangle(24, 21, 20)).toBe(true);
    expect(isTriangle(30, 35, 18)).toBe(true);
    expect(isTriangle(10, 12, 18)).toBe(true);
  });

  test('should return false', () => {
    expect(isTriangle(3, 2, 8)).toBe(false);
    expect(isTriangle(3, 4, 9)).toBe(false);
    expect(isTriangle(4, 5, 10)).toBe(false);
    expect(isTriangle(13, 8, 22)).toBe(false);
    expect(isTriangle(13, 17, 31)).toBe(false);
    expect(isTriangle(10, 20, 8)).toBe(false);
    expect(isTriangle(31, 15, 14)).toBe(false);
    expect(isTriangle(20, 24, 45)).toBe(false);
  });

  test('should return false if any side is 0', () => {
    expect(isTriangle(0, 2, 8)).toBe(false);
    expect(isTriangle(3, 0, 9)).toBe(false);
    expect(isTriangle(4, 5, 0)).toBe(false);
    expect(isTriangle(0, 0, 8)).toBe(false);
    expect(isTriangle(0, 0, 0)).toBe(false);
  });
});
