const usersdb = require("./usersdb");

const addUsers = {};

addUsers.addUser = (request, response) => {
  const { name, email, age, city } = request.body;

  const userDetails = { name, email, age, city };

  usersdb.addUser(userDetails).then(() =>
     response.status(200).send("User added successfully.")
    ).catch((error) => { console.error("Add User Error:", error);
      response.status(500).send("Failed to add user.");
    });
    console.log(email);
};

module.exports = addUsers;

// http://localhost:3000/api/user/add-user