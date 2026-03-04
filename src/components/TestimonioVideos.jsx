import { motion } from "framer-motion"

const testimonios = [
  {
    nombre: "María González",
    texto:
      "Excelente servicio. Puntualidad absoluta y un trato muy profesional. Nuestro tour por Chiloé fue cómodo y perfectamente coordinado.",
  },
  {
    nombre: "Felipe Bajas",
    texto:
      "Contratamos incluido el traslado desde el aeropuerto y todo fue impecable. Se nota el conocimiento local y la dedicación.",
  },
  {
    nombre: "Carolina Ríos",
    texto:
      "Un servicio confiable y seguro. Recomiendo totalmente para quienes visitan la isla y buscan una experiencia tranquila.",
  },
]

export default function TestimoniosVideo() {
  return (
    <section className="pt-32 pb-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Experiencias de nuestros pasajeros
        </motion.h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Testimonios */}
          <div className="space-y-12">
            {testimonios.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative"
              >
                {/* Comilla decorativa */}
                <span className="absolute -top-6 -left-4 text-6xl text-primary/10 font-serif">
                  “
                </span>

                <p className="text-lg text-black/80 leading-relaxed">
                  {t.texto}
                </p>

                <p className="mt-4 text-sm text-primary font-semibold">
                  — {t.nombre}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl overflow-hidden shadow-xl"
          >
            <video
              src="/videos/saludo-drone.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
