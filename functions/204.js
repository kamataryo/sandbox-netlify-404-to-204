exports.handler = function(event, context, callback) {
  callback(null, {
    statusCode: 204,
    headers: {
      'Content-Type': 'application/json'
    },
    body: 'no content.'
  })
}
