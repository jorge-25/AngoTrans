import { motion } from "framer-motion"
import { Mail, MessageCircle } from "lucide-react"

export default function ContactoHome() {
  return (
    <section id="contacto" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black mb-16"
        >
          Cotiza tu tour o traslado en Chiloé
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/56984546430"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              group
              bg-gradient-to-br from-primary to-primary/80
              rounded-2xl
              p-10
              text-white
              shadow-xl
              flex
              flex-col
              gap-6
            "
          >
            <MessageCircle
              size={40}
              className="transition group-hover:scale-110 group-hover:-rotate-6"
            />

            <h3 className="text-2xl font-semibold">
              Conversemos por WhatsApp
            </h3>

            <p className="text-white/80 leading-relaxed">
              Contáctanos directamente por WhatsApp y coordinemos tu traslado
              de forma rápida y sencilla.
            </p>

            <span className="mt-auto font-semibold underline underline-offset-4">
              Abrir conversación →
            </span>
          </motion.a>

          {/* Email */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="
              group
              bg-gradient-to-br from-primary to-primary/80
              rounded-2xl
              p-10
              text-white
              shadow-xl
              flex
              flex-col
              gap-6
            "
          >
            <Mail
              size={40}
              className="transition group-hover:scale-110 group-hover:-rotate-6"
            />

            <h3 className="text-2xl font-semibold">
              Escríbenos por correo
            </h3>

            <p className="text-white/80 leading-relaxed">
              ¿Tienes dudas o necesitas una cotización? Escríbenos y te
              responderemos a la brevedad.
            </p>

            <a
              href="mailto:contacto@angotrans.cl"
              className="mt-auto font-semibold underline underline-offset-4"
            >
              contacto@angotrans.cl
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
