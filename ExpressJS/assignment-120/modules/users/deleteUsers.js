const usersdb = require("./usersdb");

const deleteUsers = {};

 deleteUsers.deleteUserById = (request, response) => {
   const id = request.params.id;
   console.log("Deleted user with ID:", id);

   usersdb.deleteUserById(id).then(user => {
  
       if (!user) return response.status(404).send("User not found.");
       response.status(200).send("User deleted successfully.", user);
       // response.json(user);
     }).catch(error => {
       console.error("Delete error:", error);
       response.status(500).send("Error while deleting user. ");
     });
 };

module.exports = deleteUsers;

// http://localhost:3000/api/user/delete-user/68a89163716f75fb681e21cd
// http://localhost:3000/api/user/delete-user/68af2f105a99ce3687687b41
