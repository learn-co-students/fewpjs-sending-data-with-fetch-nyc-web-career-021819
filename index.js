const testVar = {}

function testFunc() {
  return "hi"
}

let configObj = {
  "method": "POST",
  "body": formData
}

let formData = {
  "firstName": "Will",
  "registryMessage": "Hello World"
}

function registerSelf() {
  return fetch('http://guestbook.example.com/register', configObj)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      return json.message;
    })
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error', {
    "method": "POST",
    "body": {
      "firstName": "will",
      "registryMessage": "Hi"
    }
  }).then(function(response) {
    return response.json()
  }).then(function(json) {
    return json.message
  }).catch(function(error) {
    return ":("
  })
}
