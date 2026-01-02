document.addEventListener("DOMContentLoaded", function()
{
    const btn = document.getElementById("submitBtn");
    const tBody = document.getElementById("tBody");

    btn.addEventListener("click", function() 
    {
        fetch("https://jsonplaceholder.typicode.com/users",
            {
                method: "GET"
             }).then(function(response)
             {
                return response.json();
             }).then(function(resp){
            var row = " ";
            if(typeof resp === "object" && resp.length > 0){
                var index = 1;
                for(let items of resp){
                    const name = items.name;
                    const email = items.email;
                    const username = items.username;
                    const companyName =items.company.name;
                    const city = items.address.city;

                    const trData = 
                    '<tr><td>${index}</td><td>${name}</td><td>${email}</td><td>${username}</td><td>${companyName}</td><td>${city}</td></tr>';

                    //row = row + trData;
                    tBody.appendChild(trData);

                    index++;
                }
            }
        }).catch(function(error){
            console.log(error,"Error : ")
            
        })
        
     ))
    
    })
    
})