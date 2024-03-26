import { expect, test } from 'vitest';
import { mergeDeep } from '@/mergeDeep';

test('object merge', () => {
  const obj1 = {
    p1: 'cat',
    p2: 'dog',
    s: { a: 1, b: 2 },
    t: [1, 2, 3],
  };

  const obj2 = {
    p2: 'mouse',
    s: { b: 5, c: -1 },
    t: [4, 5],
  };

  const expected = {
    p1: 'cat',
    p2: 'mouse',
    s: { a: 1, b: 5, c: -1 },
    t: [1, 2, 3, 4, 5],
  };

  expect(mergeDeep({}, obj1, obj2)).toStrictEqual(expected);
});
