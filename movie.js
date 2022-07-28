const key = '0b12eb85ea7fb90e5bb2b532687f8cd3';

const getGenre = async () => {
const endpoint='https://api.themoviedb.org/3/genre/movie/list'
const query=`?api_key=${key}&language=en-US`
const response=await fetch(endpoint+query);
const data=await response.json();
return data.genres;
}

const getNowPlaying=async()=>{
    const endpoint='https://api.themoviedb.org/3/movie/now_playing'
    const query=`?api_key=${key}&language=en-US&page=1`
    const response=await fetch(endpoint+query);
    const data=await response.json();
    return data.results;
}

const searchMovie=async(movieName)=>{
    const endpoint='https://api.themoviedb.org/3/search/movie';
    const query=`?api_key=${key}&language=en-US&page=1&include_adult=false&query=${movieName}`;
    const response=await fetch(endpoint+query);
    const data=await response.json();
    return data.results;
}

