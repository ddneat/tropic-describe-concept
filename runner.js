const createState = () => {
  return {
    suites: [],
    suitesWithOnly: [],
    suitesWithSkip: [],
    tests: [],
    testsWithOnly: [],
    testsWithSkip: []
  }
}

const loggerState = []
const root = createState()
let current = root

const suite = (name, cb) => {
  const childrenState = createState()
  current.suites.push({ name, cb, children: childrenState })
}

const test = (name, cb) => {
  const childrenState = createState()
  current.tests.push({ name, cb, children: childrenState })
}

const logger = (value) => {
  loggerState.push(value)
}

const resolveChildren = (next) => {
  next.suites.forEach((suite) => {
    current = suite.children
    suite.cb()
    resolveChildren(current)
  })
  next.tests.forEach((test) => {
    current = test.children
    test.cb()
    resolveChildren(current)
  })
}

const resolve = () => {
  resolveChildren(root)
}

module.exports = {
  test,
  suite,
  logger,
  _state: root,
  _loggerState: loggerState,
  _resolve: resolve
}
