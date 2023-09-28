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
      director: "Rodrigo García",
      sinopsis: "Dos personas se encuentran en una playa después de pasar la noche juntos y comparten sus pensamientos y sentimientos."
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

let infoPelicula = "Taxi Driver"  // SI SE CAMBIA A UNO DE LOS NOMBRES DE LA PELICULA DEL ARRAY, DA LA INFORMACION DE ESA PELICULA

function mostrarPeliculas(peliculas){
    peliculas.forEach( pelicula => console.log(pelicula.nombre + " " + pelicula.sinopsis + " Dirigida por: " + pelicula.director))
}

function elegirPelicula(){
    const eleccion = peliculas.filter((pelicula)=>{
        if(infoPelicula){
            return pelicula.nombre === infoPelicula
        }
    })
    console.table(eleccion)
}

elegirPelicula()











