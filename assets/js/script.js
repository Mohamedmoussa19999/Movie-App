"use strict";

/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  window.scrollY >= 300
    ? goTopBtn.classList.add("active")
    : goTopBtn.classList.remove("active");
});
//Popular Movies
const API_KEY = "api_key=3337ed8f12c4d26bde9ee889c94fa09b";
const home = document.getElementById("home");
const footer = document.getElementById("footer");
const details = document.getElementById("details");
details.style.display = "none";
const BASE_URL = "https://api.themoviedb.org/3";
const PopAPI_URL =
  BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const getPopularMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showPopularMovies(data.results);
    });
};
getPopularMovies(PopAPI_URL);
const showPopularMovies = (data) => {
  const popular = document.getElementById("popular");
  popular.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id, release_date } =
      movie;
    const movie1 = document.createElement("div");
    movie1.classList.add("movie-card");
    movie1.innerHTML = `
                    <figure class="card-banner">
                      <img
                      src="${
                        poster_path
                          ? IMG_URL + poster_path
                          : "http://via.placeholder.com/1080x1580"
                      }" alt="${title}"
                      />
                    </figure>
                  

                  <div class="title-wrapper">
                      <h3 class="card-title" id="${id}">${title}</h3>
                    

                    <time datetime=${release_date.slice(
                      0,
                      4
                    )}>${release_date.slice(0, 4)}</time>
                  </div>

                  <div class="card-meta">
                    <div class="badge badge-outline">HD</div>

                    <div class="rating">
                      <ion-icon name="star"></ion-icon>

                      <data>${vote_average}</data>
                    </div>
                  </div>
      
      `;

    popular.appendChild(movie1);
    document.getElementById(id).addEventListener("click", () => {
      details.style.display = "block";
      home.style.display = "none";
      footer.style.display = "none"
      console.log(details);
      console.log(id);
      openMovieDetails(movie);
    });
  });
};

//Top Movies
const TopAPI_URL =
  "https://api.themoviedb.org/3/movie/top_rated?api_key=3337ed8f12c4d26bde9ee889c94fa09b&language=en-US&page=1";

const getTopMovies = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showTopMovies(data.results);
    });
};
getTopMovies(TopAPI_URL);
const showTopMovies = (data) => {
  const top = document.getElementById("topRated");
  top.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id, release_date } =
      movie;
    const movie1 = document.createElement("div");
    movie1.classList.add("movie-card");
    movie1.innerHTML = `
                    
                <figure class="card-banner">
                <img
                src="${
                  poster_path
                    ? IMG_URL + poster_path
                    : "http://via.placeholder.com/1080x1580"
                }" alt="${title}"
                />
              </figure>


            <div class="title-wrapper">
                <h3 class="card-title" id="${id}">${title}</h3>
              

              <time datetime=${release_date.slice(0, 4)}>${release_date.slice(
      0,
      4
    )}</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">HD</div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>${vote_average}</data>
              </div>
            </div>
    
    `;

    top.appendChild(movie1);
    document.getElementById(id).addEventListener("click", () => {
      details.style.display = "block";
      home.style.display = "none";
      footer.style.display = "none"
      console.log(id);
      openMovieDetails(movie);
    });
  });
};
//Top Series
const TopSeriesAPI_URL =
  "https://api.themoviedb.org/3/tv/top_rated?api_key=3337ed8f12c4d26bde9ee889c94fa09b&language=en-US&page=1";

const getTopSeries = (url) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);
      showTopSeries(data.results);
    });
};
getTopSeries(TopSeriesAPI_URL);
const showTopSeries = (data) => {
  const top = document.getElementById("tvSeries");
  top.innerHTML = "";
  data.forEach((movie) => {
    const { name, poster_path, vote_average, overview, id, first_air_date } =
      movie;
    const movie1 = document.createElement("div");
    movie1.classList.add("movie-card");
    movie1.innerHTML = `
                    
                <figure class="card-banner">
                <img
                src="${
                  poster_path
                    ? IMG_URL + poster_path
                    : "http://via.placeholder.com/1080x1580"
                }" alt="${name}"
                />
              </figure>


            <div class="title-wrapper">
                <h3 class="card-title" id="${id}">${name}</h3>
              

              <time datetime=${first_air_date.slice(
                0,
                4
              )}>${first_air_date.slice(0, 4)}</time>
            </div>

            <div class="card-meta">
              <div class="badge badge-outline">HD</div>

              <div class="rating">
                <ion-icon name="star"></ion-icon>

                <data>${vote_average}</data>
              </div>
            </div>
    
    `;

    top.appendChild(movie1);
    document.getElementById(id).addEventListener("click", () => {
      details.style.display = "block";
      home.style.display = "none";
      footer.style.display = "none"
      console.log(id);
      openSeriesDetails(movie);
    });
  });
};
const openMovieDetails = (movie) => {
  console.log(movie);
  const {
    title,
    poster_path,
    popularity,
    overview,
    release_date,
    vote_average,
    genres,
  } = movie;
  const detailsSection = document.getElementById("movie-detail");
  detailsSection.innerHTML = "";
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("container");
  detailsContainer.innerHTML = `
    <figure class="movie-detail-banner">

            <img src="${
              poster_path
                ? IMG_URL + poster_path
                : "http://via.placeholder.com/1080x1580"
            }" alt="${title}">

            

          </figure>

          <div class="movie-detail-content">

            <h1 class="h1 detail-title">
              ${title}
            </h1>

            <div class="meta-wrapper">

            <div class="card-meta">
            <div class="badge badge-outline">HD</div>

            
          </div>
            
              <div class="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time datetime="${release_date.slice(
                    0,
                    4
                  )}">${release_date.slice(0, 4)}</time>
                </div>
                <div class="rating-movie">
              <ion-icon name="star"></ion-icon>

              <data>${vote_average}</data>
            </div>
              </div>

            </div>

            <p class="storyline">
              ${overview}
            </p>

          </div>
    `;
  detailsSection.appendChild(detailsContainer);
};
const openSeriesDetails = (movie) => {
  console.log(movie);
  const {
    name,
    poster_path,
    popularity,
    overview,
    first_air_date,
    vote_average,
    genres,
  } = movie;
  const detailsSection = document.getElementById("movie-detail");
  detailsSection.innerHTML = "";
  const detailsContainer = document.createElement("div");
  detailsContainer.classList.add("container");
  detailsContainer.innerHTML = `
    <figure class="movie-detail-banner">

            <img src="${
              poster_path
                ? IMG_URL + poster_path
                : "http://via.placeholder.com/1080x1580"
            }" alt="${name}">

            

          </figure>

          <div class="movie-detail-content">

            <h1 class="h1 detail-title">
              ${name}
            </h1>

            <div class="meta-wrapper">

              <div class="badge-wrapper">

                <div class="badge badge-outline">HD</div>
              </div>

              <div class="date-time">

                <div>
                  <ion-icon name="calendar-outline"></ion-icon>

                  <time datetime="${first_air_date.slice(
                    0,
                    4
                  )}">${first_air_date.slice(0, 4)}</time>
                </div>
                <div class="rating-movie">
              <ion-icon name="star"></ion-icon>

              <data>${vote_average}</data>
            </div>
              </div>

            </div>

            <p class="storyline">
              ${overview}
            </p>

          </div>
    `;
  detailsSection.appendChild(detailsContainer);
};
