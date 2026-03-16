export const tours = [
  {
    slug: "muelle-del-tiempo",
    title: "Tour Muelle del Tiempo",
    description:
      "El muelle del tiempo está ubicado en la zona costa del Parque Tepuhueico, es una zona maravillosa y aún salvaje, es un área de conservación con acantilados poblados de aves, se pueden observar delfines y lobos marinos, en una breve caminata se llega al Muelle del Tiempo, obra realizada por el escultor Marcelo Orellana Rivera (apodado chumono).",

    metaDescription: "Explora la costa de Chiloé pasando por iglesias patrimoniales, lagos y pueblos tradicionales hasta llegar al icónico Muelle del Tiempo frente al océano Pacífico.",
    heroImage: "/muelle-del-tiempo.jpg",

    route: [
      [-73.7669, -42.4721] // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Iglesia de Nercón", lng: -73.7854, lat: -42.5012 },
      { name: "Huillinco", lng: -73.8975, lat: -42.6740 },
      { name: "Muelle del tiempo", lng: -74.1436, lat: -42.7466 },
      { name: "Vilipulli", lng: -73.7879, lat: -42.6052 },
      { name: "Palafitos de Gamboa", lng: -73.7708, lat: -42.4813 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Iglesia Patrimonial de Nercón",
      "Huillinco",
      "Muelle del tiempo",
      "Vilipulli",
      "Palafitos de Gamboa"
    ],

  highlights: [
    {
      title: "Iglesia Patrimonial de Nercón",
      description:
        "La Iglesia de Nercón, nuestra Señora de Gracia, ubidada a 4 kilómetros al sur de Castro, fue construida por maestros carpinteros locales entre 1880 y 1890, fue declarada patrimonio de la humanidad por la UNESCO el año 2000, en la lengua huilliche, Nercón significa: Entre Lomas."
    },
    {
      title: "Huillinco",
      description:
        "Un poblado perteneciente a la comuna de Chonchi, uno de los pocos ubicado fuera de la costa de la Isla Grande de Chiloé, ubicado a orillas del lago del mismo nombre, es el pueblo más cercano al sector de Cucao, cabe destacar que los lagos de Huillinco y Cucao son Santuarios de la Naturaleza."
    },
    {
      title: "Iglesia de Vilipulli",
      description:
        "La Iglesia San Antonio de Padua de Vilipulli es un templo católico que se encuentra en la localidad del mismo nombre, ubicado al norte de la ciudad de Chonchi, su construcción fue en el siglo XIX y forma parte de las 16 Iglesias de madera de Chiloé calificadas como Monumento Nacional de Chile y reconocidas como patrimonio de la humanidad por la UNESCO en el año 2000."
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },

  {
    slug: "parque-nacional-chiloe",
    title: "Tour Parque Nacional de Chiloé",
    description:
      "Un hermoso parque ubicado en la costa occidental de la Isla de la cual toma su nombre, en la región de los lagos dentro de la comuna de Chonchi, cercano al pueblo de Cucao, con una superficie de 42.567 hectáreas que destaca por su aire costero y hermosas pasarelas que lo llevan a lo profundo del bosque donde se pueden observar diversas especies de árboles nativos, y su fauna está compuesta por una importante cantidad de especies endémicas de mamíferos y aves debido a la condición insular del territorio.",

    metaDescription: "Recorre la costa de Chiloé hasta el Parque Nacional Chiloé, explorando bosques nativos, pasarelas y paisajes naturales, junto a pueblos tradicionales e iglesias patrimoniales.",
    heroImage: "/tours/tour-20.webp",

    route: [
      [-73.7669, -42.4721], // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Iglesia de Nercón", lng: -73.7854, lat: -42.5012 },
      { name: "Huillinco", lng: -73.8975, lat: -42.6740 },
      { name: "Parque Nacional Chiloé", lng: -74.1082, lat: -42.6248 },
      { name: "Vilipulli", lng: -73.7879, lat: -42.6052 },
      { name: "Palafitos de Gamboa", lng: -73.7708, lat: -42.4813 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Iglesia Patrimonial de Nercón",
      "Huillinco",
      "Cucao - Parque Nacional de Chiloé",
      "Vilipulli",
      "Palafitos de Gamboa"
    ],

      highlights: [
    {
      title: "Iglesia Patrimonial de Nercón",
      description:
        "La Iglesia de Nercón, nuestra Señora de Gracia, ubidada a 4 kilómetros al sur de Castro, fue construida por maestros carpinteros locales entre 1880 y 1890, fue declarada patrimonio de la humanidad por la UNESCO el año 2000, en la lengua huilliche, Nercón significa: Entre Lomas."
    },
    {
      title: "Huillinco",
      description:
        "Un poblado perteneciente a la comuna de Chonchi, uno de los pocos ubicado fuera de la costa de la Isla Grande de Chiloé, ubicado a orillas del lago del mismo nombre, es el pueblo más cercano al sector de Cucao, cabe destacar que los lagos de Huillinco y Cucao son Santuarios de la Naturaleza."
    },
    {
      title: "Iglesia de Vilipulli",
      description:
        "La Iglesia San Antonio de Padua de Vilipulli es un templo católico que se encuentra en la localidad del mismo nombre, ubicado al norte de la ciudad de Chonchi, su construcción fue en el siglo XIX y forma parte de las 16 Iglesias de madera de Chiloé calificadas como Monumento Nacional de Chile y reconocidas como patrimonio de la humanidad por la UNESCO en el año 2000."
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },

  {
    slug: "costa",
    title: "Tour de la Costa",
    description:
      "Este recorrido por la costa norte de Chiloé combina naturaleza, historia y patrimonio cultural. Durante el tour se visita Dalcahue y su tradicional feria artesanal, la impresionante cascada Tocoihue y el pintoresco pueblo de Tenaún con su iglesia patrimonial. También se conoce la histórica iglesia de Colo y la Isla Aucar, un pequeño islote conectado por una pasarela de madera y conocido como la Isla de las Almas Navegantes.",

    metaDescription: "Recorre la costa norte de Chiloé visitando Dalcahue, la cascada Tocoihue, la histórica iglesia de Tenaún, la iglesia patrimonial de Colo y la mágica Isla Aucar, en un viaje lleno de cultura, naturaleza y tradición chilota.",
    heroImage: "/tours/tour-17.webp",

    route: [
      [-73.7669, -42.4721], // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Dalcahue", lng: -73.6473, lat: -42.3795 },
      { name: "Cascada Tocoihue", lng: -73.4337, lat: -42.3053 },
      { name: "Tenaún", lng: -73.3750, lat: -42.3316 },
      { name: "Iglesia de Colo", lng: -73.4018, lat: -42.2588 },
      { name: "Isla Aucar", lng: -73.4793, lat: -42.1614 },
      { name: "Palafitos de Pedro Montt", lng: -73.7649, lat: -42.4703 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Visita a Dalcahue - Costanera - Feria Artesanal - Iglesia - Plaza",
      "Cascada Tocoihue",
      "Tenaún",
      "Iglesia de Colo",
      "Isla Aucar",
      "Palafitos Pedro Montt"
    ],

      highlights: [
    {
      title: "Dalcahue",
      description:
        "La ciudad de Dalcahue que en lengua Mapudungun significa lugar de Dalcas, es la capital de la comuna del mismo nombre, su Iglesia fue construida en el siglo XIX y forma parte de las 16 Iglesias del Archipiélago de Chiloé declaradas Patrimonio de la Humanidad por la UNESCO en el año 2000, su feria artesanal ubicada en su costanera se encuentran productos de artesanía hecho con productos locales y artesanos chilotes."
    },
    {
      title: "Cascada Tocoihue",
      description:
        "Se encuentra a 32 kilómetros del sector urbano de Dalcahue, es una cascada de agua de más de 40 metros de altura, ubicada en un entorno privilegiado en medio de un bosque de árboles nativos, los que le entregan un escenario místico, según cuenta la leyenda, bajo esta cascada tenían que bañarse 40 noches quienes serían brujos, para poder quitar el bautismo católico."
    },
    {
      title: "Tenaún",
      description:
      "Su nombre proviene de la lengua huilliche y alude a los tres cerros o colinas que caracterizan al lugar, es una localidad costera que pertenece a la comuna de Dalcahue, fue fundada alrededor de 1567, siendo uno de los asentamientos más antiguos de la zona, conocido históricamente como un punto de extracción de alerce, su Iglesia, nuestra Señora del Patrocinio, tiene una torre principal y dos torres menores a cada lado, fue construida a mediados del siglo XIX y forma parte de las 16 Iglesias Patrimonio de la Humanidad declaradas por la UNESCO el año 2000."
    },
    {
      title: "Iglesia de Colo",
      description:
      "La Iglesia San Antonio de Colo es un templo católico perteneciente a la comuna de Quemchi, construida en la segunda mitad del siglo XIX con maderas nativas y destaca por su torre octagonal y ser una de las más aisladas ubicándose en la cima de un cerro, forma parte de las 16 Iglesias Patrimonio de la Humanidad declaradas por la UNESCO en el año 2000."
    },
    {
      title: "Isla Aucar",
      description:
      "La Isla Aucar es un pequeño islote ubicado frente a la localidad de Quemchi, en la provincia de Chiloé, está unida a la Isla Grande por una pasarela de madera de aproximadamente 520 metros de largo, lo que la convierte en un icono arquitectónico y cultural de la zona, bautizada como la Isla de las Almas Navegantes, por el escritor chileno Francisco Coloane (premio Nacional de Literatura. 1964)."
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },

  {
    slug: "isla-lemuy-iglesias",
    title: "Tour Isla Lemuy y sus Iglesias",
    description:
      "Este recorrido permite descubrir la Isla Lemuy, uno de los lugares más tradicionales del Archipiélago de Chiloé, conocido por su paisaje costero y sus históricas iglesias de madera. Durante el tour se visitan Chonchi y la Iglesia Patrimonial de Nercón, para luego continuar hacia Lemuy y conocer las iglesias de Ichuac, Detif y Aldachildo, templos que forman parte de las 16 Iglesias de Chiloé declaradas Patrimonio de la Humanidad por la UNESCO. El recorrido permite apreciar la arquitectura chilota, la cultura local y los paisajes del archipiélago, finalizando con el regreso a Castro y una visita a los tradicionales palafitos que caracterizan la ciudad.",

    metaDescription: "Recorre la Isla Lemuy y descubre sus iglesias patrimoniales de madera como Ichuac, Detif y Aldachildo, además de Chonchi y los tradicionales palafitos de Castro.",
    heroImage: "/tours/tour-16.webp",

    route: [
      [-73.7669, -42.4721], // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Iglesia de Nercón", lng: -73.7854, lat: -42.5012 },
      { name: "Chonchi", lng: -73.7723, lat: -42.6236 },
      { name: "Iglesia de Ichuac", lng: -73.7197, lat: -42.6160 },
      { name: "Iglesia de Detif", lng: -73.5564, lat: -42.6850 },
      { name: "Iglesia de Aldachildo", lng: -73.6118, lat: -42.5835 },
      { name: "Iglesia de Vilipulli", lng: -73.7879, lat: -42.6051 },
      { name: "Palafitos de Gamboa", lng: -73.7708, lat: -42.4813 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Iglesia Patrimonial de Nercón",
      "Chonchi",
      "Iglesia de Ichuac",
      "Iglesia de Detif",
      "Iglesia de Aldachildo",
      "Iglesia de Vilipulli",
      "Palafitos de Gamboa"
    ],

  highlights: [
    {
      title: "Iglesia Patrimonial de Nercón",
      description:
        "La Iglesia de Nercón, nuestra Señora de Gracia, ubidada a 4 kilómetros al sur de Castro, fue construida por maestros carpinteros locales entre 1880 y 1890, fue declarada patrimonio de la humanidad por la UNESCO el año 2000, en la lengua huilliche, Nercón significa: Entre Lomas."
    },
    {
      title: "Chonchi",
      description:
        "Una ciudad ubicada en la Isla Grande de Chiloé, sus principales características son la cultura y el patrimonio que están en la arquitectura de sus diferentes Iglesias y casas patrimoniales, su Iglesia nuestra Señora del Rosario es un templo católico que forma parte del grupo de las 16 Iglesias de madera de Chiloé calificadas como Monumento Nacional de Chile y reconocidas como Patrimonio de la Humanidad por la UNESCO en el año 2000."
    },
    {
      title: "Iglesia de Vilipulli",
      description:
        "La Iglesia San Antonio de Padua de Vilipulli es un templo católico que se encuentra en la localidad del mismo nombre, ubicado al norte de la ciudad de Chonchi, su construcción fue en el siglo XIX y forma parte de las 16 Iglesias de madera de Chiloé calificadas como Monumento Nacional de Chile y reconocidas como patrimonio de la humanidad por la UNESCO en el año 2000."
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },

  {
    slug: "isla-quinchao",
    title: "Tour Isla Quinchao",
    description:
      "Este recorrido permite conocer la Isla Quinchao, uno de los destinos más representativos del Archipiélago de Chiloé. El tour comienza con una visita a Dalcahue, conocido por su feria artesanal y su iglesia patrimonial, para luego continuar hacia la isla cruzando el canal hacia Curaco de Vélez, un tranquilo pueblo costero rodeado de naturaleza. Durante el viaje se visita Achao, donde se encuentra la Iglesia Santa María de Loreto, considerada la iglesia de madera más antigua de Chile y parte del conjunto de Iglesias de Chiloé declaradas Patrimonio de la Humanidad por la UNESCO. El recorrido continúa hacia Villa Quinchao y su imponente iglesia, la más grande del archipiélago, finalizando con el regreso a Castro y la visita a los tradicionales palafitos que caracterizan la ciudad.",

    metaDescription: "Descubre la Isla Quinchao visitando Dalcahue, Curaco de Vélez, Achao y Villa Quinchao, con sus históricas iglesias patrimoniales y paisajes típicos del archipiélago de Chiloé.",
    heroImage: "/mirador-alto-la-paloma.jpg",

    route: [
      [-73.7669, -42.4721], // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Dalcahue", lng: -73.6473, lat: -42.3795 },
      { name: "Curaco de Vélez", lng: -73.6021, lat: -42.4387 },
      { name: "Achao", lng: -73.4881, lat: -42.4709 },
      { name: "Villa Quinchao", lng: -73.4270, lat: -42.5351 },
      { name: "Palafitos de Pedro Montt", lng: -73.7649, lat: -42.4703 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Dalcahue - Costanera - Feria Artesanal - Iglesia - Plaza",
      "Curaco de Vélez",
      "Achao",
      "Villa Quinchao y su Iglesia",
      "Palafitos de Pedro Montt"
    ],

  highlights: [
    {
      title: "Dalcahue",
      description:
        "La ciudad de Dalcahue que en lengua Mapudungun significa lugar de Dalcas, es la capital de la comuna del mismo nombre, su Iglesia fue construida en el siglo XIX y forma parte de las 16 Iglesias del Archipiélago de Chiloé declaradas Patrimonio de la Humanidad por la UNESCO en el año 2000, su feria artesanal ubicada en su costanera se encuentran productos de artesanía hecho con productos locales y artesanos chilotes."
    },
    {
      title: "Curaco de Vélez",
      description:
      "Un pueblo ubicado en la Isla de Quinchao, es conocido por su humedal, bahía Curaco de Vélez que está declarado Santuario de la Naturaleza, posee una gran superficie donde se pueden observar distintos tipos de aves, pertenece a la comuna de Curaco de Vélez, su nombre en mapudungun significa agua sobre piedra (cura - piedra y co-agua) y Vélez es el apeliido del primer encomendero español llegado en el siglo XVII."
    },
    {
      title: "Achao",
      description:
      "Un pueblo del Archipiélago de Chiloé, es la capital de la comuna de Quinchao ubicado en la Isla del mismo nombre, acá se encuentra la Iglesia Santa María de Loreto de Achao, construida entre 1730 y 1740 por los jesuitas en la Isla Quinchao, siendo la construcción de madera más antigua de Chile y un destacado ejemplo de la escuela chilota de arquitectura religiosa, declarada Monumento Nacional en el año 1951 y está dentro de las 16 Iglesias de Chiloé que fueron reconocidas Patrimonio de la Humanidad por la UNESCO en el año 2000."
    },
    {
      title: "Villa Quinchao",
      description:
      "Pertenece a la comuna del mismo nombre, ubicada en la Isla de Quinchao, donde se encuentra la Iglesia Nuestra Señora de Gracia, fue construida en el siglo XVII, pero su edificación terminó en 1880, es la Iglesia más grande del Archipiélago de Chiloé, midiendo 53 metros de largo, 18,4 metros de ancho y posee una torre de más de 18 metros. Esta Iglesia forma parte de las 16 Iglesias de madera que fueron declaradas por la UNESCO Patrimonio de la Humanidad en el año 2000."
    },
    {
      title: "Bosque Palqui",
      description:
      "Es una iniciativa de conservación familiar, privada, que busca conservar y restaurar 14 hectáreas de bosque nativo en la Isla de Quinchao, Archipiélago de Chiloé, son la primera división de Nestwatch en Chile, realizan monitoreos de nidos de aves y monitoreo del marsupial Monito del Monte, además, refugio de ranitas, parte de la ONG ranita de Darwin, buscando proteger nuestros anfibios, tienen en curso varios proyectos de restauración y plantación de bosque nativo, realizan talleres y senderismo donde unen arte y educación ambiental.",
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },

  {
    slug: "isla-paraiso",
    title: "Tour Isla Paraíso (pueblito Weltún)",
    description:
      "Weltún es un espacio místico, entrar en esta aldea es una experiencia mágica e inolvidable, automáticamente uno se puede transportar a principios del siglo XIX, en este lugar vuelven a la vida las casas del Chiloé de antaño, todo esto en medio de un paisaje de enorme belleza. Weltún fue locación principal del largometraje 'Y de pronto el amanecer' del cineasta chileno Silvio Caiozzi, (2017), también la novela chilena 'Isla Paraíso', se grabó en este lugar entre los años 2018-2019.",

    metaDescription: "Descubre el pueblito Weltún, conocido como Isla Paraíso, un lugar mágico que recrea el Chiloé antiguo. Incluye Dalcahue, mitología chilota y los tradicionales palafitos.",
    heroImage: "/tours/tour-10.webp",

    route: [
      [-73.7669, -42.4721], // Castro
    ],

    stops: [
      { name: "Castro", lng: -73.7644, lat: -42.4823 },
      { name: "Pueblito Weltún", lng: -73.7313, lat: -42.4764 },
      { name: "Dalcahue", lng: -73.6473, lat: -42.3795 },
      { name: "Refugio Mitos de Chiloé", lng: -73.7172, lat: -42.2126 },
      { name: "Palafitos de Pedro Montt", lng: -73.7649, lat: -42.4703 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Pueblito Weltún (Isla Paraíso)",
      "Dalcahue - Costanera - Feria Artesanal - Iglesia - Plaza",
      "Parque refugio Mitos de Chiloé",
      "Palafitos de Pedro Montt"
    ],

  highlights: [
    {
      title: "Dalcahue",
      description:
        "La ciudad de Dalcahue que en lengua Mapudungun significa lugar de Dalcas, es la capital de la comuna del mismo nombre, su Iglesia fue construida en el siglo XIX y forma parte de las 16 Iglesias del Archipiélago de Chiloé declaradas Patrimonio de la Humanidad por la UNESCO en el año 2000, su feria artesanal ubicada en su costanera se encuentran productos de artesanía hecho con productos locales y artesanos chilotes."
    },
    {
      title: "Refugio de los Mitos de Chiloé",
      description:
        "Este parque es un emprendimiento local que presenta 22 figuras mitológicas ubicadas en un sendero boscoso, con sus respectivos carteles explicativos en cada uno de sus caminos, este espacio está pensado para todas las edades y para personas en situación de discapacidad, este parque es una iniciativa que fusiona naturaleza, relatos y patrimonio cultural de Chiloé."
    },
    {
      title: "Palafitos de Chiloé",
      description:
        "Son casas de madera y tejuelas de alerce, edificadas sobre pilares de lumilla, constan de dos frentes, uno hacia la calle y otro hacia el mar que posee una terraza que cumple la función de patio, más allá de su atractivo, los coloridos Palafitos son para los pobladores un cómodo hogar, símbolo profundo de la relación del pueblo chilote con el mar."
    }
  ],
  },
]