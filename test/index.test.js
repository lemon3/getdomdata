import { assert, test } from 'vitest';
import getDomData from '../index.js';

test('getDomData is function', () => {
  assert.isFunction(getDomData);
});
