const shows = {
  comedia: [
    { id: 1, title: "El Inspector", price: 25, image: "../img/Inspector.jpg" },
    {
      id: 2,
      title: "Nuevo Tenorio Comico",
      price: 30,
      image: "../img/Tenorio-comico.jpg",
    },
    {
      id: 3,
      title: "Pequeñas grandes cosas",
      price: 28,
      image: "../img/pequenas-grandes-cosas.jpg",
    },
    {
      id: 4,
      title: "12 princesas en pugna",
      price: 26,
      image: "../img/12-princesas.jpg",
    },
    {
      id: 5,
      title: "La jaula de las locas",
      price: 25,
      image: "../img/LaJaula.jpg",
    },
    {
      id: 6,
      title: "Toc Toc",
      price: 31,
      image: "../img/TocToc.jpg",
    },
    {
      id: 7,
      title: "Agotados",
      price: 35,
      image: "../img/Agotados.jpg",
    },
    {
      id: 8,
      title: "El juego que todos jugamos",
      price: 25,
      image: "../img/el-juego.jpg",
    },
    {
      id: 9,
      title: "Dos Más Dos",
      price: 32,
      image: "../img/dos-mas-dos.jpg",
    },
    {
      id: 10,
      title: "Perfectos desconocidos",
      price: 24,
      image: "../img/Perfectos-desconocidos.jpg",
    },
    {
      id: 127,
      title: "La Comedia del Arte",
      price: 28,
      image: "../img/LaComediaDelArte.jpg",
    },
    {
      id: 128,
      title: "Los Locos de la Casa",
      price: 27,
      image: "../img/LosLocosDeLaCasa.jpg",
    },
  ],
  drama: [
    {
      id: 11,
      title: "Romeo y Julieta",
      price: 35,
      image: "../img/RomeoYJulieta.jpg",
    },
    {
      id: 12,
      title: "La Casa de Bernarda Alba",
      price: 32,
      image: "../img/LaCasaDeBernardaAlba.jpg",
    },
    {
      id: 13,
      title: "Hamlet",
      price: 40,
      image: "../img/Hamlet.jpg",
    },
    {
      id: 14,
      title: "Otelo",
      price: 38,
      image: "../img/Otelo.jpg",
    },
    {
      id: 15,
      title: "Bodas de Sangre",
      price: 30,
      image: "../img/BodasDeSangre.jpg",
    },
    {
      id: 16,
      title: "Macbeth",
      price: 42,
      image: "../img/Macbeth.jpg",
    },
    {
      id: 17,
      title: "El Rey Lear",
      price: 37,
      image: "../img/ElReyLear.jpg",
    },
    {
      id: 18,
      title: "Un Tranvía Llamado Deseo",
      price: 34,
      image: "../img/UnTranviaLlamadoDeseo.jpg",
    },
    {
      id: 19,
      title: "Las Brujas de Salem",
      price: 36,
      image: "../img/LasBrujasDeSalem.jpg",
    },
    {
      id: 20,
      title: "El Mercader de Venecia",
      price: 39,
      image: "../img/ElMercaderDeVenecia.jpg",
    },
    {
      id: 21,
      title: "Fuenteovejuna",
      price: 33,
      image: "../img/Fuenteovejuna.jpg",
    },
    {
      id: 22,
      title: "Don Juan Tenorio",
      price: 31,
      image: "../img/DonJuanTenorio.jpg",
    },
    {
      id: 23,
      title: "Yerma",
      price: 29,
      image: "../img/Yerma.jpg",
    },
    {
      id: 24,
      title: "Historia de una Escalera",
      price: 35,
      image: "../img/HistoriaDeUnaEscalera.jpg",
    },
    {
      id: 25,
      title: "La Dama del Alba",
      price: 28,
      image: "../img/LaDamaDelAlba.jpg",
    },
  ],

  musical: [
    {
      id: 26,
      title: "El Fantasma de la Ópera",
      price: 40,
      image: "../img/Fantasma.jpg",
    },
    { id: 27, title: "Wicked", price: 38, image: "../img/Wicked-poster.jpg" },
    { id: 28, title: "Mamma Mia!", price: 38, image: "../img/mamma.jpg" },
    { id: 29, title: "Chicago", price: 38, image: "../img/Chicago.jpg" },
    { id: 30, title: "Cats", price: 38, image: "../img/cats.jpg" },
    { id: 31, title: "Mary Poppins", price: 38, image: "../img/mary.jpg" },
    {
      id: 32,
      title: "Los miserables ",
      price: 38,
      image: "../img/losMiserables.jpg",
    },
    {
      id: 33,
      title: "West side story",
      price: 38,
      image: "../img/Chicago.jpg",
    },
    {
      id: 34,
      title: "Cabaret",
      price: 38,
      image: "../img/west_side_story.jpg",
    },
    {
      id: 35,
      title: "La novicia rebelde ",
      price: 38,
      image: "../img/rebelde.jpg",
    },
  ],
  suspenso: [
    {
      id: 31,
      title: "La Ratonera",
      price: 36,
      image: "../img/LaRatonera.jpg",
    },
    {
      id: 32,
      title: "Drácula",
      price: 40,
      image: "../img/Dracula.jpg",
    },
    {
      id: 33,
      title: "El Fantasma de la Ópera",
      price: 38,
      image: "../img/ElFantasmaDeLaOpera.jpg",
    },
    {
      id: 34,
      title: "La Soga",
      price: 34,
      image: "../img/LaSoga.jpg",
    },
    {
      id: 35,
      title: "La Visita de la Vieja Dama",
      price: 37,
      image: "../img/LaVisitaDeLaViejaDama.jpg",
    },
    {
      id: 36,
      title: "Sweeney Todd",
      price: 39,
      image: "../img/SweeneyTodd.jpg",
    },
    {
      id: 37,
      title: "Psicosis",
      price: 41,
      image: "../img/Psicosis.jpg",
    },
    {
      id: 38,
      title: "El Gato Negro",
      price: 35,
      image: "../img/ElGatoNegro.jpg",
    },
    {
      id: 39,
      title: "La Casa de las Sombras",
      price: 33,
      image: "../img/LaCasaDeLasSombras.jpg",
    },
    {
      id: 40,
      title: "El Cuervo",
      price: 32,
      image: "../img/ElCuervo.jpg",
    },
    {
      id: 41,
      title: "El Corazón Delator",
      price: 30,
      image: "../img/ElCorazonDelator.jpg",
    },
    {
      id: 42,
      title: "El Hombre Invisible",
      price: 36,
      image: "../img/ElHombreInvisible.jpg",
    },
  ],
  romance: [
    {
      id: 43,
      title: "La Tía Julia y el Escribidor",
      price: 35,
      image: "../img/LaTiaJuliaYElEscribidor.jpg",
    },
    {
      id: 44,
      title: "La casa de los espíritus",
      price: 30,
      image: "../img/lacasadelosespiritus.jpg",
    },
    {
      id: 45,
      title: "La amante",
      price: 32,
      image: "../img/LaAmante.jpg",
    },
    {
      id: 46,
      title: "La Mujer de los 1000 Corazones",
      price: 28,
      image: "../img/LaMujerDeLos1000Corazones.jpg",
    },
    {
      id: 47,
      title: "El Romanticismo en las Montañas",
      price: 36,
      image: "../img/ElRomanticismoEnLasMontañas.jpg",
    },
    {
      id: 48,
      title: "La Amiga de mi Madre",
      price: 40,
      image: "../img/LaAmigaDeMiMadre.jpg",
    },
    {
      id: 49,
      title: "El Secreto de los Abuelos",
      price: 33,
      image: "../img/ElSecretoDeLosAbuelos.jpg",
    },
    {
      id: 50,
      title: "Los Amores de un Solitario",
      price: 45,
      image: "../img/LosAmoresDeUnSolitario.jpg",
    },
    {
      id: 51,
      title: "Cuento de Amor en la Selva",
      price: 38,
      image: "../img/CuentoDeAmorEnLaSelva.jpg",
    },
    {
      id: 52,
      title: "La Última Carta de Amor",
      price: 34,
      image: "../img/LaUltimaCartaDeAmor.jpg",
    },
    {
      id: 53,
      title: "El Corazón del Ande",
      price: 39,
      image: "../img/ElCorazonDelAnde.jpg",
    },
    {
      id: 54,
      title: "Susurros del Río",
      price: 50,
      image: "../img/SusurrosDelRio.jpg",
    },
  ],
  aventura: [
    {
      id: 55,
      title: "La Isla Misteriosa",
      price: 40,
      image: "../img/LaIslaMisteriosa.jpg",
    },
    {
      id: 56,
      title: "El Tesoro Perdido",
      price: 35,
      image: "../img/ElTesoroPerdido.jpg",
    },
    {
      id: 57,
      title: "El Capitán del Mar",
      price: 38,
      image: "../img/ElCapitanDelMar.jpg",
    },
    {
      id: 58,
      title: "El Laberinto de las Sombras",
      price: 42,
      image: "../img/ElLaberintoDeLasSombras.jpg",
    },
    {
      id: 59,
      title: "El Viaje al Centro de la Tierra",
      price: 45,
      image: "../img/ElViajeAlCentroDeLaTierra.jpg",
    },
    {
      id: 60,
      title: "El Último Samurai",
      price: 48,
      image: "../img/ElUltimoSamurai.jpg",
    },
    {
      id: 61,
      title: "Aventuras en el Amazonas",
      price: 40,
      image: "../img/AventurasEnElAmazonas.jpg",
    },
    {
      id: 62,
      title: "El Mundo Perdido",
      price: 50,
      image: "../img/ElMundoPerdido.jpg",
    },
    {
      id: 63,
      title: "Cruzando los Límites",
      price: 37,
      image: "../img/CruzandoLosLimites.jpg",
    },
    {
      id: 64,
      title: "En la Cima del Mundo",
      price: 43,
      image: "../img/EnLaCimaDelMundo.jpg",
    },
    {
      id: 65,
      title: "El Último Horizonte",
      price: 46,
      image: "../img/ElUltimoHorizonte.jpg",
    },
    {
      id: 66,
      title: "La Carrera por el Universo",
      price: 44,
      image: "../img/LaCarreraPorElUniverso.jpg",
    },
  ],
  ciencia_ficcion: [
    {
      id: 67,
      title: "El Hombre que Vino del Futuro",
      price: 40,
      image: "../img/ElHombreQueVinoDelFuturo.jpg",
    },
    {
      id: 68,
      title: "La Guerra de los Mundos",
      price: 45,
      image: "../img/LaGuerraDeLosMundos.jpg",
    },
    {
      id: 69,
      title: "Cyborgs en el Espacio",
      price: 50,
      image: "../img/CyborgsEnElEspacio.jpg",
    },
    {
      id: 70,
      title: "Los Viajeros del Tiempo",
      price: 42,
      image: "../img/LosViajerosDelTiempo.jpg",
    },
    {
      id: 71,
      title: "Mundos Paralelos",
      price: 38,
      image: "../img/MundosParalelos.jpg",
    },
    {
      id: 72,
      title: "El Último Androide",
      price: 48,
      image: "../img/ElUltimoAndroide.jpg",
    },
    {
      id: 73,
      title: "La Nave Estelar",
      price: 40,
      image: "../img/LaNaveEstelar.jpg",
    },
    {
      id: 74,
      title: "El Coloso de Neptuno",
      price: 46,
      image: "../img/ElColosoDeNeptuno.jpg",
    },
    {
      id: 75,
      title: "Roboaventura",
      price: 44,
      image: "../img/Roboaventura.jpg",
    },
    {
      id: 76,
      title: "El Último Futuro",
      price: 47,
      image: "../img/ElUltimoFuturo.jpg",
    },
    {
      id: 77,
      title: "La Dimensión Oscura",
      price: 43,
      image: "../img/LaDimensionOscura.jpg",
    },
    {
      id: 78,
      title: "La Conquista de Marte",
      price: 49,
      image: "../img/LaConquistaDeMarte.jpg",
    },
  ],
  fantasia: [
    {
      id: 79,
      title: "El Reino Mágico",
      price: 42,
      image: "../img/ElReinoMagico.jpg",
    },
    {
      id: 80,
      title: "La Torre de Cristal",
      price: 40,
      image: "../img/LaTorreDeCristal.jpg",
    },
    {
      id: 81,
      title: "El Bosque Encantado",
      price: 38,
      image: "../img/ElBosqueEncantado.jpg",
    },
    {
      id: 82,
      title: "El Último Hechicero",
      price: 45,
      image: "../img/ElUltimoHechicero.jpg",
    },
    {
      id: 83,
      title: "La Cueva de los Deseos",
      price: 43,
      image: "../img/LaCuevaDeLosDeseos.jpg",
    },
    {
      id: 84,
      title: "Los Guardianes del Mago",
      price: 44,
      image: "../img/LosGuardianesDelMago.jpg",
    },
    {
      id: 85,
      title: "La Magia de la Luna",
      price: 41,
      image: "../img/LaMagiaDeLaLuna.jpg",
    },
    {
      id: 86,
      title: "El Viento de los Elementos",
      price: 46,
      image: "../img/ElVientoDeLosElementos.jpg",
    },
    {
      id: 87,
      title: "La Espada de Fuego",
      price: 47,
      image: "../img/LaEspadaDeFuego.jpg",
    },
    {
      id: 88,
      title: "El Último Dragón",
      price: 50,
      image: "../img/ElUltimoDragon.jpg",
    },
    {
      id: 89,
      title: "La Profecía de los Cuatro",
      price: 48,
      image: "../img/LaProfeciaDeLosCuatro.jpg",
    },
    {
      id: 90,
      title: "Los Secretos del Castillo",
      price: 49,
      image: "../img/LosSecretosDelCastillo.jpg",
    },
  ],
  terror: [
    {
      id: 91,
      title: "La Casa del Terror",
      price: 35,
      image: "../img/LaCasaDelTerror.jpg",
    },
    {
      id: 92,
      title: "El Espectro del Bosque",
      price: 40,
      image: "../img/ElEspectroDelBosque.jpg",
    },
    {
      id: 93,
      title: "La Mansión Abandonada",
      price: 38,
      image: "../img/LaMansionAbandonada.jpg",
    },
    {
      id: 94,
      title: "El Fantasma de la Ópera",
      price: 42,
      image: "../img/ElFantasmaDeLaOpera.jpg",
    },
    {
      id: 95,
      title: "El Muerto Vive",
      price: 37,
      image: "../img/ElMuertoVive.jpg",
    },
    {
      id: 96,
      title: "Las Sombras del Pasado",
      price: 43,
      image: "../img/LasSombrasDelPasado.jpg",
    },
    {
      id: 97,
      title: "La Maldición de la Dama Roja",
      price: 45,
      image: "../img/LaMalDicionDeLaDamaRoja.jpg",
    },
    {
      id: 98,
      title: "Cuentos Oscuros",
      price: 40,
      image: "../img/CuentosOscuros.jpg",
    },
    {
      id: 99,
      title: "El Último Suspiro",
      price: 46,
      image: "../img/ElUltimoSuspiro.jpg",
    },
    {
      id: 100,
      title: "La Noche Eterna",
      price: 44,
      image: "../img/LaNocheEterna.jpg",
    },
    {
      id: 101,
      title: "Voces en la Oscuridad",
      price: 48,
      image: "../img/VocesEnLaOscuridad.jpg",
    },
    {
      id: 102,
      title: "El Culto del Infierno",
      price: 50,
      image: "../img/ElCultoDelInfierno.jpg",
    },
  ],
  accion: [
    {
      id: 103,
      title: "La Fuerza del Destino",
      price: 36,
      image: "../img/LaFuerzaDelDestino.jpg",
    },
    {
      id: 104,
      title: "El Asalto",
      price: 40,
      image: "../img/ElAsalto.jpg",
    },
    {
      id: 105,
      title: "Misión Imposible",
      price: 45,
      image: "../img/MisionImposible.jpg",
    },
    {
      id: 106,
      title: "Enfrentamiento Final",
      price: 42,
      image: "../img/EnfrentamientoFinal.jpg",
    },
    {
      id: 107,
      title: "La Carrera Mortal",
      price: 38,
      image: "../img/LaCarreraMortal.jpg",
    },
    {
      id: 108,
      title: "El Último Refugio",
      price: 44,
      image: "../img/ElUltimoRefugio.jpg",
    },
    {
      id: 109,
      title: "Rescate en la Frontera",
      price: 47,
      image: "../img/RescateEnLaFrontera.jpg",
    },
    {
      id: 110,
      title: "Revolución en las Sombras",
      price: 46,
      image: "../img/RevolucionEnLasSombras.jpg",
    },
    {
      id: 111,
      title: "Guerra Urbana",
      price: 50,
      image: "../img/GuerraUrbana.jpg",
    },
    {
      id: 112,
      title: "Fuerzas Especiales",
      price: 49,
      image: "../img/FuerzasEspeciales.jpg",
    },
    {
      id: 113,
      title: "El Desafío",
      price: 48,
      image: "../img/ElDesafio.jpg",
    },
    {
      id: 114,
      title: "Venganza Imparable",
      price: 51,
      image: "../img/VenganzaImparable.jpg",
    },
  ],
  danza: [
    {
      id: 115,
      title: "El Ballet de la Vida",
      price: 40,
      image: "../img/ElBalletDeLaVida.jpg",
    },
    {
      id: 116,
      title: "Ritmos del Alma",
      price: 35,
      image: "../img/RitmosDelAlma.jpg",
    },
    {
      id: 117,
      title: "Pasos y Sombras",
      price: 38,
      image: "../img/PasosYSombras.jpg",
    },
    {
      id: 118,
      title: "Cuerpos en Movimiento",
      price: 42,
      image: "../img/CuerposEnMovimiento.jpg",
    },
    {
      id: 119,
      title: "Ballet en el Aire",
      price: 45,
      image: "../img/BalletEnElAire.jpg",
    },
    {
      id: 120,
      title: "Entre el Sol y la Luna",
      price: 50,
      image: "../img/EntreElSolYLaLuna.jpg",
    },
    {
      id: 121,
      title: "La Danza de los Sueños",
      price: 48,
      image: "../img/LaDanzaDeLosSuenos.jpg",
    },
    {
      id: 122,
      title: "La Magia del Movimiento",
      price: 44,
      image: "../img/LaMagiaDelMovimiento.jpg",
    },
    {
      id: 123,
      title: "Ecos de la Danza",
      price: 47,
      image: "../img/EcosDeLaDanza.jpg",
    },
    {
      id: 124,
      title: "Alma en Movimiento",
      price: 43,
      image: "../img/AlmaEnMovimiento.jpg",
    },
    {
      id: 125,
      title: "Bailar con el Viento",
      price: 46,
      image: "../img/BailarConElViento.jpg",
    },
    {
      id: 126,
      title: "Cuerpos y Pasiones",
      price: 49,
      image: "../img/CuerposYPasiones.jpg",
    },
  ],
};

document.addEventListener("DOMContentLoaded", () => {
  const category = sessionStorage.getItem("selectedCategory");
  const showsContainer = document.getElementById("shows");

  shows[category].forEach((show) => {
    const showCard = document.createElement("div");
    showCard.className = "show-card";
    showCard.innerHTML = `
            <img src="${show.image}" alt="${show.title}" style="width: 200px; height: auto;">
            <h3>${show.title}</h3>
            <p>Precio: $${show.price}</p>
            <button class="btn" onclick="selectShow(${show.id}, '${show.title}', ${show.price})">
                Seleccionar
            </button>
        `;
    showsContainer.appendChild(showCard);
  });
});

function selectShow(id, title, price) {
  sessionStorage.setItem("selectedShow", JSON.stringify({ id, title, price }));
  window.location.href = "asientos.html";
}
