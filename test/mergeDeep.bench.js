import { bench, describe } from 'vitest';
import { mergeDeep } from '@/mergeDeep';

describe('merge', () => {
  bench('with for loop', () => {
    mergeDeep({}, { a: 1, b: 2, c: 3, d: { e: 4, f: 5, g: [6, 7] } });
  });
});
