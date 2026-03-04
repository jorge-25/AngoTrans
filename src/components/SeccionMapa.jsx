import { useState } from "react"
import {
  Map,
  MapMarker,
  MarkerContent,
  MarkerPopup,
} from "@/components/ui/map"

const locations = [
  {
    id: "ancud",
    name: "Ancud",
    lng: -73.8203,
    lat: -41.8697,
    description: "descripcion tour",
    type: "tour"
  },
  {
    id: "dalcahue",
    name: "Dalcahue",
    lng: -73.6526,
    lat: -42.3789,
    description: "descripcion tour",
    type: "tour"
  },
  {
    id: "castro",
    name: "Castro",
    lng: -73.7669,
    lat: -42.4721,
    description: "descripcion tour",
    type: "tour"
  },
  {
    id: "muelle-del-tiempo",
    name: "Muelle del Tiempo",
    lng: -74.14368207187835,
    lat: -42.746571673362055,
    description: "Descripcion del tour",
    image: "/muelle-de-la-luz.jpg",
    type: "tour"
  },
  {
    id: "quellon",
    name: "Quellón",
    lng: -73.6036,
    lat: -43.1167,
    description: "decripcion tour",
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

  // Función para generar URL de WhatsApp por ubicación
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
            {/* PIN PROFESIONAL */}
<MarkerContent>
  <div className="relative flex items-center justify-center cursor-pointer group w-10 h-10">

    {/* Halo */}
    <div
      className={`absolute inset-0 rounded-full scale-50 group-hover:scale-100 transition-transform duration-300 ease-out
        ${loc.type === "aeropuerto" ? "bg-secondary/20" : "bg-primary/10"}
      `}
    />

    {/* Punto principal */}
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
    {/* Imagen superior compacta */}
    <div className="relative h-24 w-full">
      <img
        src={loc.image}
        alt={loc.name}
        className="w-full h-full object-cover"
      />

      {/* Overlay sutil para mejor lectura */}
      <div className="absolute inset-0 bg-black/10" />
    </div>

    {/* Contenido */}
    <div className="p-4 space-y-3">
      <h3 className="font-semibold text-base">
        {loc.name}
      </h3>

      <p className="text-sm text-muted-foreground">
        {loc.description}
      </p>

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
  </MarkerPopup>
)}
          </MapMarker>
        ))}
      </Map>
    </div>
  )
}
