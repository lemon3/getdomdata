import { expect, test } from 'vitest';
import { getDomData } from '@/getDomData';

test.each([
  {
    testName: 'object (not a valid JSON)',
    dataName: 'test',
    input: "{p1:'cat',p2:'dog',id:1,tmp:true,a:null}",
    expected: { p1: 'cat', p2: 'dog', id: '1', tmp: 'true', a: 'null' },
  },
  {
    testName: 'object (valid JSON)',
    dataName: 'test',
    input: "{'p1':'cat','p2':'dog','id':'1','tmp':'true','a':'null'}",
    expected: { p1: 'cat', p2: 'dog', id: '1', tmp: 'true', a: 'null' },
  },
  {
    testName: 'comma separated string',
    dataName: 'test',
    input: "p1:'cat',p2:dog,id:1,tmp:true,a:'null'",
    expected: { p1: 'cat', p2: 'dog', id: '1', tmp: 'true', a: 'null' },
  },
])('test: $testName', ({ input, expected, dataName }) => {
  const d = document.createElement('div');
  d.dataset[dataName] = input;

  const result = getDomData(d, dataName);
  expect(result).toStrictEqual(expected);
});

test('test nested object string (not a valid JSON)', () => {
  const d = document.createElement('div');
  d.dataset.test = "{a:1, b: {c: '1', d:'4', mega:12 }, r:'r' }";
  const expected = { a: '1', b: { c: '1', d: '4', mega: '12' }, r: 'r' };
  const result = getDomData(d, 'test');

  expect(result).toStrictEqual(expected);
});

test('test nested object string (valid JSON)', () => {
  const d = document.createElement('div');
  d.dataset.test =
    "{'a':'1', 'b': {'c': '1', 'd':'4', 'mega':'12' }, 'r': 'r' }";
  const expected = { a: '1', b: { c: '1', d: '4', mega: '12' }, r: 'r' };
  const result = getDomData(d, 'test');

  expect(result).toStrictEqual(expected);
});

test('test String with inline Object', () => {
  const d = document.createElement('div');
  d.dataset.test = "a:1, b: {'c': '1', 'd':'4'}";
  const expected = { a: '1', b: { c: '1', d: '4' } };
  const result = getDomData(d, 'test');
  expect(result).toStrictEqual(expected);
});

test('test with wrong doc reference', () => {
  const d = undefined;
  const result = getDomData(d, 'test');
  expect(result).toStrictEqual(false);
});

test('test getDomData name param', () => {
  const d = document.createElement('div');
  d.dataset.test = 'a:1,b:2,c:3,d:4,e:5';
  const result1 = getDomData(d, 'test');
  const result2 = getDomData(d).test;

  const expected = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
  };

  expect(result1).toStrictEqual(expected);
  expect(result1).toStrictEqual(result2);
});

test.each([
  {
    input: 'fake',
    expected: false,
  },
  {
    input: null,
    expected: false,
  },
  {
    input: undefined,
    expected: false,
  },
  {
    input: document.querySelector('#wrong-div'),
    expected: false,
  },
])('element: $input -> $expected', ({ input, expected }) => {
  const result = getDomData(input, 'test');
  expect(result).toBe(expected);
});

test.each([
  {
    input: undefined,
    expected: 'undefined',
  },
  {
    input: null,
    expected: 'null',
  },
  {
    input: null,
    expected: 'null',
  },
  {
    input: false,
    expected: 'false',
  },
  {
    input: true,
    expected: 'true',
  },
  {
    input: 0,
    expected: '0',
  },
])('parsing special words: $input -> $expected', ({ input, expected }) => {
  const d = document.createElement('div');
  d.dataset.test = input;

  expect(d.dataset.test).toBe(`${input}`);
  const result = getDomData(d, 'test');
  expect(result).toStrictEqual(expected);
});

test.each([
  {
    input: "a:1, b: {'c': '1', 'd':'4'",
    expected: false,
  },
])('unparsable String: $input -> $expected', ({ input, expected }) => {
  const d = document.createElement('div');
  d.dataset.test = input;

  expect(d.dataset.test).toBe(`${input}`);
  const result = getDomData(d, 'test');
  expect(result).toStrictEqual(expected);
});
