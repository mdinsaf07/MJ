const menu = document.getElementById("menu");
let flag = 0;
let flagone = 0;
const dropdown = document.getElementById('dropdown-content');
menu.addEventListener('click', function () {
    if (flag == 0) {
        dropdown.style.display = "block";
        flag = 1;
    }
    else {
        dropdown.style.display = "none";
        flag = 0;
    }
})

window.onclick = function (e) {

    if (flagone == 1 && e.target != modal) {
        modal.style.display = "none";
        flagone = 0;
    }

    if (e.target != menu) {
        dropdown.style.display = "none";
        flag = 0;
    }
}

// const movie = document.getElementById("2012");
// const modal = document.getElementById("modalbox");

// movie.addEventListener('click', function () {
//     console.log(flagone);
//     if (flagone == 0) {
//         modal.style.display = "block"
//         flagone=1;
//     }
//     else {
//         modal.style.display = "none";
//         flagone = 0;
//     }
// })

async function displayGenre(movie) {
    const genre = await getGenre();
    const nowPlaying = await getNowPlaying();
    // console.log(genre);
    // console.log(nowPlaying);

    var image = movie.querySelector('img');
    var movieName = movie.querySelector('#movie-name');
    image.src = `https://image.tmdb.org/t/p/w500${nowPlaying[0].poster_path}`;
    movieName.innerHTML = `${nowPlaying[0].title}`;
    for(i=1;i<nowPlaying.length;i++)
    {
        if(nowPlaying[i].video==false)
        {
            console.log(nowPlaying[i]);
        }
    var clonedMovie = movie.cloneNode(true);
    movie.parentNode.appendChild(clonedMovie);
    image = clonedMovie.querySelector('img');
    movieName = clonedMovie.querySelector('#movie-name');
    image.src = `https://image.tmdb.org/t/p/w500${nowPlaying[i].poster_path}`;
    movieName.innerHTML = `${nowPlaying[i].title}`;
    }
}

const movie = document.querySelector('#movieContainer div');
const movieContainer=document.querySelector('#movieContainer')
displayGenre(movie);

const form=document.querySelector('#searchBar');
const search=form.querySelector('input');
const title=document.querySelector('#heading');




form.addEventListener('submit',async function updateMovie(e){
    // console.log(e);
    e.preventDefault();
    const movies=await searchMovie(search.value);
    console.log(movies);
    movieContainer.innerHTML="";
    if(movies==undefined || movies.length==0)
    title.innerHTML="No results"
    else{
    title.innerHTML=`Results for ${search.value}`
    for(i=0;i<movies.length;i++)
    {
    var clonedMovie = movie.cloneNode(true);
    movieContainer.appendChild(clonedMovie);
    image = clonedMovie.querySelector('img');
    movieName = clonedMovie.querySelector('#movie-name');
    if(movies[i].poster_path){    
        image.src = `https://image.tmdb.org/t/p/w500${movies[i].poster_path}`;
}
    movieName.innerHTML = `${movies[i].title}`;
    }
}
});


