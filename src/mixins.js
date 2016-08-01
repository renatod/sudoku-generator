function Mixins() {
  this.getSquare = function(x, y) {
      return ((Math.ceil((y + 1) / 3) * 3) + (Math.ceil((x + 1) / 3) - 3) - 1);
  }
}

module.exports = new Mixins();
