
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
.then(function(response) {
    document.getElementById("container").innerHTML = builder(response.data);
console.log(response.data)
})
.catch(function(error) {
    console.log(error);
});

function builder(data) {
    // let table = document.getElementById("container");
    let HTML = "";
        if (typeof data === 'object') {
            if (Array.isArray(data)){
                HTML += `<ol>`;
                for (let i = 0; i < data.length; i++) {
                    HTML += builder(data[i]);  
                }
                HTML += `</ol>`;
            }else{
                HTML += `<ul>`;
                for (const key in data) {
                    HTML += builder(data[key]);
                }
                HTML += `</ul>`;
            }
        }else{
            HTML += `<li>${data}</li>`
            
        }
    return HTML;
}