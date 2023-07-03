//presenting movies on the screen
function showmovies(film){
    //set it to a variable so it's eas to call on later
    let movie = document.createElement("li")
    //give the html element a class name
    movie.className = 'moviecss'
    //innerhtml sets the content of the html
    movie.innerHTML = `
    <div class = "items" style ="background-image:url(${film.poster});"></div>
    <article id = "article">
        <h1>${film.title}</h1>
        <P>${film.description}</p>
        <p>Duration: ${film.runtime} minutes</p>
        <p>Starting Hours: ${film.showtime}</p>
        <p>
            <span class="capacity">${film.capacity}</span>: Seats Left
        <p>
            <span id="tc" class="ticket-count">${film.tickets_sold}</span>: Tickets Sold
        </p>
    <div class = "buttons">
        <button id = 'buy'> Buy Ticket </button>
    </div>
    </article>
    `
    //calculating the film capacity and tickets sold
    let calculate = movie.querySelector(`#buy`)
    calculate.addEventListener("click",() => {
        film.capacity-= 1
        movie.querySelector('span').textContent = film.capacity
    })
    calculate.addEventListener("click",() => {
        film.tickets_sold+= 1
        movie.querySelector('#tc').textContent = film.tickets_sold
    })
    document.getElementById("movie-list").appendChild(movie)
}

//FETCH REQUEST FOR EACH MOVIE
function getmovies(){
    fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(films => films.forEach(film => showmovies(film)))
}

//this function was set to the onclick button so that it executes everything when called upon
function initialize(){
    getmovies()
}



