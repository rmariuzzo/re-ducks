const utils = require('../utils')

const defaults = {
  namespace: '',
  separator: '/',
  transformers: {
    name: (type, options) => {
      return `${type}`
    },
    value: (type, options) => {
      if (!options.namespace || options.namespace.length === 0) {
        return `${type}`
      }
      return `${options.namespace}${options.separator}${type}`
    }
  }
}

const typesGenerator = function(options = defaults, types = []) {
  // Check for no options given.
  if (Array.isArray(options)) {
    types = options
  }

  // Check for namespace options shorthand.
  if (typeof options === 'string') {
    options = { namespace: options }
  }

  // Merge options with defaults.
  options = utils.merge({}, defaults, options)

  // Generate types.
  const generated = {}
  types.forEach(type => {
    const name = options.transformers.name(type, options)
    const value = options.transformers.value(type, options)
    generated[name] = value
  })
  return generated
}

module.exports = typesGenerator
