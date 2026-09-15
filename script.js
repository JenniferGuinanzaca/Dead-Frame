// DeadFrame JS

const movieGrid = document.getElementById("movie-grid");
function displayMovies(movies){
    movieGrid.innerHTML="";
    movies.forEach((movie)=>{
        const movieCard = document.createElement("div");

        movieCard.classList.add("movie-card");
        movieCard.innerHTML=`
        <img src="${movie.image}" alt="${movie.title}">
        <h3>${movie.title} (${movie.year})</h3>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p>${movie.description}</p>
        `;
        movieGrid.appendChild(movieCard);
    });
}

displayMovies(movies);

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        const category = button.getAttribute("data-category");

        if (category == "all") {
            displayMovies(movies);
        } 
        else {
            const filteredMovies = movies.filter((movie) => movie.genre === category);
            displayMovies(filteredMovies);
        }

    });
});

