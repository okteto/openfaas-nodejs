'use strict'

module.exports = async (event, context) => {
  const result = {
    'status': 'Hello World! You said: ' + JSON.stringify(event.body)
  }

  return context
    .status(200)
    .succeed(result)
}

