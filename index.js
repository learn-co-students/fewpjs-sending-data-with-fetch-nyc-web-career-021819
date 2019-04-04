const testVar = {}

function testFunc() {
  return "hi"
}


let formData = {
  "firstName": "Inigo",
  "registryMessage": "You killed my father. Prepare to die."
};

let configObj = {
  method: "POST",
  body: formData
}


function registerSelf() {
  return fetch('http://guestbook.example.com/register', configObj)
  .then(response => response.json())
  .then(json => json.message)
}

function errorSelf() {
  return fetch('http://guestbook.example.com/register-error')
  .catch(error => {
    return ":("
  })
}
