const usersdb = require("./usersdb");

const getUsers = {};

getUsers.getUser = (request, response) => {
  const { name, email, age, city, password } = request.body;
  const filters = {};
  if (name) filters.name = name;
  if (email) filters.email = email;
  if (age) filters.age = age;
  if (city) filters.city = city;
  if (password) filters.password = password;

  usersdb.getUser(filters).then(users => response.status(200).json(users)
      ).catch(error => {
      console.error("Fetch error:", error);
      response.status(500).json({ message: "Unable to retrieve users." });
    });
    console.log(filters);
};

// get user by id working..
getUsers.getUserById = (request, response) => {
  const id = request.params.id;
  console.log("Fetching user with ID:", id);

  usersdb.getUserById(id).then(user => {
      if (!user) return response.status(404).send("User not found.");
      response.json(user);
    }).catch(err => {
      console.error("Error retrieving user by ID:", err);
      response.status(500).send("Error retrieving user by ID.");
    });
};

// get user by email working..
getUsers.getUserByEmail = (request, response) => {
  const email = request.params.email;
  console.log("Fetching user with Email:", email);

  usersdb.getUserByEmail(email).then(user => {
      if (!user) return response.status(404).send("User not found.");
      response.json(user);
    }).catch(err => {
      console.error("Error retrieving user by Email:", err);
      response.status(500).send("Error retrieving user by Email.");
    });
};

// get all users 
getUsers.getAllUsers = (request, response) => {
  const filters = request.query;
  console.log("Fetching users with filters:", filters);

  usersdb.getAllUsers(filters).then(users => {
      if (!users || users.length === 0) {
        if (filters) {
            filters.name = String(filters.name),
            filters.email = String(filters.email)
            }
        return response.status(404).send("No users found.");
      }
      response.json(users);
    }).catch(err => {
      console.error("Error retrieving users:", err);
      response.status(500).send("Error retrieving users.");
    });
};

module.exports = getUsers;

// http://localhost:3000/api/user/get-user

// http://localhost:3000/api/user/get-user-by-id/68a8916a716f75fb681e21cf

// http://localhost:3000/api/user/get-user/email/rushabh.punt@gmail.com

// http://localhost:3000/api/user/get-all-users?email=rushabh.punt@gmail.com&city=Delhi

// http://localhost:3000/api/user/get-all-users
