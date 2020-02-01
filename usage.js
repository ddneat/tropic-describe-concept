const { test, suite, logger, _state, _loggerState, _resolve } = require('./runner')

suite('a function', () => {
  test('condition A', () => {
    logger(1)
  })

  test('condition B', () => {
    logger(2)
  })
})

suite('another function', () => {
  test('condition A', () => {
    logger(3)
  })
})

test('standalone A', () => {
  logger(4)
})

test('crazy', () => {
  suite('suite A', () => {
    suite('suite B', () => {
      test('insider', () => {
        logger(5)
      })
    })

    test('wow', () => {
      logger(6)
    })
  })
})

module.exports = {
  _state,
  _loggerState,
  _resolve
}
