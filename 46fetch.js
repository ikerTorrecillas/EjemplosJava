console.log("fetch()");

// El método fetch realiza una petición a la API para obtener los datos en formato JSON
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch(() => console.log("error"))