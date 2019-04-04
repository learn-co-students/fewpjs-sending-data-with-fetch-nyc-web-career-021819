const testVar = {}

let formData = {
  "firstName": "Byron",
  "registryMessage": "Poodle"
};

let configObj = {
  method: "POST",
  body: formData
}

function registerSelf(){
  return fetch("http://guestbook.example.com/register", configObj)
    .then(function(response) {
     return response.text()
   })
   .then(function(content){
     return JSON.parse(content).message
   })
}




function errorSelf(){
  return fetch("http://guestbook.example.com/register-error" , configObj)
  .then(function(response) {
    return response.text()
  })
  .then(function(content){
    return JSON.parse(content).message
  })
  .catch(function(error){
    return ":("
  })
}
