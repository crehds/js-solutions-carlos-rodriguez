import josephusPermutation from './josephusPermutation';

describe('basic tests', () => {
  test('should be survived 4 for k = 3 in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7];
    const k = 3;
    const result = josephusPermutation(arr, k);
    expect(result).toEqual([4]);
  });

  test('should be survived 7 for k = 3 in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const k = 3;
    const result = josephusPermutation(arr, k);
    expect(result).toEqual([7]);
  });

  test('should be survived 3 for k = 3 in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
    const k = 2;

    const result = josephusPermutation(arr, k);

    expect(result).toEqual([3]);
  });

  test('should be survived 4 for k = 4 in the array', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const k = 4;

    const result = josephusPermutation(arr, k);

    expect(result).toEqual([1]);
  });
});

describe('Josephus problem', () => {
  const people = Array.from({ length: 41 }, (_, i) => i + 1);
  const k = 2;
  const result = josephusPermutation(people, k);

  test('Josephus should be survived if he sat in the position 19', () => {
    expect(result).toEqual([19]);
  });

  test('Josephus should not be survived if he sat in any other position', () => {
    expect(result).not.toEqual([20]);
    expect(result).not.toEqual([10]);
    expect(result).not.toEqual([13]);
    expect(result).not.toEqual([5]);
  });
});
