const assert = require('assert')
const { _state, _loggerState, _resolve } = require('./usage')

_resolve()

assert.strictEqual(_state.suites[0].name, 'a function')
assert.strictEqual(_state.suites[0].children.tests[0].name, 'condition A')
assert.strictEqual(_state.suites[0].children.tests[1].name, 'condition B')

assert.strictEqual(_state.suites[1].name, 'another function')
assert.strictEqual(_state.suites[1].children.tests[0].name, 'condition A')

assert.strictEqual(_state.tests[0].name, 'standalone A')

assert.strictEqual(_state.tests[1].name, 'crazy')
assert.strictEqual(_state.tests[1].children.suites[0].name, 'suite A')
assert.strictEqual(_state.tests[1].children.suites[0].children.suites[0].name, 'suite B')
assert.strictEqual(_state.tests[1].children.suites[0].children.suites[0].children.tests[0].name, 'insider')
assert.strictEqual(_state.tests[1].children.suites[0].children.tests[0].name, 'wow')

assert.deepStrictEqual(_loggerState, [1, 2, 3, 4, 5, 6])
