// const testVar = {}
//
// function testFunc() {
//   return "hi"
// }

function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    "method": "POST",
    "body": {
      "firstName": "Tali",
      "registryMessage": "Hi there"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  });
}


function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Talo",
      "registryMessage": "Hi there"
    }
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  })
  .catch(function(error){
    return ":(";
  })
}
