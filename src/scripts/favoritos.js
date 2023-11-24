// Función para agregar una película a favoritos
function agregarPeliculaAFavoritos(id) {
    let favoritosPeliculas = JSON.parse(localStorage.getItem('favoritosPeliculas')) || [];
    
    if (!favoritosPeliculas.includes(id)) {
      favoritosPeliculas.push(id);
      localStorage.setItem('favoritosPeliculas', JSON.stringify(favoritosPeliculas));
    }
  }
  
  // Función para agregar una serie a favoritos
  function agregarSerieAFavoritos(id) {
    let favoritosSeries = JSON.parse(localStorage.getItem('favoritosSeries')) || [];
    
    if (!favoritosSeries.includes(id)) {
      favoritosSeries.push(id);
      localStorage.setItem('favoritosSeries', JSON.stringify(favoritosSeries));
    }
  }
  
  // Función para mostrar la lista de favoritos de películas
  function mostrarFavoritosPeliculas() {
    let favoritosPeliculas = JSON.parse(localStorage.getItem('favoritosPeliculas')) || [];
    
    // Mostrar los elementos favoritos en la interfaz de películas
    // Aquí puedes usar esta información para resaltar o mostrar los elementos marcados como favoritos en tu diseño de películas.html
  }
  
  // Función para mostrar la lista de favoritos de series
  function mostrarFavoritosSeries() {
    let favoritosSeries = JSON.parse(localStorage.getItem('favoritosSeries')) || [];
    
    // Mostrar los elementos favoritos en la interfaz de series
    // Aquí puedes usar esta información para resaltar o mostrar los elementos marcados como favoritos en tu diseño de series.html
  }
  