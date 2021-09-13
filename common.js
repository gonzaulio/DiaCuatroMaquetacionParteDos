const insertMovie = document.getElementById('tarjetasdepeliculas');



// CREA LA CLASE MOVIE, UNA PELICULA NUEVA

class Movie {

    constructor (title, releaseYear, actors, nacionality, director, writer, language, plataform, isMCU, mainCharacterName, producer, distributor, genre, sinopsis, portada) {

        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = actors;
        this.nacionality = nacionality;
        this.director = director;
        this.writer = writer;
        this.language = language;
        this.plataform = plataform;
        this.isMCU = isMCU;
        this.mainCharacterName = mainCharacterName;
        this.producer = producer;
        this.distributor = distributor;
        this.genre = genre;
        this.sinopsis = sinopsis;
        this.portada = portada;
    }
}


// DATA

let arraypeliculas = [];

let peli0 = new Movie("Black Widow", 2021, "Scarlett Johansson, Florence Pugh, David Harbour", "americana", "Cate Shortland", "Eric Pearson", "Inglés", "Disney Plus - Cine", true, "Black Widow", "Zakaria Alaoui", "Disney Studios", "Acción", "Al nacer, la Viuda Negra, también conocida como Natasha Romanova, se entrega a la KGB para convertirse en su agente definitivo. Cuando la URSS se separa, el gobierno intenta matarla mientras la acción se traslada a la actual Nueva York.", "https://m.media-amazon.com/images/I/61Fm+N+NncL._AC_SY679_.jpg")
arraypeliculas.push(peli0);

let peli1 = new Movie("Shang-Chi y la Leyenda de los Diez Anillos", 2021, "Simu Liu, Awkwafina, Tony Chiu-Wai", "Americana", "Destin Daniel Cretton", "Dave Callaham", "Inglés", "Cine", true, "Shaun", "Kevin Feige", "Disney Studios", "Acción", "Protagonizada por Simu Liu como Shang-Chi, quien debe enfrentarse al pasado que creía haber dejado atrás cuando se ve envuelto en la red de la misteriosa organización de los Diez Anillos.", "https://i0.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/08/shangchi_and_the_legend_of_the_ten_rings.jpg?resize=800%2C1185&ssl=1")
arraypeliculas.push(peli1);

let peli2 = new Movie("La Patrulla Canina: La Película", 2021, "Tyler Perry, Ron Pardo, Will Brisdin", "Americana", "Cal Brunker", "Billy Frolick", "Inglés", "Cine", false, "Gus", "Jennifer Dodge", "Elevation Pictures", "Infantil", "¡Ellos son Paw Patrol! Cuando Humdinger, el rival más grande de todos, se convierte en alcalde de Adventure City comienza a causar estragos, Ryder, y nuestros cachorros favoritos se ponen en marcha para enfrentar el desafío.", "https://www.lahiguera.net/cinemania/pelicula/9828/la_patrulla_canina_la_pelicula-cartel-9956.jpg");
arraypeliculas.push(peli2);

let peli3 = new Movie("Free Guy", 2021, "Ryan Reynolds, Jodie Comer, Taika Waititi", "Americana", "Shawn Levy", "Matt Lieberman", "Inglés", "Cine", false, "Guy", "Adam Kolbrenner", "20th Century Studios", "Aventura", "Un cajero de un banco descubre que en realidad es un personaje sin papel dentro de un brutal videojuego de mundo interactivo.", "https://i1.wp.com/noescinetodoloquereluce.com/wp-content/uploads/2021/06/fguy1.jpg?resize=770%2C1100&ssl=1")
arraypeliculas.push(peli3);

let peli4 = new Movie("Cruella", 2021, "Emma Stone, Emma Thompson", "Americana", "Craig Gillespie", "Dana Fox", "Inglés", "Disney Plus", false, "Estella", "Andrew Gunn", "Walt Disney Studios Motion Pictures", "Juvenil", "Decidida a convertirse en una exitosa diseñadora de moda, una joven y creativa estafadora se asocia con un par de ladrones para sobrevivir en las calles de Londres. Sin embargo, una serie de acontecimientos la llevan a asumir su lado malvado.", "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cruella-emma-stone-poster-1620251754.jpg")
arraypeliculas.push(peli4);



// RECOPILA LOS DATOS DE LOS IMPUTS Y CREA UN ELEMENTO MOVIE!!

function addMovieToList() {

    let nuevaPeli = new Movie (
    document.getElementById("nombre").value,
    document.getElementById("anyolanzamiento").value,
    document.getElementById("actores").value,
    document.getElementById("nacionalidad").value,
    document.getElementById("director").value,
    document.getElementById("escritor").value,
    document.getElementById("lenguaje").value,
    document.getElementById("plataforma").value,
    document.getElementById("inputGroupSelect01").value,
    document.getElementById("nombrePersonaje").value,
    document.getElementById("productores").value,
    document.getElementById("distribuidor").value,
    document.getElementById("genero").value,
    document.getElementById("sinopsis").value,
    document.getElementById("basic-url").value
    )
    
    console.log(nuevaPeli);
    arraypeliculas.push(nuevaPeli);
    addMovieToGrid();
    
}

// AGREGA LA NUEVA PELICULA A LA GRILLA USANDO SOLO DATOS BÁSICOS

function addMovieToGrid () {
    const addPeliToGrid = document.createElement('div');
    const addPeliTGridContent = `
    <div class="col">
            <div class="card h-100 bg-dark" style="border: none; border-radius: 20px; color: white;">

              <img src="${document.getElementById("basic-url").value}" class="card-img-top" alt="...">
            
              <div class="card-body">
                <h5 class="card-title" style="text-align: center;">${document.getElementById("nombre").value}</h5>
                <p class="card-text" id="descripcion" >${document.getElementById("sinopsis").value}</p>
                <button type="button" id="${(arraypeliculas.length - 1)}" class="btn btn-light saberinformacion">Más Info</button>
            </div>
            </div>
          </div>
    </div>
        `;


    addPeliToGrid.innerHTML = addPeliTGridContent;
    insertMovie.appendChild(addPeliToGrid);

    function agregarBotonRestante() {
    const contenedorBotonesSaberMas = document.querySelectorAll('.saberinformacion');
    contenedorBotonesSaberMas.forEach((BotonDeSaberMas) => {
    BotonDeSaberMas.addEventListener('click', BotonDeSaberMasPresionado)});
    }

    agregarBotonRestante();
    window.scrollTo(0, 1400)
}

// ---------------------------------- PÁGINA DE SABER MAS --------------------


// AGREGAMOS EL ADDEVENTLISTENER A TODOS LOS BOTONES DE SABER MAS
const contenedorBotonesSaberMas = document.querySelectorAll('.saberinformacion');
contenedorBotonesSaberMas.forEach((BotonDeSaberMas) => {
BotonDeSaberMas.addEventListener('click', BotonDeSaberMasPresionado)});

// CONSEGUIMOS EL NÚMERO DEL BOTON QUE SE PRESIONÓ PARA SACAR TODA LA INFO DEL ARRAY

function BotonDeSaberMasPresionado(e) {
  const button = e.target;
  const id = button.id;
  
  localStorage.setItem("valordelboton", id);
  localStorage.setItem("arraydepelis", JSON.stringify(arraypeliculas));
  window.open("sabermas.html"); 
}



// CONSTRUCCION DE LA PAGINA DE SABER MÁS

function saberMas()
{
    let valorheredado = localStorage.getItem("valordelboton");
    let peliculas = localStorage.getItem("arraydepelis");
    arraypeliculas = JSON.parse(peliculas)
    let index = valorheredado;

  const sabermascontainter = document.createElement('div');
  const sabermascontent = 
  `
  <div class="row">
      <div class="col sabermas" style="text-align: center;">
        <img id="fotoportada" src="${arraypeliculas[valorheredado].portada}" alt="" style="height: 450px;">
      </div>
      <div class="col-8" style="background-color: white;">
        <h2 id="titulopelicula">${arraypeliculas[index].title}</h2>
        <h3 id="anyopelicula">${arraypeliculas[index].releaseYear}</h3>
        <h6 id="actorespelicula">${arraypeliculas[index].actors}</h6>
        <h6>Sinopsis: ${arraypeliculas[index].sinopsis}</h6>
        <hr>
        <h6>Nacionalidad: ${arraypeliculas[index].nacionality}</h6>
        <h6>Director/es: ${arraypeliculas[index].director}</h6>
        <h6>Escritores: ${arraypeliculas[index].writer}</h6>
        <h6>Plataforma: ${arraypeliculas[index].plataform}</h6>
        <h6>¿Pertenece al Universo Marvel?: ${arraypeliculas[index].isMCU == true ? `Si` : `No`} </h6>
        <h6>Lenguaje: ${arraypeliculas[index].language}</h6>
        <h6>Nombre de Personaje Principal: ${arraypeliculas[index].mainCharacterName}</h6>
        <h6>Productores: ${arraypeliculas[index].producer}</h6>
        <h6>Distribuidor: ${arraypeliculas[index].distributor}</h6>
        <h6>Género: ${arraypeliculas[index].genre}</h6>
        
      </div>
    </div>
  `

  sabermascontainter.innerHTML = sabermascontent;
  console.log(sabermascontainter);
  document.getElementById("sabermasHTM").append(sabermascontainter)


}
