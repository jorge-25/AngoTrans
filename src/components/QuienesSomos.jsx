import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function QuienesSomos() {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >

          {/* Texto */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Quiénes somos
            </h2>

            <p className="text-lg text-black/70 leading-relaxed mb-6">
              Somos de la Isla Grande de Chiloé, conectamos
              personas y destinos a través de un servicio de transporte confiable,
              cómodo y seguro. Nuestro foco está en la experiencia del cliente,
              la puntualidad y la confianza en cada viaje.
            </p>

            {/* Link */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-end"
            >
              <Link
                to="/nosotros"
                className="text-primary font-semibold text-lg hover:underline"
              >
                Conoce más sobre nosotros →
              </Link>
            </motion.div>

          </div>


          {/* Fotos */}
          <div className="relative flex justify-center items-center">

            {/* Foto grande */}
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-black/10 shadow-xl">
              <img
                src="/ford.webp"
                alt="Equipo Ango Trans"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Fotos pequeñas */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full overflow-hidden border border-black/10 shadow-lg">
              <img
                src="/palafitos.webp"
                alt="Servicio 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-4 -left-2 w-28 h-28 rounded-full overflow-hidden border border-black/10 shadow-lg">
              <img
                src="/iglesiaCastro.webp"
                alt="Servicio 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-1/2 -right-6 w-24 h-24 rounded-full overflow-hidden border border-black/10 shadow-lg">
              <img
                src="/paisaje.jpg"
                alt="Servicio 3"
                className="w-full h-full object-cover"
              />
            </div>

          </div>


        </motion.div>

      </div>
    </section>
  )
}
