import { motion } from "framer-motion"
import PageTransition from "../components/PageTransition"
import TourRecomendados from "../components/TourRecomendados"
import { lazy, Suspense } from "react"
import { useEffect } from "react"
import {
  Car,
  MapPin,
  Globe,
  Plane,
  MessageCircle
} from "lucide-react"
import Gallery from "../components/GaleriaFotos"

export default function Servicios() {
  useEffect(() => {
    document.title = "Tours y Traslados Privados en Chiloé | Servicios AngoTrans"

    let meta = document.querySelector("meta[name='description']")
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }

    meta.setAttribute(
      "content",
      "Conoce nuestros servicios de tours en Chiloé y traslados privados de pasajeros desde Castro, Ancud, Dalcahue, Chonchi y Quellón. Ofrecemos transfer al aeropuerto de Mocopulli y recorridos turísticos personalizados por la Isla Grande de Chiloé."
    )

    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }

    link.setAttribute("href", "https://angotrans.cl/servicios")
  }, [])

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

	const photos = [
	"/tours/tour-1.webp",
	"/tours/tour-2.webp",
	"/tours/tour-3.webp",
	"/tours/tour-4.webp",
	"/tours/tour-5.webp",
	"/tours/tour-6.webp",
	"/tours/tour-7.webp",
	"/tours/tour-8.webp",
	"/tours/tour-9.webp",
	"/tours/tour-10.webp",
	"/tours/tour-11.webp",
	"/tours/tour-12.webp",
	"/tours/tour-13.webp",
	"/tours/tour-14.webp",
	"/tours/tour-15.webp",
	"/tours/tour-16.webp",
	"/tours/tour-17.webp",
	"/tours/tour-18.webp",
	"/tours/tour-19.webp",
	"/tours/tour-20.webp",
	"/tours/tour-21.webp",
	"/tours/tour-22.webp",
	"/tours/tour-23.webp",
	"/tours/tour-24.webp",
	"/tours/tour-25.webp",
	"/tours/tour-26.webp",
	"/tours/tour-27.webp",
	"/tours/tour-28.webp",
	"/tours/tour-29.webp",
	"/tours/tour-30.webp",
	"/tours/tour-31.webp",
  "/palafitos.webp",
  "/iglesiaCastro.webp"
	]

  const servicios = [
    {
      title: "Tours personalizados en Chiloé",
      description:
        "Diseñamos tours en Chiloé a medida para que descubras la isla a tu ritmo, visitando Castro, Ancud, Dalcahue, Chonchi, Quellón y sus principales atractivos turísticos con comodidad y atención cercana.",
      icon: MapPin,
    },
    {
      title: "Traslado privado de pasajeros en Chiloé",
      description:
        "Servicio de traslado privado de pasajeros en Chiloé para viajes personales, laborales o turísticos, con puntualidad, comodidad y responsabilidad.",
      icon: Car,
    },
    {
      title: "Viajes fuera de Chiloé al continente",
      description:
        "Realizamos viajes programados desde Chiloé hacia el continente y otras ciudades del sur de Chile, coordinando horarios y trayectos según tus necesidades.",
      icon: Globe,
    },
    {
      title: "Transfer aeropuerto Mocopulli y El Tepual",
      description:
        "Ofrecemos transfer desde y hacia el aeropuerto de Mocopulli y el aeropuerto El Tepual de Puerto Montt, con coordinación previa y puntualidad garantizada.",
      icon: Plane,
    },
  ]

  const MapSection = lazy(() => import("@/components/SeccionMapa"))

  return (
    <PageTransition>
      <section className="min-h-screen pt-32 pb-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Título */}
          <motion.h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Servicios de Tours y Traslados Privados en Chiloé
          </motion.h1>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {servicios.map((s, i) => {
              const Icon = s.icon
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="
                      p-10
                      rounded-3xl
                      bg-primary/10
                      border border-primary/20
                      backdrop-blur-sm
                      hover:bg-primary/15
                      transition
                    "
                >
                  {/* Icono */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-primary/20">
                      <Icon size={36} className="text-primary" />
                    </div>
                  </div>

                  {/* Texto */}
                  <h3 className="text-xl font-semibold text-black mb-4 text-center">
                    {s.title}
                  </h3>

                  <p className="text-black/70 leading-relaxed text-center">
                    {s.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* CTA WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="
    mt-32
    rounded-3xl
    bg-gradient-to-br from-primary to-primary/80
    p-12
    text-white
    flex flex-col md:flex-row
    items-center
    justify-between
    gap-8
  "
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold mb-3">
                ¿Planificamos tu próximo viaje?
              </h3>
              <p className="text-white/90 max-w-xl">
                Escríbenos por WhatsApp y coordinemos tu tour en Chiloé o tu traslado privado de forma rápida y sencilla.
              </p>
            </div>

            <motion.a
              href="https://wa.me/56984546430"
              target="_blank"
              rel="noopener noreferrer"
              className="
      relative overflow-hidden
      inline-flex
      items-center
      gap-3
      px-8
      py-4
      rounded-xl
      bg-white
      text-primary
      font-semibold
      text-lg
      transition
    "
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Efecto de brillo que se desplaza */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 1,
                }}
              />

              <MessageCircle size={22} className="relative z-10" />
              <span className="relative z-10">Hablar por WhatsApp</span>
            </motion.a>
          </motion.div>

          <TourRecomendados/>

<Suspense
  fallback={
    <div className="h-[450px] w-full rounded-3xl bg-muted animate-pulse" />
  }
>
  <MapSection/>
</Suspense>

<section className="pt-32 pb-16 px-6">
  <Gallery images={photos} rows={2}/>
</section>

        </div>
      </section>
    </PageTransition>
  )
}
