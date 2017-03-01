const actions = require('../lib').actions
const types = require('./fixtures/types')

test('create actions without types using a name', () => {
  const generated = actions([
    ['create'],
    ['update'],
    ['delete'],
  ])
  expect(generated.create).toBeDefined()
  expect(generated.update).toBeDefined()
  expect(generated.delete).toBeDefined()
  expect(generated.create())
    .toEqual({ type: 'create' })
  expect(generated.update())
    .toEqual({ type: 'update' })
  expect(generated.delete())
    .toEqual({ type: 'delete' })
})

test('create actions with types using a name', () => {
  const generated = actions(types, [
    ['create'],
    ['update'],
    ['delete'],
  ])
  expect(generated.create).toBeDefined()
  expect(generated.update).toBeDefined()
  expect(generated.delete).toBeDefined()
  expect(generated.create())
    .toEqual({ type: 'app/test/create' })
  expect(generated.update())
    .toEqual({ type: 'app/test/update' })
  expect(generated.delete())
    .toEqual({ type: 'app/test/delete' })
})

test('create actions with types using a name and payload identifier', () => {
  const generated = actions(types, [
    ['create', 'user'],
    ['update', 'another-user'],
    ['delete', 123],
  ])
  expect(generated.create).toBeDefined()
  expect(generated.update).toBeDefined()
  expect(generated.delete).toBeDefined()
  expect(generated.create('Rubens'))
    .toEqual({ type: 'app/test/create', payload: { 'user': 'Rubens' } })
  expect(generated.update('Rubens'))
    .toEqual({ type: 'app/test/update', payload: { 'another-user': 'Rubens' } })
  expect(generated.delete('Rubens'))
    .toEqual({ type: 'app/test/delete', payload: { '123': 'Rubens' } })
})

test('create actions with types using a name and payload identifier', () => {
  const generated = actions(types, [
    ['create', 'user', 'app/test/add'],
    ['update', 'user', 'app/sample/edit'],
    ['delete', null, 'module/remove'],
  ])
  expect(generated.create).toBeDefined()
  expect(generated.update).toBeDefined()
  expect(generated.delete).toBeDefined()
  expect(generated.create('Rubens'))
    .toEqual({ type: 'app/test/add', payload: { 'user': 'Rubens' } })
  expect(generated.update('Rubens'))
    .toEqual({ type: 'app/sample/edit', payload: { 'user': 'Rubens' } })
  expect(generated.delete('Rubens'))
    .toEqual({ type: 'module/remove' })
})
