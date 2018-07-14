//woohoo this works!! now I just need to use it some how ;)
let changeState = {
  gameState: false,
  play: function () {
    return this.gameState = true;
  },
  stop: function () {
    return this.gameState = false;
  },
  reset: function () {
    this.gameState = false;
    return endThenReset();
  }
}