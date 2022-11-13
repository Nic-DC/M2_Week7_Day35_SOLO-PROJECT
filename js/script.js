console.log("wooo");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmQyYWQ0YmUzZDAwMTU4NDYwMzgiLCJpYXQiOjE2NjgwODcwODIsImV4cCI6MTY2OTI5NjY4Mn0.VtbiHHI8R5YkZzRvBB0wBIO4SqtTZr10KGYVPHIVfOc",
  },
};

window.onload = async () => {
  const API_URL_Action = "https://striveschool-api.herokuapp.com/api/movies/Action"; // testing the Action category
  const API_URL_Comedy = "https://striveschool-api.herokuapp.com/api/movies/Comedy"; // testing the Comedy category
  const API_URL_Adventure = "https://striveschool-api.herokuapp.com/api/movies/Adventure"; // testing the Adventure category

  const categories = [API_URL_Action, API_URL_Comedy, API_URL_Adventure]; // the list with all the categories

  const parentAction = document.getElementById("actionMovies-1");
  const parentComedy = document.getElementById("comedyMovies-1");
  const parentAdventure = document.getElementById("adventureMovies-1");

  renderMovie(API_URL_Action, parentAction); // Adventure category
  renderMovie(API_URL_Comedy, parentComedy); // Adventure category
  renderMovie(API_URL_Adventure, parentAdventure); // Adventure category
};

const renderMovie = async (url, parent) => {
  try {
    const resp = await fetch(url, options);
    console.log(resp);

    // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
    if (resp.status === 404) throw new Error("resource not found");
    if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

    // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
    const movies = await resp.json();
    console.log(movies);

    const moviesList = parent; // the parent element

    moviesList.innerHTML = "";

    if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
    movies.forEach(({ imageUrl, _id }, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "col-md-2";
      movieDiv.id = `${_id}`;

      movieDiv.innerHTML = `<a href="./details.html?movieId=${_id}"><img class="movie-cover" src=${imageUrl} id="image${index}"/></a> `;
      moviesList.appendChild(movieDiv);
    });
  } catch (err) {
    console.log("ERROR HAPPENED", err);
    const h2 = document.querySelector("h2");
    h2.classList.add("text-danger");
    h2.innerText = err.message + ", try to refresh the page";
  }
};
