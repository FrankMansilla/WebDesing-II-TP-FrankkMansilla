// series_details.js

window.onload = async function() {
    const apiKey = 'd13c9cff64cdd415463b6c8ead08c95e';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTNjOWNmZjY0Y2RkNDE1NDYzYjZjOGVhZDA4Yzk1ZSIsInN1YiI6IjY0Yzk4OTBlYmYwOWQxMDBlNGQ0YTQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.64bWQuEZWCQl66CnHdTUAu5LV7CLzmAUrT5tIvyMtBM';
    
    // Obtener el ID de la serie desde la URL
    const params = new URLSearchParams(window.location.search);
    const seriesId = params.get('id');
    
    const fetchSeriesDetails = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${seriesId}?api_key=${apiKey}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json;charset=utf-8',
          },
        });
    
        if (response.ok) {
          const seriesDetails = await response.json();
    
          // Mostrar detalles en la página
          displaySeriesDetails(seriesDetails);
        } else {
          console.log('Error al obtener detalles de la serie');
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    };
    
    const displaySeriesDetails = (seriesDetails) => {
      // Referenciar el contenedor donde se mostrarán los detalles
      const seriesDetailsContainer = document.getElementById('seriesDetailsContainer');
    
      // Crear elementos HTML para mostrar los detalles
      const nameElement = document.createElement('h2');
      nameElement.textContent = seriesDetails.name;
      seriesDetailsContainer.appendChild(nameElement);
    
      const overviewElement = document.createElement('p');
      overviewElement.textContent = seriesDetails.overview;
      seriesDetailsContainer.appendChild(overviewElement);
    
      // Asegúrate de usar el campo adecuado para la fecha de inicio de la serie
      const firstAirDateElement = document.createElement('p');
      firstAirDateElement.textContent = `First Air Date: ${seriesDetails.first_air_date}`;
      seriesDetailsContainer.appendChild(firstAirDateElement);
    
      const posterElement = document.createElement('img');
      posterElement.src = `https://image.tmdb.org/t/p/w200${seriesDetails.poster_path}`;
      posterElement.alt = seriesDetails.name;
      seriesDetailsContainer.appendChild(posterElement);
    
      // Puedes seguir añadiendo más elementos para mostrar más detalles de la serie si están disponibles en la respuesta de la API
    };
    
    fetchSeriesDetails();
  };
  