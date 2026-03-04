import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  Car,
  MapPin,
  Globe,
  Plane,
  ArrowRight
} from "lucide-react"

export default function ServiciosHome() {
  const servicios = [
    { title: "Tours personalizados", icon: MapPin },
    { title: "Traslado privado", icon: Car },
    { title: "Viajes fuera de la isla", icon: Globe },
    { title: "Transfer a aeropuerto", icon: Plane },
  ]

  const toursDestacados = [
    "Palafitos y Castro histórico",
    "Parque Nacional Chiloé",
    "Dalcahue y sus mercados",
    "Ancud y Fuerte San Antonio",
    "Pingüineras de Puñihuil",
    "Chonchi y Cucao"
  ]

  return (
    <section className="pt-32 pb-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black mb-6"
        >
          Servicios
        </motion.h2>

        {/* Barra de tours destacados */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 overflow-hidden"
        >
          {/* Etiqueta */}
          <Link
            to="/servicios#tours"
            className="
              flex-shrink-0
              flex items-center gap-2
              px-3 md:px-4 py-2
              rounded-lg
              bg-white/80
              border border-primary
              text-primary
              font-semibold
              text-xs md:text-sm
              hover:bg-primary
              hover:text-white
              transition
              self-start
            "
          >
            <span>Tours destacados</span>
            <ArrowRight size={14} className="md:w-4 md:h-4" />
          </Link>

          {/* Loop infinito de nombres */}
          <div className="relative w-full md:flex-1 overflow-hidden h-8 md:h-10 flex items-center">
            <motion.div
              className="flex gap-4 md:gap-6 items-center"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...toursDestacados, ...toursDestacados, ...toursDestacados].map((tour, i) => (
                <span
                  key={i}
                  className="text-xs md:text-sm text-black/60 whitespace-nowrap"
                >
                  {tour} •
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Cards de servicios */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {servicios.map((s, i) => {
            const Icon = s.icon
            return (
              <div
                key={i}
                className="
                  group
                  p-8
                  rounded-2xl
                  border border-black/10
                  flex flex-col items-start
                  gap-6
                  transition
                  hover:bg-primary
                  hover:border-primary
                "
              >
                <Icon
                  size={36}
                  className="text-primary group-hover:text-white transition"
                />

                <h3 className="text-lg font-semibold text-black group-hover:text-white transition">
                  {s.title}
                </h3>
              </div>
            )
          })}
        </motion.div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 flex justify-end"
        >
          <Link
            to="/servicios"
            className="text-primary font-semibold text-lg hover:underline"
          >
            Conoce sobre nuestros servicios →
          </Link>
        </motion.div>

      </div>
    </section>
  )
}