console.log("Fetch API")

async function fetchAPI(req, res) {
    const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    console.log(api,"API")
    const json = await api.json();
    console.log(json,"JSON")
}

 




// .then(response => response.json())
    // .then(json => console.log(json))