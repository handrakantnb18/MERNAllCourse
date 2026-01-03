// 97 - Get the details of current user from existing os

const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);