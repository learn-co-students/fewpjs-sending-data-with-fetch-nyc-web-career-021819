const testVar = {}

function testFunc() {
  return "hi"
}

function registerSelf() {
  let firstName = 'khaled';
  let rMessage = 'RANDOM MESSAGE'

  return fetch('http://guestbook.example.com/register', {
    method: 'POST',
    body: {
      "firstName": `${firstName}`,
      "registryMessage": `${rMessage}`
    }
  })
  .then((res) => {return res.json()})
  .then((json) => {return json.message})
}

function errorSelf() {
  let firstName = 'khaled';
  let rMessage = 'RANDOM MESSAGE'

  return fetch('http://guestbook.example.com/register-error', {
    method: 'POST',
    body: {
      "firstName": `${firstName}`,
      "registryMessage": `${rMessage}`
    }
  })
  .then((res) => {return res.json()})
  .then((json) => {return json.message})
  .catch((err) => {return ':('})

}
