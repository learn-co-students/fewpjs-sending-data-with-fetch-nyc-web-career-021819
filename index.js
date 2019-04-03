// Test 1
// You need to write a fetch() requests that sends your first name as firstName and registryMessage to an API located 
// at http://guestbook.example.com/register. If you perform the request correctly, the server will respond with a JSON 
// object that has a key called message. You should use then() calls to extract and, in the last callback, return the message value.

// You should write this code inside the registerSelf() function.

// Test 2
// To practice returning errors from fetch() you should write a fetch() requests that sends your first name as 
// firstName and registryMessage to an API located at http://guestbook.example.com/register-error. This endpoint does 
// not exist! However, we can define a .catch() call that will run its callback in the event that the server request fails 
// (which it will). We should return the string ":(".

// You should write this code inside the errorSelf() function.
let registryURL = 'http://guestbook.example.com/register'
let errorURL = 'http://guestbook.example.com/register-error'


let nameData = {
  "firstName": "testfname",
  "registryMessage": "Hello there, registery API!"
}

let configObj = {
  "method": "POST",
  "body": nameData
}

function registerSelf() {
  return fetch(registryURL, configObj).then(resp => resp.json()).then(jsonresp => jsonresp.message)
}

function errorSelf() {
  return fetch(errorURL, configObj).then(resp => resp.json()).then(jsonresp => jsonresp.message).catch(error =>
    ":(")
}

function testFunc() {
  return "hi"
}


