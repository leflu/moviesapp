const peliculas = [
    {
      nombre: "Interstellar",
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
      sinopsis: "Veinte años después de sus últimas vacaciones en un decadente centro vacacional, Sophie reflexiona sobre el raro tiempo que pasó con su amoroso e idealista padre, Calum."
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
/* function mostrarInfo(indice){
  const tituloPelicula = document.querySelector("#titulo-pelicula");
  const directorPelicula = document.querySelector("#director-pelicula");
  const sinopsisPelicula = document.querySelector("#sinopsis-pelicula");
  tituloPelicula.textContent = peliculas[indice].nombre;
  directorPelicula.textContent = "Dirigidar por: " + peliculas[indice].director;
  sinopsisPelicula.textContent = peliculas[indice].sinopsis;
}
for(let i = 0; i < peliculas.length; i++){
  const btn = document.querySelector(`#info-btn${i}`);
  btn.addEventListener("click",function(){
    mostrarInfo(i)})
} */

function buscarPelicula() {
  const barraBusqueda = document.getElementById("movie-searchbar").value.toLowerCase();

  const peliculaEncontrada = peliculas.find(function(pelicula) {
      return pelicula.nombre.toLowerCase() === barraBusqueda;
  });

  if (peliculaEncontrada) {
      const tituloPelicula = document.querySelector("#titulo-pelicula");
      const directorPelicula = document.querySelector("#director-pelicula");
      const sinopsisPelicula = document.querySelector("#sinopsis-pelicula");

      tituloPelicula.textContent = peliculaEncontrada.nombre;
      directorPelicula.textContent = "Director: " + peliculaEncontrada.director;
      sinopsisPelicula.textContent = peliculaEncontrada.sinopsis;

  } 
  else {
      const tituloPelicula = document.querySelector("#titulo-pelicula");
      const directorPelicula = document.querySelector("#director-pelicula");
      const sinopsisPelicula = document.querySelector("#sinopsis-pelicula");
      tituloPelicula.textContent = "Pelicula no encontrada."
      directorPelicula.textContent = "";
      sinopsisPelicula.textContent = "";
  }
}

const botonBusqueda = document.getElementById("movie-searchbtn")
botonBusqueda.addEventListener("click", buscarPelicula)


const resenasUsuarios = document.querySelector("#container-resenas")
const formulario = document.querySelector("#resena-form")

let resenas = []

function errorResena(msg){
  const mensajeError = document.querySelector("#resena-titulo")
  mensajeError.textContent = msg;

  setTimeout(()=>{
    mensajeError.remove()
  },3000)
}

function limpiarResenas(){
  while(resenasUsuarios.firstChild){
    resenasUsuarios.removeChild(resenasUsuarios.firstChild)
  }
}
function publicarResena(){
  limpiarResenas();
  resenas.forEach((resena)=>{
    const tituloResena = document.createElement("h2");
    const ratingText = document.createElement("h3");
    const resenaText = document.createElement("p");
    const hr = document.createElement("hr")
    hr.setAttribute("class", "hr-resena")

    tituloResena.textContent = resena.nombre;
    ratingText.textContent = "Puntuacion: " + resena.rating;
    resenaText.textContent = "Reseña: " + resena.resena;
    
    resenasUsuarios.appendChild(tituloResena)
    resenasUsuarios.appendChild(ratingText)
    resenasUsuarios.appendChild(resenaText)
    resenasUsuarios.appendChild(hr)
  })
  guardarStorage();
}




function agregarResena(evt){
  evt.preventDefault();
  const nombrePelicula = document.querySelector("#input-movie_name").value;
  const ratingPelicula = document.querySelector("#input-rating").value;
  const resenaPelicula = document.querySelector("#input-resena").value;

  if(nombrePelicula === '' || resenaPelicula === '' || ratingPelicula === ''){
    errorResena("Porfavor rellenar todos los campos");
  }
  const objResena = {
    id: Date.now(),
    nombre: nombrePelicula,
    rating: ratingPelicula,
    resena: resenaPelicula  
  }
  resenas = [...resenas, objResena]
  formulario.reset();

  publicarResena();
  
}

function guardarStorage(){
  localStorage.setItem("resenas", JSON.stringify(resenas))
}
window.addEventListener("DOMContentLoaded", ()=>{
  resenas = JSON.parse(localStorage.getItem("resenas"))
  publicarResena();
})

formulario.addEventListener("submit", agregarResena);





