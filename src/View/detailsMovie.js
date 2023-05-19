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
    const idMovie = url.split('/')[5];

    const getData = await fetch('https://api.themoviedb.org/3/movie/' + idMovie + '?language=en-US', options);
    const data = await getData.json();

    console.log(data);

    // Create elements
    const imageBack = document.createElement('img');
    imageBack.src = "https://image.tmdb.org/t/p/original" + data.backdrop_path;

    const titre = document.createElement('h2');
    titre.innerText = data.title;

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
    release.innerText = "Release date : " + data.release_date;

    const budget = document.createElement('p');
    budget.innerText = "Budget : " + data.budget.toLocaleString() + "€";

    const production = document.createElement('p');
    production.innerText = "Production companies : ";
    data.production_companies.forEach(genre => {
        production.innerText = production.innerText + genre.name + ', ';
    });
    production.innerText = production.innerText.substring(0, production.innerText.length - 2);

    const contries = document.createElement('p');
    contries.innerText = "Production companies : ";
    data.production_countries.forEach(genre => {
        contries.innerText = contries.innerText + genre.name + ', ';
    });
    contries.innerText = contries.innerText.substring(0, contries.innerText.length - 2);

    const revenue = document.createElement('p');
    revenue.innerText = "Revenue : " + data.revenue.toLocaleString() + "€";


    main.appendChild(imageBack);
    main.appendChild(titre);
    main.appendChild(divResumeInfos);

        divResumeInfos.appendChild(divResume);

            divResume.appendChild(resume);
        
        divResumeInfos.appendChild(divInfos);

            divInfos.appendChild(genres);
            divInfos.appendChild(release);
            divInfos.appendChild(budget);
            divInfos.appendChild(production);
            divInfos.appendChild(contries);
            divInfos.appendChild(revenue);

})