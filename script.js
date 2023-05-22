const hamburgerOpen = document.querySelector(".hamburger-open");
const navbar = document.querySelector(".navbar");
const hamburgerClose = document.querySelector(".hamburger-close");
const smallNavbar = document.querySelector(".nav__bar-sm");

// if (smallNavbar.style.display === "none") {
//   hamburgerOpen.addEventListener("click", function () {
//     smallNavbar.style.display = "contents";
//     hamburgerOpen.style.display = "none";
//     hamburgerClose.style.display = "block";
//     console.log("clicked");
//   });
// } else if (smallNavbar.style.display === "contents") {
//   hamburgerClose.addEventListener("click", function () {
//     smallNavbar.style.display = "none";
//     hamburgerClose.style.display = "none";
//     hamburgerOpen.style.display = "block";
//   });
// }

hamburgerOpen.addEventListener("click", () => {
  {
    smallNavbar.style.display = "contents";
    hamburgerOpen.style.display = "none";
    hamburgerClose.style.display = "block";
    console.log("clicked");
  }
});
hamburgerClose.addEventListener("click", () => {
  {
    smallNavbar.style.display = "none";
    hamburgerOpen.style.display = "inherit";
    hamburgerClose.style.display = "none";
    console.log("clicked");
  }
});

// hamburgerOpen.addEventListener('click', ()=> {
//   if(smallNavbar.style.display === 'none'){
//     smallNavbar.style.display = "contents";
//     hamburgerOpen.style.display = "none";
//     hamburgerClose.style.display = "block";
//     console.log("clicked");
//   }else {
//     smallNavbar.style.display = "none";
//     hamburgerOpen.style.display = "block";
//     hamburgerClose.style.display = "none";
//     console.log("clicked");
//   }
// })
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
