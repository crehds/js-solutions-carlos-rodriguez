import longestConsec from './longestConsec';

describe('Basic tests', () => {
  test('should return => abc', () => {
    const variable = ['a', 'b', 'c', 'd'];
    const r = 3;
    const result = longestConsec(variable, r);
    expect(result).toBe('abc');
  });

  test('should return => efghijklmnop', () => {
    const variable = ['abcd', 'efghij', 'klmnop', 'qrst', 'cuenta', 'uvwxyz'];
    const r = 2;
    const result = longestConsec(variable, r);
    expect(result).toBe('efghijklmnop');
  });

  test('should return => eduardorodriguez', () => {
    const variable = ['carlos', 'eduardo', 'rodriguez', 'huerta'];
    const r = 2;
    const result = longestConsec(variable, r);
    expect(result).toBe('eduardorodriguez');
  });

  test('should return => null', () => {
    const variable = ['carlos', 'eduardo', 'rodriguez', 'huerta'];
    const r = 1;
    const result = longestConsec(variable, r);
    expect(result).toBe('rodriguez');
  });
});

describe('Corner cases', () => {
  test('should return => null', () => {
    const variable = ['carlos', 'eduardo', 'rodriguez', 'huerta'];
    const r = 0;
    const result = longestConsec(variable, r);
    expect(result).toBeNull();
  });

  test('should return => null', () => {
    const variable = ['carlos', 'eduardo', 'rodriguez', 'huerta'];
    const r = 5;
    const result = longestConsec(variable, r);
    expect(result).toBeNull();
  });

  test('should return => null', () => {
    const variable = ['abcd', 'efghij', 'klmnop', 'qrst', 'cuenta', 'uvwxyz'];
    const r = 10;
    const result = longestConsec(variable, r);
    expect(result).toBeNull();
  });
});
