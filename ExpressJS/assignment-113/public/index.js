
// Provide the parameter to URL and access the same dynamically using GET, PUT, PATHC, DELETE


//  get method


// fetch("http://localhost:3000/home", {
//     method: "GET"

// }).then(function (httpResp){
//     return httpResp.text();
// }).then(function (httpReq){
//     console.log(httpReq);
// })


// post method

// const user = {
//     "firstName" : "Virat",
//     "lastName" : "Kohli",
//     "profession" : "cricket",
//     "runs" : "15000"
// }

// fetch("http://localhost:3000/home", {
//     method: "POST",

//     body: JSON.stringify(user),
//     headers : {"content-type": "application/json"},
    
// }).then(function(httpResp){
//   console.log(httpResp)
//   return httpResp.json();
// }).then(function(response){
//   console.log(response);
// }).catch(function(error){
//   console.log(error)
// })

// patch method

 const user = {
    "firstName" : "Virat",
    "lastName" : "Kohli",
    "profession" : "cricket",
    "runs" : "15000",
    "city" : "banglore"
}


fetch("http://localhost:3000/home",{
    method : "PATCH",

    body : JSON.stringify(user),
    headers : {"content-type": "application/json"},

} ).then(function(httpResp){
  console.log(httpResp)
  return httpResp.json();
}).then(function(response){
  console.log(response);
}).catch(function(error){
  console.log(error)
})

// put method

// const user = {
//     "firstName" : "Virat",
//     "lastName" : "Kohli",
//     "profession" : "cricket",
//     "runs" : "15000",
//     "iplTeam" : "banglore"
// }

// fetch("http://localhost:3000/home",{
//     method : "PUT",

//     body : JSON.stringify(user),
//     headers : {"content-type": "application/json"},

// }).then(function(response){
//     console.log(response);
//     return response.json();
// }).then(function(request){
//     console.log(request);
// }).catch(function(error){
//     console.log(error);
// })

// delete method

// const user = {
//     "team" : "Team has been Deleted"
// }

// fetch("http://localhost:3000/home",{
//     method : "DELETE",

//     body : JSON.stringify(user),
//     headers : {"content-type": "application/json"},

// }).then(function(response){
//     console.log(response);
//     return response.json();
// }).then(function(request){
//     console.log(request);
// }).catch(function(error){
//     console.log(error);
// })