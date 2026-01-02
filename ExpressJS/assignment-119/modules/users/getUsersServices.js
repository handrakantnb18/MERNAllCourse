const usersdb = require('./usersdb');
const getUsersServices = {};

getUsersServices.getUser = function (request, response) {
    const { firstName, lastName, profession } = request.query;

    const userDetails = {};

    if (firstName) userDetails.firstName = firstName;
    if (lastName) userDetails.lastName = lastName;
    if (profession) userDetails.profession = profession;

    usersdb.getUser(userDetails).then(function (resp) {
            response.status(200).json({ message: "Record retrieved successfully...",data: resp});
        }).catch(function (error) { 
            console.error("Error fetching user:", error);
            response.status(500).send("Unable to process the request");
        });
    console.log("User search filter:", userDetails);
};

module.exports = getUsersServices;

// http://localhost:3000/api/user/get-user
