'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const utils = {
  /**
   * Simple is object check.
   * @param item
   * @returns {boolean}
   */
  isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item))
  },

  /**
   * Deep merge two objects.
   * @param target
   * @param ...sources
   */
  merge(target, ...sources) {
    if (!sources.length) return target
    const source = sources.shift();

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} });
          this.merge(target[key], source[key]);
        } else {
          Object.assign(target, { [key]: source[key] });
        }
      }
    }

    return this.merge(target, ...sources)
  }
};

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
};

const typesGenerator = function(options = defaults, types = []) {
  // Check for no options given.
  if (Array.isArray(options)) {
    types = options;
  }

  // Check for namespace options shorthand.
  if (typeof options === 'string') {
    options = { namespace: options };
  }

  // Merge options with defaults.
  options = utils.merge({}, defaults, options);

  // Generate types.
  const generated = {};
  types.forEach(type => {
    const name = options.transformers.name(type, options);
    const value = options.transformers.value(type, options);
    generated[name] = value;
  });
  return generated
};

function actionsGenerator(types, actions) {
  if (Array.isArray(types)) {
    actions = types;
  }

  // Generate actions.
  const generated = {};
  actions.forEach(([name, key, type]) => {
    type = type || types[name] || name;
    if (key) {
      generated[name] = (value) => ({ type,
        payload: { [key]: value },
      });
    } else {
      generated[name] = () => ({ type });
    }
  });
  return generated
}

exports.types = typesGenerator;
exports.actions = actionsGenerator;
