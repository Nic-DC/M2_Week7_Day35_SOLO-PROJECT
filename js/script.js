console.log("wooo");

const options = {};
window.onload = async () => {
  const API_URL = "https://striveschool-api.herokuapp.com/api/movies/Action"; // testing the Action category
  // ASYNC AWAIT APPROACH
  try {
    const resp = await fetch(API_URL);

    // EXITS THE EXECUTION IN ONE OF THESE TWO THROWINGS
    if (resp.status === 404) throw new Error("resource not found");
    if (!resp.ok) throw new Error("generic error, something wrong with the fetch");

    // IF ERROR IS THROWN NOTHING HERE WILL BE RUNNING
    const movies = await resp.json();

    const moviesList = document.querySelector(".movies"); // only the firt row

    moviesList.innerHTML = "";

    if (!Array.isArray(movies)) throw new Error("You need to pass an array into the function");
    movies.forEach(({ imageUrl, _id }, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "col-md-2";
      movieDiv.id = `${_id}`;

      movieDiv.innerHTML = `<img class="movie-cover" src=${imageUrl} id="image${index}"/>`;
      moviesList.appendChild(movieDiv);
    });

    // <div class="col-md-2">
    //             <img class="movie-cover" src="./assets/media/media12.jpg" />
    //           </div>
  } catch (err) {
    console.log("ERROR HAPPENED", err);
    const h2 = document.querySelector("h2");
    h2.classList.add("text-danger");
    h2.innerText = err.message + ", try to refresh the page";
  }
};
