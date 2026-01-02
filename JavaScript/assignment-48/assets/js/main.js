/* Implment the fetch method and apped the value from result into table format using DOM  */
/* fetch data the table  */

document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("submitBtn");
    const tBody = document.getElementById("tBody");

  
    btn.addEventListener("click", function(){
        fetch("https://jsonplaceholder.typicode.com/users",{
             method: "GET"
        }).then(function(response){
            return response.json();
        }).then(function(resp){
            var row = " ";

            if(typeof resp === "object" && resp.length > 5){
                var index = 1;
                for(let items of resp){
                    const id = items.id;
                    const name = items.name;
                    const username = items.username;
                    const email = items.email;
                    
                    const companyName =items.company.name;
                    const city = items.address.city;
                    const table = document.createElement("table");
                    const thead = document.createElement("thead");
                    const tr= document.createElement("tr");
                    const td= document.createElement("td");
                   
                    const trData = 
                    "<tr><td>${index}</td><td>${name}</td><td>${username}</td><td>${email}</td><td>${companyName}</td><td>${city}</td></tr>";

                      
                    row = row + trData;
                    
                    td.append(id);
                    td.append(name);
                    td.append(username);
                    td.append(email);
                    td.append(companyName);
                    td.append(city);
                    table.appendChild(thead);
                    thead.appendChild(tr);
                    tr.appendChild(td);
                    tBody.appendChild(tr);
                    
                    index++;
                }
            }
                console.log("All data will be fatched..");  
        }).catch(function(error){
            console.log(error, "Fatching Error ...");
        })
            
            console.log("Please check it once data can not be fetch..")
    })
    
})
