const main = document.getElementsByTagName('main')[0];

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDM0ZmU5MDE0NTI5Njg5Nzg0MGM1NWIxZjBlMjQ3NCIsInN1YiI6IjY0NjIxYzcyZTNmYTJmMDE4N2I5MmQwYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xVnzxBktNtdrj6EzIconSctcMkiw9wDyUwQnsObm_34'
    }
};

window.addEventListener('load', async() => {

    // Get movie data
    const url = window.location.href;
    const idSerie = url.split('/')[5];

    const getData = await fetch('https://api.themoviedb.org/3/tv/' + idSerie + '?language=en-US', options);
    const data = await getData.json();

    // Create elements
    const imageBack = document.createElement('img');
    imageBack.src = "https://image.tmdb.org/t/p/original" + data.backdrop_path;

    const titre = document.createElement('h2');
    titre.innerText = data.name;

    const divResumeInfos = document.createElement('div');
    divResumeInfos.className = 'divResumeInfos';

    const divResume = document.createElement('div');
    divResume.className = 'divResume';

    const resume = document.createElement('p');
    resume.innerText = data.overview;

    const divInfos = document.createElement('div');
    divInfos.className = 'divInfos'

    const genres = document.createElement('p');
    genres.innerText = "Categories : ";
    data.genres.forEach(genre => {
        genres.innerText = genres.innerText + genre.name + ', ';
    });
    genres.innerText = genres.innerText.substring(0, genres.innerText.length - 2);

    const release = document.createElement('p');
    release.innerText = "First release date : " + data.first_air_date;

    const lastRelease = document.createElement('p');
    lastRelease.innerText = "Last release date : " + data.last_air_date;

    const seasons = document.createElement('p');
    seasons.innerText = "Number of seasons : " + data.number_of_seasons;

    const production = document.createElement('p');
    production.innerText = "Production companies : ";
    data.production_companies.forEach(genre => {
        production.innerText = production.innerText + genre.name + ', ';
    });
    production.innerText = production.innerText.substring(0, production.innerText.length - 2);

    const contries = document.createElement('p');
    contries.innerText = "Production countries : ";
    data.production_countries.forEach(genre => {
        contries.innerText = contries.innerText + genre.name + ', ';
    });
    contries.innerText = contries.innerText.substring(0, contries.innerText.length - 2);

    const status = document.createElement('p');
    status.innerText = "Status : " + data.status;


    main.append(imageBack, titre, divResumeInfos);
    divResumeInfos.append(divResume, divInfos);
    divResume.append(resume);
    divInfos.append(genres, release, lastRelease, seasons, production, contries, status);

    const request = await fetch('https://api.themoviedb.org/3/tv/' + idSerie + '/recommendations?language=en-US&page=1', options);
    const result = await request.json();

    console.log(result);

    const titreRecom = document.createElement('h2');
    titreRecom.className = "titreRecom";
    titreRecom.innerText = "Recommendations";

    const seriesRecom = document.createElement('div');
    seriesRecom.className = "recoms";

    main.append(titreRecom, seriesRecom);

    result.results.forEach(recom => {

        const div = document.createElement('div');
        div.className = "recommendations";

        const link = document.createElement('a');
        link.href = '/cinetech/serie/' + recom.id;

        const image = document.createElement('img');
        image.src = "https://image.tmdb.org/t/p/w300" + recom.poster_path;

        const titre = document.createElement('p');
        titre.innerHTML = recom.name;

        seriesRecom.append(div);
        div.append(link);
        link.append(image, titre);
    });
})