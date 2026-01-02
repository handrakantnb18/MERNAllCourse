// 120 - Implement the user module and create API for below:
// insert, get all users, get user by id, update user by id, delete user by id, get user by email id

const express = require('express');
const cors = require('cors');
const app = express();

const userRouters = require('./modules/users/router');
const mongoConnect = require('./config/mongoDBConnect');

app.use(cors());
app.use(express.json());

app.use('/api/product', userRouters);

mongoConnect
  .then(() => {
    app.listen(3000, () => {
      console.log('Server started successfully!');
      console.log('[>>>>>>] Running on port: 3000');
    });
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB...', error);
  });
