import set from 'lodash.set'

function actionsGenerator(types, actions) {
  if (Array.isArray(types)) {
    actions = types
  }

  // Generate actions.
  const generated = {}
  actions.forEach(([name, key, type]) => {
    type = type || types[name] || name
    if (key) {
      generated[name] = (value) => ({ type,
        // payload: set(key)(value)({}),
        payload: set({}, key, value),
      })
    } else {
      generated[name] = () => ({ type })
    }
  })
  return generated
}

export default actionsGenerator
