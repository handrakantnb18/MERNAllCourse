/* A callback is a function passed as an argument to another function, and it's invoked later 
    — usually after some operation completes. */

function getPostByID(postId, callback){
    
             setTimeout(() => {

                fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,)
                    .then(response => response.json())
                    .then(postData => {
                        console.log("post: ", postData);
                        callback(null, postData);
                    }).catch(error => {
                        callback(error);
                    });
                  }, 3000);  
    }

function getUserById(userId, callback){
    
        setTimeout(() => {
          
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(userData =>{
                console.log("User : ", userData);
                callback(null, userData);
            }).catch(error => {
                callback(error);
            });   
        }, 5000);
}

getPostByID(1, function(err, postData){
    if(err){
        return console.log("Error getting post: ", err);
    }

    getUserById(postData.userId, function(err, userData){
        if(err){
            return console.log("Error getting user: ", err);
        }
        console.log("Final user data :", userData);
    });
});