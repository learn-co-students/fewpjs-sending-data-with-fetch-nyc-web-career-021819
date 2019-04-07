function registerSelf() {
  return fetch("http://guestbook.example.com/register", {
    "method": "POST",
    "body": {
      "firstName": "Mica",
      "registryMessage": "You have been added to the guest book"
    }
  }) // Takes the API response and RETURNS that response in json format
  .then(function (response) {
    return response.json()
  }) // Takes the json and RETURNS the message value in the json
  .then(function (json) {
    return json.message
  })
}

function errorSelf() {
  return fetch("http://guestbook.example.com/register-error", {
    "method": "POST",
    "body": {
      "firstName": "Erica",
      "registryMessage": "Yo!"
    }
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    return json.message;
  })
  .catch(function (x) {
    console.log(x)
    return ":("
  })
}