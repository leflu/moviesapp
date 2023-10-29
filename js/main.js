function buscarPelicula() {
  let barraBusqueda = document
    .getElementById("movie-searchbar")
    .value.toLowerCase();
  barraBusqueda = encodeURIComponent(barraBusqueda);
  const key = "7c968b85";

  if (barraBusqueda != "") {
    const resultado = document.getElementById("movie-data");
    let url = `http://www.omdbapi.com/?t=${barraBusqueda}&apikey=${key}`;
    fetch(url)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        console.log(data.Poster);
        resultado.innerHTML = `<div class="movie_cards--01">
        <img src="${data.Poster}" alt="" id="image01" />
        </div> 
        <div class="movie_text">
          <h2>${data.Title}</h2>
          <hr/>
          <div class="info-text">
            <p>Actores: ${data.Actors}</p>
            <p>Duracion: ${data.Runtime}</p>
            <p>Director: ${data.Director}</p>
            <p>Genero: ${data.Genre}</p>
            <p>Año: ${data.Year}</p>
            <p>IMDB Rating: ${data.imdbRating}</p>
          </div>
          <hr/>
          <p class="data-plot">${data.Plot}</p>
        </div>
        `; 
      });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Rellenar todos los campos",
    });
  }
}

const botonBusqueda = document.getElementById("movie-searchbtn");
botonBusqueda.addEventListener("click", buscarPelicula);

const resenasUsuarios = document.querySelector("#container-resenas");
const formulario = document.querySelector("#resena-form");
let resenas = [];
function limpiarResenas() {
  while (resenasUsuarios.firstChild) {
    resenasUsuarios.removeChild(resenasUsuarios.firstChild);
  }
}

function publicarResena() {
  limpiarResenas();
  console.log(resenas);
  resenas.forEach((resena) => {
    const resenasUsuarios = document.querySelector("#container-resenas");
    const tituloResena = document.createElement("h2");
    const ratingText = document.createElement("h3");
    const resenaText = document.createElement("p");
    const hr = document.createElement("hr");
    hr.setAttribute("class", "hr-resena");

    tituloResena.textContent = resena.nombre;
    ratingText.textContent = "Puntuacion: " + resena.rating;
    resenaText.textContent = "Reseña: " + resena.resena;

    resenasUsuarios.appendChild(tituloResena);
    resenasUsuarios.appendChild(ratingText);
    resenasUsuarios.appendChild(resenaText);
    resenasUsuarios.appendChild(hr);
    console.log(resena);
  });
  guardarStorage();
  console.log(resenas);
}
function agregarResena(evt) {
  evt.preventDefault();
  const nombrePelicula = document.getElementById("movie-searchbar").value.toUpperCase();
  const ratingPelicula = document.querySelector("#input-rating").value;
  const resenaPelicula = document.querySelector("#input-resena").value;
  if (resenaPelicula === "" || ratingPelicula === "" || nombrePelicula === "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Rellenar todos los campos",
    });
    return;
  }

  const objResena = {
    id: Date.now(),
    nombre: nombrePelicula,
    rating: ratingPelicula,
    resena: resenaPelicula
  };
  console.log(objResena);

  resenas = [...resenas, objResena];
  formulario.reset();
  publicarResena();
}
function guardarStorage() {
  localStorage.setItem("resenas", JSON.stringify(resenas));
}
window.addEventListener("DOMContentLoaded", () => {
  resenas = JSON.parse(localStorage.getItem("resenas")) || [];
  publicarResena();
});

formulario.addEventListener("submit", agregarResena);
