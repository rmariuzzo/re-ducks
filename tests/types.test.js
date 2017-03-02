import { types } from '../lib'

test('create types without options', () => {
  expect(types(['a', 'b', 'c']))
    .toEqual({ a: 'a', b: 'b', c: 'c' })
})

test('create types with namespace option (shorthand)', () => {
  expect(types('my-namespace', ['a', 'b', 'c']))
    .toEqual({ a: 'my-namespace/a', b: 'my-namespace/b', c: 'my-namespace/c' })
})

test('create types with empty options', () => {
  expect(types({}, ['a', 'b', 'c']))
    .toEqual({ a: 'a', b: 'b', c: 'c' })
})

test('create types with namespace option', () => {
  expect(types({ namespace: 'my-namespace' }, ['a', 'b', 'c']))
    .toEqual({ a: 'my-namespace/a', b: 'my-namespace/b', c: 'my-namespace/c' })
})

test('create types with separator option', () => {
  expect(types({ namespace: 'my-namespace', 'separator': ':' }, ['a', 'b', 'c']))
    .toEqual({ a: 'my-namespace:a', b: 'my-namespace:b', c: 'my-namespace:c' })
})

test('create types with name transfomer option', () => {
  expect(types({ transformers: { name: (type) => type.toUpperCase() } }, ['a', 'b', 'c']))
    .toEqual({ A: 'a', B: 'b', C: 'c' })
})

test('create types with value transfomer option', () => {
  expect(types({ transformers: { value: (type) => type.toUpperCase() } }, ['a', 'b', 'c']))
    .toEqual({ a: 'A', b: 'B', c: 'C' })
})
