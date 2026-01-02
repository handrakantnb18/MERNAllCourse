const usersdb = require("./usersdb");

const updateUsers = {};

updateUsers.updateUserById = (request, response) => {
  const id = request.params.id;
  const updateData = request.body;

  usersdb.updateUserById(id, updateData).then(result => {
      if (!result) return response.status(404).send("User not found.");
      response.status(200).json({ message: "User updated.", data: result });
    }).catch(error => {
      console.error("Update error:", error);
      response.status(500).send("Unable to update the data.");
    });
    //console.log(email);
};

module.exports = updateUsers;

// http://localhost:3000/api/user/update-user/68af27df15cde9b03b319a30

// http://localhost:3000/api/user/update-user/68a89a9c9aa59b936b6cd6a0