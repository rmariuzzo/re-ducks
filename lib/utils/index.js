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
    const source = sources.shift()

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} })
          this.merge(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      }
    }

    return this.merge(target, ...sources)
  }
}

export default utils
