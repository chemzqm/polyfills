if (typeof setImmediate !== 'function') {
  // node is stupid and does some weird stuff with `this.`.
  setImmediate = function setImmediate(fn) {
    setTimeout(fn, 0)
  }
}
