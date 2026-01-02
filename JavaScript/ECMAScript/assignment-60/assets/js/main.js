//  the includes function
// https://jsonplaceholder.typicode.com/posts
// https://jsonplaceholder.typicode.com/users
function getPostByID(postId) {

    const promisResult = new Promise(function(resolve, reject){

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
            method: "GET"

        }).then(function(responce){
            return responce.json();
        }).then(function(postData){
            resolve(postData);
        }).catch(function(error){
            reject(error);
        })
        });
        return promisResult;
    };

    function getUserById(userId){

    const promisResult = new Promise(function(resolve, reject){

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{
            method: "GET"

        }).then(function(resp){
            return resp.json();
        }).then(function(postData){
            resolve(postData);
        }).catch(function(error){
            reject(error);
        })
        });
        return promisResult;
    };

    async function loadUserandPostData() {
        const postData = await getPostById(1);
        const userData = await getUserById(postData.userId);
        console.log(userData);
    }
    loadUserandPostData();
