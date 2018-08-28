module.exports = function () {

  var rolls = []

  var roll = (pins) => {
    rolls.push(pins)
  }

  var score = () => {
    var total = 0
    var frameIndex = 0
    for (var i = 0; i < 10; i++) {
      if (rolls[frameIndex] == 10) {
        total += 10 + rolls[frameIndex + 1] + rolls[frameIndex + 2]
        frameIndex += 1
      } else if (rolls[frameIndex] + rolls[frameIndex + 1] == 10) {
        total += 10 + rolls[frameIndex + 2]
        frameIndex += 2
      } else {
        total += rolls[frameIndex] + rolls[frameIndex + 1]
        frameIndex += 2
      }
    }
    return total
  }

  return {
    roll,
    score
  }

}