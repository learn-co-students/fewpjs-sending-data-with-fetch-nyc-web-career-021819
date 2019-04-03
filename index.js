// const testVar = {}}
//
// function testFunc() {
//   return "hi"
// }

let formData = {
  "firstName": "Matt",
  "registryMessage": "Congrats!"
}

let configObj = {
  method: "POST",
  body: formData
}


function registerSelf() {
  return fetch("http://guestbook.example.com/register", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(json){
    return json.message;
  })

}

function errorSelf(){
    return fetch("http://guestbook.example.com/register", configObj)
    .then(function(response) {
      return response.json();
    }).then(function(json){
      return json.message;
    }).catch(function(error){
      // alert("error!");
      return ":(";
    })

  }

  function errorSelf() {
  return fetch("http://guestbook.example.com/register-error",
    configObj)
    .then(function(response) {
    return response.json();
  }).then(function(json) {
    return json.message;
  }).catch(function(x) {
    // console.log(x) // If you want to see the error message that came in
    return ":(";
  });
}
