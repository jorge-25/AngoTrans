import { useState } from "react"
import { Link } from "react-router-dom"
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map"

const locations = [
  {
    id: "muelle-del-tiempo",
    name: "Muelle del Tiempo",
    lng: -74.14368207187835,
    lat: -42.746571673362055,
    description: "Explora la costa de Chiloé pasando por iglesias patrimoniales, lagos y pueblos tradicionales hasta llegar al icónico Muelle del Tiempo frente al océano Pacífico.",
    image: "/muelle-del-tiempo.jpg",
    type: "tour"
  },
  {
    id: "parque-nacional-chiloe",
    name: "Parque Nacional Chiloé",
    lng: -74.10818667980374,
    lat: -42.6248829935378,
    description: "Recorre la costa de Chiloé hasta el Parque Nacional Chiloé, explorando bosques nativos, pasarelas y paisajes naturales, junto a pueblos tradicionales e iglesias patrimoniales.",
    image: "/tours/tour-18.webp",
    type: "tour"
  },
  {
    id: "costa",
    name: "Tour de la Costa",
    lng: -73.37504150421796,
    lat: -42.33145782627161,
    description: "Recorre la costa norte de Chiloé visitando Dalcahue y sus maravillas, la cascada Tocoihue, Tenaún, la histórica iglesia de Colo y la Isla Aucar, un pintoresco islote unido por una pasarela.",
    image: "/tours/tour-11.webp",
    type: "tour"
  },
  {
    id: "isla-lemuy-iglesias",
    name: "Isla Lemuy y sus Iglesias",
    lng: -73.65008283909596,
    lat: -42.61781872194298,
    description: "Recorre la Isla Lemuy y descubre sus iglesias patrimoniales de madera como Ichuac, Detif y Aldachildo, además de Chonchi y los tradicionales palafitos de Castro.",
    image: "/tours/tour-12.webp",
    type: "tour"
  },
  {
    id: "isla-quinchao",
    name: "Isla Quinchao",
    lng: -73.51672329293373,
    lat: -42.4656465944486,
    description: "Descubre la Isla Quinchao visitando Dalcahue, Curaco de Vélez, Achao y Villa Quinchao, con sus históricas iglesias patrimoniales y paisajes típicos del archipiélago de Chiloé.",
    image: "/mirador-alto-la-paloma.jpg",
    type: "tour"
  },
  {
    id: "isla-paraiso",
    name: "Isla Paraíso",
    lng: -73.73143750345923,
    lat: -42.47649125331503,
    description: "Descubre el pueblito Weltún, conocido como Isla Paraíso, un lugar mágico que recrea el Chiloé antiguo. Incluye Dalcahue, mitología chilota y los tradicionales palafitos.",
    image: "/tours/tour-7.webp",
    type: "tour"
  },
  {
    id: "mocopulli",
    name: "Aeropuerto Mocopulli",
    lng: "-73.72141597445201",
    lat: "-42.348233843970895",
    description: "Transfer desde y hacia el aeropuerto Mocopulli",
    type: "aeropuerto",
    image: "/mocopulli.jpg"
  },
  {
    id: "tepual",
    name: "Aeropuerto el Tepual",
    lng: "-73.0987740773414",
    lat: "-41.43297322278204",
    description: "Transfer desde y hacia el aeropuerto El Tepual de Puerto Montt",
    type: "aeropuerto",
    image: "/tepual.jpg"
  }
]

export default function MapSection() {
  const [activeId, setActiveId] = useState(null)

  const getWhatsAppURL = (locationName, type) => {
    const mensaje =
      type === "aeropuerto"
        ? `Hola! me interesa reservar un transfer desde/hacia ${locationName}.`
        : `Hola! me interesa el tour "${locationName}". Me gustaría recibir más información.`

    return `https://wa.me/56984546430?text=${encodeURIComponent(mensaje)}`
  }

  return (
    <div id="map-section" className="h-[450px] md:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-200 mt-8">
      <Map theme="light" center={[-73.75, -42.5]} zoom={7.5}>
        {locations.map((loc) => (
          <MapMarker
            key={loc.id}
            longitude={loc.lng}
            latitude={loc.lat}
            onClick={() => setActiveId(loc.id)}
          >
            <MarkerContent>
              <div className="relative flex items-center justify-center cursor-pointer group w-10 h-10">
                <div
                  className={`absolute inset-0 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 ease-out
                    ${loc.type === "aeropuerto" ? "bg-secondary/20" : "bg-primary/10"}
                  `}
                />
                <div
                  className={`relative z-10 w-4 h-4 md:w-5 md:h-5 rounded-full border-[2px] border-background shadow-sm transition-transform duration-200 group-hover:scale-110
                    ${loc.type === "aeropuerto" ? "bg-secondary" : "bg-primary"}
                  `}
                />
              </div>
            </MarkerContent>

            {activeId === loc.id && (
              <MarkerPopup
                onClose={() => setActiveId(null)}
                className="p-0 w-[260px] overflow-hidden rounded-xl"
              >
                <div className="relative h-24 w-full">
                  <img
                    src={loc.image}
                    alt={loc.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="p-4 space-y-3">
                  <h3 className="font-semibold text-base">
                    {loc.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {loc.description}
                  </p>

                  {/* Botones: dos para tours, uno para aeropuertos */}
                  <div className={`flex gap-2 ${loc.type === "tour" ? "flex-col" : ""}`}>
                    {loc.type === "tour" && (
                      <Link
                        to={`/tours/${loc.id}`}
                        className="block w-full py-2 rounded-md text-sm font-medium text-center border border-primary text-primary hover:bg-primary/5 transition"
                      >
                        Más información
                      </Link>
                    )}

                    <a
                      href={getWhatsAppURL(loc.name, loc.type)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-2 rounded-md text-sm font-medium text-center transition
                        ${loc.type === "aeropuerto"
                          ? "bg-secondary text-white hover:opacity-90"
                          : "bg-primary text-white hover:opacity-90"
                        }`}
                    >
                      {loc.type === "aeropuerto" ? "Reservar transfer" : "Reservar ahora"}
                    </a>
                  </div>
                </div>
              </MarkerPopup>
            )}
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}