'use strict'

module.exports = async (event, context) => {
  const result = {
    'status': 'Received input1: ' + JSON.stringify(event.body)
  }

  return context
    .status(200)
    .succeed(result)
}

