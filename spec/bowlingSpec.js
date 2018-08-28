const bowlingGame = require('../src/bowling')

describe("bowling", () => {
  var game

  beforeEach(() => {
    game = bowlingGame()
  })

  var rollMany = (rolls, pins) => {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  }

  describe("when all gutter balls", () => {
    it("has a score of zero", () => {
      rollMany(20, 0)
      expect(game.score()).toEqual(0)
    })
  })

  describe("when all ones are rolled", () => {
    it("returns a score of 20", () => {
      rollMany(20, 1)
      expect(game.score()).toEqual(20)
    })
  })

  describe("when a spare is scored", () => {
    it("returns the score", () => {
      game.roll(6)
      game.roll(4)
      game.roll(5)
      rollMany(17, 0)
      expect(game.score()).toEqual(20)
    })
  })

  describe("when a strike is scored", () => {
    it("returns the score", () => {
      game.roll(10)
      game.roll(3)
      game.roll(4)
      rollMany(16, 0)
      expect(game.score()).toEqual(24)
    })
  })

  describe("when a perfect game is rolled", () => {
    it("returns a score of 300", () => {
      rollMany(12, 10)
      expect(game.score()).toEqual(300)
    })
  })
})