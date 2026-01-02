

function getPostByID(postId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        }).then(function (postData) {
          console.log("Post Data:", postData);
          resolve(postData);
        }).catch(function (error) {
          reject(error); 
        });
    }, 3000);
  });
}

function getUserById(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
        method: "GET",
      })
        .then(function (response) {
          return response.json();
        }).then(function (userData) {
          console.log("User Data:", userData);
          resolve(userData);
        }).catch(function (error) {
          reject(error);
        });
    }, 5000);
  });
}


getPostByID(1)
  .then(function (postData) {
    return getUserById(postData.userId);
  }).then(function (userData) {
    console.log("Fetched User:", userData);
  }).catch(function (error) {
    console.error("Error:", error);
  });

/*
getPostByID(1).then(function (postData) {
    return getUserById(postData.userId);
  }).then(function(userData){
    return getPostByID(userData.userId);
  }).then(function(postData){
    console.log("Fetched userID : ", postData);
  }).then(function (userData) {
    console.log("Fetched postID:", userData);
  }).catch(function (error) {
    console.error("Error:", error);
  });
*/
/*
getPostByID(1).then(function(postData){
    console.log(userData);

    getUserById(postData.userId).then(function(userData){
        resolve(userData);
    }).catch(function(error){
        reject(error);
    })
}).catch(function(error){
    reject(error);
})

*/

