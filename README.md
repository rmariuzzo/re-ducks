# re-ducks
Library to reduce common tasks for React apps based on re-ducks (https://github.com/alexnm/re-ducks)

## Usage

### Types

```js
import { types } from 're-ducks'

export default types('app/users', [
  'create',
  'update',
  'delete',
])
```

### Actions

```js
import { actions } from 're-ducks'
import types from './types'

export default actions(types, [
  ['create', 'user'],
  ['update', 'user'],
  ['delete', 'user'],
])
````
