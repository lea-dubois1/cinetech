const main = document.getElementsByTagName('main')[0];

window.addEventListener('load', async() => {

    const promise = await fetch('https://api.themoviedb.org/3/movie/76341?api_key=4d34fe90145296897840c55b1f0e2474');
    const response = await promise.json();

    console.log(response);

})