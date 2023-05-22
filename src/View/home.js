const main = document.getElementsByTagName('main')[0];
const trendingMovies = document.querySelector('.trendingMoviesDiv');
const trendingSeries = document.querySelector('.trendingSeriesDiv');
const newMovies = document.querySelector('.newMoviesDiv');
const newSeries = document.querySelector('.newSeriesDiv');
const favoris = document.querySelector('.favDiv');
const mayLike = document.querySelector('.mayLikeDiv');

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM0ZmU5MDE0NTI5Njg5Nzg0MGM1NWIxZjBlMjQ3NCIsInN1YiI6IjY0NjIxYzcyZTNmYTJmMDE4N2I5MmQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVnzxBktNtdrj6EzIconSctcMkiw9wDyUwQnsObm_34'
    }
};

window.addEventListener('load', async() => {

    // FILMS
    const getTrendingM = await fetch('https://api.themoviedb.org/3/movie/popular?language=en&page=1', options);
    const trendingM = await getTrendingM.json();

    trendingM.results.forEach(movie => {

        const div = document.createElement('div');
        div.className = "movie";

        const link = document.createElement('a');
        link.href = '/cinetech/movie/' + movie.id;

        const image = document.createElement('img');
        image.src = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

        const titre = document.createElement('p');
        titre.innerHTML = movie.title;

        trendingMovies.append(div);
        div.append(link);
        link.append(image, titre);
    });

    // SERIES
    const getTrendingS = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', options);
    const trendingS = await getTrendingS.json();

    trendingS.results.forEach(serie => {

        const div = document.createElement('div');
        div.className = "serie";

        const link = document.createElement('a');
        link.href = '/cinetech/serie/' + serie.id;

        const image = document.createElement('img');
        image.src = "https://image.tmdb.org/t/p/w300" + serie.poster_path;

        const titre = document.createElement('p');
        titre.innerHTML = serie.name;

        trendingSeries.append(div);
        div.append(link);
        link.append(image, titre);
    });

    // NEW MOVIES
    const getNewM = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options);
    const newM = await getNewM.json();

    newM.results.forEach(movieN => {

        const div = document.createElement('div');
        div.className = "movieN";

        const link = document.createElement('a');
        link.href = '/cinetech/movie/' + movieN.id;

        const image = document.createElement('img');
        image.src = "https://image.tmdb.org/t/p/w300" + movieN.poster_path;

        const titre = document.createElement('p');
        titre.innerHTML = movieN.title;

        newMovies.append(div);
        div.append(link);
        link.append(image, titre);
    });

    // NEW SERIES
    const getNewS = await fetch('https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1', options);
    const newS = await getNewS.json();

    newS.results.forEach(serieN => {

        const div = document.createElement('div');
        div.className = "serieN";

        const link = document.createElement('a');
        link.href = '/cinetech/serie/' + serieN.id;

        const image = document.createElement('img');
        image.src = "https://image.tmdb.org/t/p/w300" + serieN.poster_path;

        const titre = document.createElement('p');
        titre.innerHTML = serieN.name;

        newSeries.append(div);
        div.append(link);
        link.append(image, titre);
    });
})