const testVar = {}

function testFunc() {
  return "hi"
}

let formData = {
  "firstName": "Adam",
  "registryMessage": "What's up?"
}

let configObj = {
  method: "POST",
  body: formData
}

function registerSelf() {

  return fetch("http://guestbook.example.com/register", configObj)

   .then(function(response) {
     return response.json()
   })
   .then(function(jsonResponse) {
     return jsonResponse.message
   })

}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", configObj)

   .then(function(response) {
     return response.json()
   })
   .then(function(jsonResponse) {
     return jsonResponse.message
   })
   .catch(function(error) {
     return ":("
   })
}
