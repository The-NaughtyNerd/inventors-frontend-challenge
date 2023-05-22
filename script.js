"use strict";

const hamburgerOpen = document.querySelector(".hamburger-open");
const hamburgerClose = document.querySelector(".hamburger-close");
const smallNavbar = document.querySelector(".nav-sm");

// HAMBURGER FUNCTIstyle.display = "block"ONALITY
hamburgerOpen.addEventListener("click", () => {
  {
    smallNavbar.style.display = "contents";
    hamburgerOpen.classList.toggle("active");
    hamburgerClose.classList.toggle("active");
    console.log("clicked");
  }
});
hamburgerClose.addEventListener("click", () => {
  {
    smallNavbar.style.display = "none";
    hamburgerOpen.classList.toggle("active");
    hamburgerClose.classList.toggle("active");
    console.log("clicked");
  }
});

// const DUMMY_MOVIES = [
//   {
//     id: 1,
//     title: "Plane",
//   },
//   {
//     id: 2,
//     title: "Plane",
//   },
//   {
//     id: 3,
//     title: "Plane",
//   },
//   {
//     id: 4,
//     title: "Plane",
//   },
// ];

// const data = DUMMY_MOVIES.map((movie) => (
//   // <div key={movie.id}> {movie.title}</div>
// ));

/** Fetch data from Server */
const apiKey = "5dc3bb994fb076d56fd9dd8942e2f25a";

// const fetchData = function (url, callback, optionalParam) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => callback(data, optionalParam));
// };

let movieList;

const fetchData = async () => {
  try {
    const res = await fetch(
      "http://api.themoviedb.org/3/movie/popular?api_key=5dc3bb994fb076d56fd9dd8942e2f25a"
    );
    const data = await res.json();

    movieList = data.results;
    console.log(movieList);
  } catch (error) {
    console.error(error);
  }
};

fetchData();
console.log(movieList);
