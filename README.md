# re-ducks
Library to reduce common tasks for React apps based on re-ducks (https://github.com/alexnm/re-ducks)

## Usage

### Types

```js
import { types } from 're-ducks'

export default types(['create', 'update', 'remove' ])
// > { create: 'create', update: 'update', remove: 'remove'}
```

```js
import { types } from 're-ducks'

export default types('app/users', [
  'create',
  'update',
  'remove',
])
// > { create: 'app/users/create', update, 'app/users/update', ... }
```

### Actions

```js
import { actions } from 're-ducks'
import types from './types'

export default actions(types, [
  ['create'],
  ['update'],
  ['remove'],
])
// > {
// >    create: (value) => { type: 'create' },
// >    update: (value) => { type: 'update' },
// >    remove: (value) => { type: 'remove' },
// > }
```

```js
import { actions } from 're-ducks'
import types from './types'

export default actions(types, [
  ['create', 'user'],
  ['update', 'user'],
  ['remove', 'user'],
])
// > {
// >    create: (value) => { type: 'create', payload: { user: value } },
// >    update: (value) => { type: 'update', payload: { user: value } },
// >    remove: (value) => { type: 'remove', payload: { user: value } },
// > }
````
