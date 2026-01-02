const usersdb = require(`./usersdb`);
const deleteUsers = {};

deleteUsers.deleteUser = function(request, response){
    const {firstName, lastName} = request.body;
    const userDetails = {};
    if(firstName) userDetails.firstName = firstName;
    if(lastName) userDetails.lastName = lastName;

    usersdb.deleteUser(userDetails).then(function(resp){
            response.status(200).json("Data Deleted successfully...!!!");
        }).catch(function(error){
            response.status(200).json("Error has been fatched...!!!", error)
        });
        console.log("User Deleted : ", userDetails);
}

module.exports = deleteUsers;

// http://localhost:3000/api/user/delete-user
