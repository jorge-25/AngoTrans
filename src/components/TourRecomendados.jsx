import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"

import TourCard from "./TourCard"

const tours = [
  {
    nombre: "Muelle del tiempo",
    slug: "muelle-del-tiempo",
    descripcion:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur optio, incidunt, explicabo deleniti adipisci provident et impedit voluptates similique distinctio magni, modi minima blanditiis quas fugit quo sapiente enim esse?",
    imagenes: ["/muelle-del-tiempo.jpg"],
  },
  {
    nombre: "Parque Nacional Chiloé",
    slug: "parque-nacional-chiloe",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab ea, nemo qui eligendi corporis quidem, ad iste id inventore maxime dolor voluptate ipsum tempore assumenda sequi quaerat minima libero!",
    imagenes: ["/tours/tour-18.webp"],
  },
  {
    nombre: "Tour de la Costa",
    slug: "costa",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab ea, nemo qui eligendi corporis quidem, ad iste id inventore maxime dolor voluptate ipsum tempore assumenda sequi quaerat minima libero!",
    imagenes: ["/tours/tour-11.webp"],
  },
  {
    nombre: "Isla Lemuy y sus Iglesias",
    slug: "isla-lemuy-iglesias",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab ea, nemo qui eligendi corporis quidem, ad iste id inventore maxime dolor voluptate ipsum tempore assumenda sequi quaerat minima libero!",
    imagenes: ["/tours/tour-12.webp"],
  },
  {
    nombre: "Isla Quinchao",
    slug: "isla-quinchao",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab ea, nemo qui eligendi corporis quidem, ad iste id inventore maxime dolor voluptate ipsum tempore assumenda sequi quaerat minima libero!",
    imagenes: ["/mirador-alto-la-paloma.jpg"],
  },
  {
    nombre: "Isla Paraíso",
    slug: "isla-paraiso",
    descripcion:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ab ea, nemo qui eligendi corporis quidem, ad iste id inventore maxime dolor voluptate ipsum tempore assumenda sequi quaerat minima libero!",
    imagenes: ["/tours/tour-7.webp"],
  },
]

export default function ToursRecomendados() {
  return (
    <section id="tours" className="pt-32 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Nuestros tours recomendados en Chiloé
        </h2>

        {/* Indicador de deslizamiento */}
        <div className="flex items-center justify-center gap-2 mb-6 text-primary">
          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-sm font-semibold">Desliza para ver más tours</span>
          <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>

        <Swiper
          spaceBetween={24}
          slidesPerView={1.1}
          loop
          breakpoints={{
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {tours.map((tour, i) => (
            <SwiperSlide key={i}>
              <TourCard {...tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
