/**
 * http://caniuse.com/matchesselector
 * https://gist.github.com/jonathantneal/3062955
 */
(function() {
  var proto = Element.prototype
  if (!proto.matches) {
    proto.matches = proto.webkitMatchesSelector
      || proto.mozMatchesSelector
      || proto.msMatchesSelector
      || proto.oMatchesSelector
      || function match(selector) {
        var nodes = (this.parentNode || this.document).querySelectorAll(selector)
        for (var i = 0; i < nodes.length; i++) {
          if (nodes[i] === this) return nodes[i]
        }
        return false
      }
  }
})();
