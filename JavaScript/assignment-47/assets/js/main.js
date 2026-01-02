
 /* const form = document.getElementById('userForm');
const responseDiv = document.getElementById('response');

form.addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        firstName: form.firstName.value,
        lastname: form.lastname.value,
        email: form.email.value,
        address: form.address.value,
        city: form.city.value,
    };

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/users',{
            method:'GET',
            headers: {
                'Content-Type': 'application/json'
            },
             body: JSON.stringify(formData)
        });
        if(!res.ok) throw new error('Server Error: ${res.status}');
        
        const result = await res.json();
        responseDiv.textContent = 'From submitted' + result.id;
    }
    catch(error){
        responseDiv.style.color = 'red';
        responseDiv.textContent = "Error to submit..."+ error.message;
    }
}); */

function fetchPost() {
      //const url = 'https://jsonplaceholder.typicode.com/posts/2';

      const url = 'https://jsonplaceholder.typicode.com/posts/15';

      fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          document.getElementById('output').textContent = data.title;
        })
        .catch(error => {
          document.getElementById('output').textContent = 'Error fetching data.';
          console.error('Fetch error:', error);
        });
    }