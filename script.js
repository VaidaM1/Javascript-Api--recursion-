
// Make a request for a user with a given ID
axios.get('https://jsonplaceholder.typicode.com/users')
  .then(function (response) {
//       let names = response.data.map(user => user.name);
//       let ulElement = document.getElementsByTagName("ul")[0];

//     let liHtml = "";
//     for (let i = 0; i < names.length; i++) {
//         consta name = names[i];
//         liHtml += `<li>${name}</li>`;
//     }
//     ulElement.innerHTML = liHtml;

let table = document.getElementById("table");
let HTML = "";

console.log(Object.values(response.data[0]));
response.data.forEach(user => {
//     HTML += `<tr>`
//     HTML += `<td>${user.id} </td>`
//     HTML += `<td>${user.name} </td>`
//     HTML += `<td>${user.username} </td>`
//     HTML += `<td>${user.email} </td>`
//     HTML += `<td>${user.phone} </td>`
//     HTML += `<td>${user.website} </td>`
//     HTML += `</tr>`
// });

    HTML += 
    `<tr>
        <td>${user.id} </td>
        <td>${user.name} </td>
        <td>${user.username} </td>
        <td>${user.email} </td>
        <td>${user.phone} </td>
        <td>${user.website} </td>
        <td>
            <ul>
             <li>${user.company.name}<?li>
             <li>${user.company.catchPhrase}<?li>
             <li>${user.company.bs}<?li>
            </ul>
        </td>
        <td>
            <ol>
             <li>${user.address.city}<?li>
             <li>${user.address.street}<?li>
             <li>${user.address.suite}<?li>
             <li>${user.address.zipcode}<?li>
                <li>
                  <ul>
                    <li>${user.address.geo.lat}<?li>
                    <li>${user.address.geo.lng}<?li>
                  </ul>
                </li>
            </ol>
        </td>`

});

table.innerHTML += HTML;

})

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

  //1. make a variable where we store the names of received array of objects
  //2. Select the <ul> html element from document
  //3. for loop to go trougt every name to append the name to ul document
