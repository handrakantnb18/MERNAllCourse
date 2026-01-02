const usersdb = require("./usersdb");
const updateUsers = {};

updateUsers.updateUser = function(request, response) {
    const filter = {
        firstName: request.body.firstName,
        lastName: request.body.lastName
    };

    const updateData = {
        profession: request.body.profession,
        age: request.body.age,
        city: request.body.city
    };

    usersdb.updateUser(filter, updateData).then(function () {
            response.status(200).send("Record has been updated...!!!");
        }).catch(function (error) {
            response.status(500).send("Unable to update record...!!!");
        });

    console.log("Filter:", filter);
    console.log("Update Data:", updateData);
}

module.exports = updateUsers;

// http://localhost:3000/api/user/update-user
