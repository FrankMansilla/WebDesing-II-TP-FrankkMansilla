const apiKey = 'd13c9cff64cdd415463b6c8ead08c95e';
const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTNjOWNmZjY0Y2RkNDE1NDYzYjZjOGVhZDA4Yzk1ZSIsInN1YiI6IjY0Yzk4OTBlYmYwOWQxMDBlNGQ0YTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.64bWQuEZWCQl66CnHdTUAu5LV7CLzmAUrT5tIvyMtBM';




const fetchMovies = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const moviesContainer = document.getElementById('moviesContainer');

      data.results.slice(0, 20).forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie');

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
        poster.classList.add('poster');
        movieDiv.appendChild(poster);

        const title = document.createElement('p');
        title.textContent = movie.title;
        title.classList.add('title');
        movieDiv.appendChild(title);

        poster.addEventListener('click', () => {
          // Redirigir a la página de detalles de la película
          window.location.href = `movie_detail.html?id=${movie.id}`;
          // Aquí puedes pasar el ID de la película como parámetro en la URL
        });

        

        moviesContainer.appendChild(movieDiv);
      });
    } else {
      console.log('Error al obtener películas');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

const fetchSeries = async () => {
  try {
    const response = await fetch('https://api.themoviedb.org/3/discover/tv', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const seriesContainer = document.getElementById('seriesContainer');

      data.results.slice(0, 20).forEach(serie => {
        const serieDiv = document.createElement('div');
        serieDiv.classList.add('serie');

        const poster = document.createElement('img');
        poster.src = `https://image.tmdb.org/t/p/w200${serie.poster_path}`;
        poster.classList.add('poster');
        serieDiv.appendChild(poster);

        const title = document.createElement('p');
        title.textContent = serie.name;
        title.classList.add('title');
        serieDiv.appendChild(title);

        poster.addEventListener('click', () => {
          // Redirigir a la página de detalles de la película
          window.location.href = `series_detail.html?id=${serie.id}`;
          // Aquí puedes pasar el ID de la película como parámetro en la URL
        });

        seriesContainer.appendChild(serieDiv);
      });
    } else {
      console.log('Error al obtener series');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
};

fetchMovies();
fetchSeries();
