console.log("wooo");

window.onload = async () => {
  const options = {
    method: "GET",

    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
    },
  };

  const API_URL_Action_first = "https://striveschool-api.herokuapp.com/api/movies/Action"; // testing the Action category
  // const API_url = "https://striveschool-api.herokuapp.com/api/movies";
  // getMovies(API_URL)

  // ASYNC AWAIT APPROACH
  try {
    const resp = await fetch(API_URL_Action_first, options);
    console.log(resp);

    // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
    if (resp.status === 404) throw new Error("resource not found");
    if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

    // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
    const movies = await resp.json();
    console.log(movies);

    const moviesList = document.getElementById("actionMovies-1"); // only the first row

    moviesList.innerHTML = "";

    if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
    movies.forEach(({ imageUrl, _id }, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "col-md-2";
      movieDiv.id = `${_id}`;

      movieDiv.innerHTML = `<img class="movie-cover" src=${imageUrl} id="image${index}"/>`;
      moviesList.appendChild(movieDiv);
    });
  } catch (err) {
    console.log("ERROR HAPPENED", err);
    const h2 = document.querySelector("h2");
    h2.classList.add("text-danger");
    h2.innerText = err.message + ", try to refresh the page";
  }

  //const API_URL_Comedy_first = "https://striveschool-api.herokuapp.com/api/movies/Comedy"; // testing the Romance category

  // ASYNC AWAIT APPROACH
  // try {
  //   const resp = await fetch(API_URL_Comedy_first, options);
  //   console.log(resp);

  //   // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
  //   if (resp.status === 404) throw new Error("resource not found");
  //   if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

  //   // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
  //   const movies = await resp.json();
  //   console.log(movies);

  //   const moviesList = document.getElementById("comedyMovies-1"); // Comedy movies

  //   moviesList.innerHTML = "";

  //   if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
  //   movies.forEach(({ imageUrl, _id }, index) => {
  //     const movieDiv = document.createElement("div");
  //     movieDiv.className = "col-md-2";
  //     movieDiv.id = `${_id}`;

  //     movieDiv.innerHTML = `<img class="movie-cover" src=${imageUrl} id="image${index}"/>`;
  //     moviesList.appendChild(movieDiv);
  //   });
  // } catch (err) {
  //   console.log("ERROR HAPPENED", err);
  //   const h2 = document.querySelector("h2");
  //   h2.classList.add("text-danger");
  //   h2.innerText = err.message + ", try to refresh the page";
  // }
};

// ASYNC AWAIT APPROACH
//   try {
//     const resp = await fetch(API_URL, options);
//     console.log(resp);

//     // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
//     if (resp.status === 404) throw new Error("resource not found");
//     if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

//     // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
//     const movies = await resp.json();
//     console.log(movies);

//     const moviesList = document.querySelector(".movies"); // only the firt row

//     moviesList.innerHTML = "";

//     if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
//     movies.forEach(({ imageUrl, _id }, index) => {
//       const movieDiv = document.createElement("div");
//       movieDiv.className = "col-md-2";
//       movieDiv.id = `${_id}`;

//       movieDiv.innerHTML = `<img class="movie-cover" src=${imageUrl} id="image${index}"/>`;
//       moviesList.appendChild(movieDiv);
//     });

//   } catch (err) {
//     console.log("ERROR HAPPENED", err);
//     const h2 = document.querySelector("h2");
//     h2.classList.add("text-danger");
//     h2.innerText = err.message + ", try to refresh the page";
//   }
// };

// const getMovies = async (url) {
//   try {
//     const resp = await fetch(API_URL, options);
//     console.log(resp);

//     // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
//     if (resp.status === 404) throw new Error("resource not found");
//     if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

//     // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
//     const movies = await resp.json();
//     console.log(movies);

//     const moviesList = document.querySelector(".movies"); // only the firt row

//     moviesList.innerHTML = "";

//     if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
//     movies.forEach(({ imageUrl, _id }, index) => {
//       const movieDiv = document.createElement("div");
//       movieDiv.className = "col-md-2";
//       movieDiv.id = `${_id}`;

//       movieDiv.innerHTML = `<img class="movie-cover" src=${imageUrl} id="image${index}"/>`;
//       moviesList.appendChild(movieDiv);
//     });
//   } catch (err) {
//     console.log("ERROR HAPPENED", err);
//     const h2 = document.querySelector("h2");
//     h2.classList.add("text-danger");
//     h2.innerText = err.message + ", try to refresh the page";
//   }
// }
