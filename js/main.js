const peliculas = [
    {
      nombre: "Interestellar",
      director: "Christopher Nolan",
      sinopsis: "Un grupo de exploradores viaja a través de un agujero de gusano en busca de un nuevo hogar para la humanidad."
    },
    {
      nombre: "Princesa Mononoke",
      director: "Hayao Miyazaki",
      sinopsis: "Un joven guerrero se encuentra en medio de una lucha entre los seres humanos y los espíritus del bosque."
    },
    {
      nombre: "Aftersun",
      director: "Charlotte Wells",
      sinopsis: "Veinte años después de sus últimas vacaciones en un decadente centro vacacional, Sophie reflexiona sobre el raro tiempo que pasó con su amoroso e idealista padre, Calum"
    },
    {
      nombre: "Her",
      director: "Spike Jonze",
      sinopsis: "Un hombre desarrolla una relación romántica con un sistema operativo de inteligencia artificial."
    },
    {
      nombre: "Taxi Driver",
      director: "Martin Scorsese",
      sinopsis: "Un taxista solitario y alienado se convierte en un justiciero en las peligrosas calles de Nueva York."
    }
];

for(let i = 0; i < peliculas.length; i++){
  const btn = document.querySelector(`#info-btn${i + 1}`);
  btn.addEventListener("click", function(){
    mostrarInfo(i);
  })
}

function mostrarInfo(indice){
  const tituloPelicula = document.querySelector("#titulo-pelicula");
  const directorPelicula = document.querySelector("#director-pelicula");
  const sinopsisPelicula = document.querySelector("#sinopsis-pelicula");
  tituloPelicula.textContent = peliculas[indice].nombre;
  directorPelicula.textContent = "Dirigidar por: " + peliculas[indice].director;
  sinopsisPelicula.textContent = peliculas[indice].sinopsis;

}











