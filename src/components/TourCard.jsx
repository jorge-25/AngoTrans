import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import { MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"
import "swiper/css"
import "swiper/css/pagination"

export default function TourCard({ nombre, descripcion, imagenes, slug }) {

  const mensaje = `Hola!, me interesa el tour "${nombre}". Me gustaría recibir más información.`
  const whatsappURL = `https://wa.me/56984546430?text=${encodeURIComponent(mensaje)}`

  return (
    <div
      className="
        w-full
        rounded-3xl
        overflow-hidden
        bg-white/10
        border border-[#09aa96]/30
        shadow-lg
        hover:shadow-[0_10px_40px_rgba(9,170,150,0.25)]
        transition
        h-full
        flex flex-col
      "
    >
      {/* Imágenes */}
      <div className="flex-shrink-0">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-44"
        >
          {imagenes.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="h-44 overflow-hidden">
                <img
                  src={img}
                  alt={nombre}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Contenido */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-black mb-2">
          {nombre}
        </h3>

        <p className="text-sm text-black/70 leading-relaxed mb-6 flex-grow">
          {descripcion}
        </p>

{/* Botón ver tour */}
<Link
  to={`/tours/${slug}`}
  className="
    inline-flex
    items-center
    justify-center
    px-4
    py-3
    mb-3
    rounded-xl
    border border-primary
    text-primary
    font-semibold
    text-sm
    hover:bg-primary
    hover:text-white
    transition
  "
>
  Ver detalles del tour
</Link>

{/* Botón WhatsApp */}
<a
  href={whatsappURL}
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    gap-2
    px-4
    py-3
    rounded-xl
    bg-primary
    text-white
    font-semibold
    text-sm
    hover:scale-105
    transition
  "
>
  <MessageCircle size={18} />
  WhatsApp
</a>
      </div>
    </div>
  )
}