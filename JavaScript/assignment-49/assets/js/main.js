/* Implment the fetch method and apped the value from result into table format using DOM  */
/* fetch data the table  */

 document.getElementById('userForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission (no page reload)

      // Get input values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const age = document.getElementById('age').value;
      const gender = document.getElementById('gender').value;
      const city = document.getElementById('city').value;

      // Create new row and cells
      const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
      const newRow = document.createElement('tr');

      [firstName, lastName, age, gender, city].forEach(value => {
        const cell = document.createElement('td');
        cell.textContent = value;
        newRow.appendChild(cell);
      });

      table.appendChild(newRow);

      // Optionally reset form
      document.getElementById('userForm').reset();
    });