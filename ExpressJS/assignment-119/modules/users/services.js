const usersdb = require("./usersdb");
const services = {};

services.addUser = function(request, response){
    const reqBody = request.body;
    const userDetails = {
        firstName: reqBody.firstName,
        lastName: reqBody.lastName,
        profession: reqBody.profession,
        age: reqBody.age,
        city: reqBody.city,
        password: reqBody.password
    };

    usersdb.addUser(userDetails)
    .then(function(resp){
        response.status(200).send("Record has been triggered...!!!");
    }).catch(function(error){
        response.status(500).send("Unable to connect...!!!");
    });
    console.log(userDetails);
}

module.exports = services;

// http://localhost:3000/api/user/add-user