
let formData = {
  'firstname': 'Ella'
  'registryMessage': 'Mo food no cry'
};

let configObj ={
  method; 'POST'
  data: formData
};


function registerSelf(){
  return fetch("http://guestbook.example.com/register", configObj)
    .then((response)) => {
      return response.json();
    })
    .then((json)=>{
    consol.log(json['message'])
    return json['message'];
  });


function errorSelf(){
  return fetch("http://guestbook.example.com/register", configObj)
  .then((response) => {
    return response.json()
  })
  .then((json) => {
    consol.log(json['message'])
    return json['message'];
  })
  .catch((error) => {
    return ":(";
  })
};

  const testVar = {}

  function testFunc() {
    return "hi"
  }
