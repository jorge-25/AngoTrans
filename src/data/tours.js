export const tours = [
  {
    slug: "muelle-del-tiempo",
    title: "Tour Muelle del Tiempo",
    description:
      "El muelle del tiempo está ubicado en la zona costa del Parque Tepuhueico, es una zona maravillosa y aún salvaje, es un área de conservación con acantilados poblados de aves, se pueden observar delfines y lobos marinos, en una breve caminata se llega al Muelle del Tiempo, obra realizada por el escultor Marcelo Orellana Rivera (apodado Chupino).",

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
      "Visita a Dalcahue - Costanera - Feria - Iglesia - Plaza",
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
      "Descubre Ancud, una de las ciudades más históricas de Chiloé, visitando el Fuerte San Antonio, el mercado municipal y la costanera.",

    heroImage: "/tours/tour-16.webp",

    route: [
      [-73.7669, -42.4721], // Castro
      [-73.6526, -42.3789], // Dalcahue
      [-73.8203, -41.8697], // Ancud
    ],

    stops: [
      { name: "Castro", lng: -73.7669, lat: -42.4721 },
      { name: "Dalcahue", lng: -73.6526, lat: -42.3789 },
      { name: "Ancud", lng: -73.8203, lat: -41.8697 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Visita a Dalcahue y su feria artesanal",
      "Recorrido por el Fuerte San Antonio",
      "Costanera de Ancud",
    ],
  },

  {
    slug: "isla-quinchao",
    title: "Tour Isla Quinchao",
    description:
      "Descubre Ancud, una de las ciudades más históricas de Chiloé, visitando el Fuerte San Antonio, el mercado municipal y la costanera.",

    heroImage: "/mirador-alto-la-paloma.jpg",

    route: [
      [-73.7669, -42.4721], // Castro
      [-73.6526, -42.3789], // Dalcahue
      [-73.8203, -41.8697], // Ancud
    ],

    stops: [
      { name: "Castro", lng: -73.7669, lat: -42.4721 },
      { name: "Dalcahue", lng: -73.6526, lat: -42.3789 },
      { name: "Ancud", lng: -73.8203, lat: -41.8697 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Visita a Dalcahue y su feria artesanal",
      "Recorrido por el Fuerte San Antonio",
      "Costanera de Ancud",
    ],
  },

  {
    slug: "isla-paraiso",
    title: "Tour Isla Paraíso (pueblito Weltun)",
    description:
      "Descubre Ancud, una de las ciudades más históricas de Chiloé, visitando el Fuerte San Antonio, el mercado municipal y la costanera.",

    heroImage: "/tours/tour-10.webp",

    route: [
      [-73.7669, -42.4721], // Castro
      [-73.6526, -42.3789], // Dalcahue
      [-73.8203, -41.8697], // Ancud
    ],

    stops: [
      { name: "Castro", lng: -73.7669, lat: -42.4721 },
      { name: "Dalcahue", lng: -73.6526, lat: -42.3789 },
      { name: "Ancud", lng: -73.8203, lat: -41.8697 },
    ],

    itinerary: [
      "Salida desde Castro",
      "Visita a Dalcahue y su feria artesanal",
      "Recorrido por el Fuerte San Antonio",
      "Costanera de Ancud",
    ],
  },
]