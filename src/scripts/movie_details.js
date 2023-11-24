// movie_details.js

window.onload = async function() {
    const apiKey = 'd13c9cff64cdd415463b6c8ead08c95e';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTNjOWNmZjY0Y2RkNDE1NDYzYjZjOGVhZDA4Yzk1ZSIsInN1YiI6IjY0Yzk4OTBlYmYwOWQxMDBlNGQ0YTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.64bWQuEZWCQl66CnHdTUAu5LV7CLzmAUrT5tIvyMtBM';
  
    // Obtener el ID de la película desde la URL
    const params = new URLSearchParams(window.location.search);
    const movieId = params.get('id');
  
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
  
        if (response.ok) {
          const movieDetails = await response.json();
  
          // Mostrar detalles en la página
          displayMovieDetails(movieDetails);
        } else {
          console.log('Error al obtener detalles de la película');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
  
    const displayMovieDetails = (movieDetails) => {
      // Referenciar el contenedor donde se mostrarán los detalles
      const movieDetailsContainer = document.getElementById('movieDetailsContainer');
  
      // Crear elementos HTML para mostrar los detalles
      const titleElement = document.createElement('h2');
      titleElement.textContent = movieDetails.title;
      movieDetailsContainer.appendChild(titleElement);
  
      const overviewElement = document.createElement('p');
      overviewElement.textContent = movieDetails.overview;
      movieDetailsContainer.appendChild(overviewElement);
  
      const releaseDateElement = document.createElement('p');
      releaseDateElement.textContent = `Release Date: ${movieDetails.release_date}`;
      movieDetailsContainer.appendChild(releaseDateElement);
  
      const posterElement = document.createElement('img');
      posterElement.src = `https://image.tmdb.org/t/p/w200${movieDetails.poster_path}`;
      posterElement.alt = movieDetails.title;
      movieDetailsContainer.appendChild(posterElement);
  
      // Puedes seguir añadiendo más elementos para mostrar más detalles de la película
    };
  
    fetchMovieDetails();
  };
  