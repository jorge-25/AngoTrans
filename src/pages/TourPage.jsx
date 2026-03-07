import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { motion } from "framer-motion"
import { tours } from "../data/tours"

import PageTransition from "../components/PageTransition"
import TourMap from "../components/map/TourMap"
import { MessageCircle } from "lucide-react"

export default function TourPage() {

  const { slug } = useParams()
  const tour = tours.find(t => t.slug === slug)

  useEffect(() => {
    if (!tour) return

    document.title = `${tour.title} | Tour en Chiloé | AngoTrans`

    let meta = document.querySelector("meta[name='description']")
    if (!meta) {
      meta = document.createElement("meta")
      meta.name = "description"
      document.head.appendChild(meta)
    }
    meta.setAttribute("content", tour.metaDescription)

    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }
    link.setAttribute("href", `https://angotrans.cl/tours/${tour.slug}`)

    const schema = {
      "@context": "https://schema.org",
      "@type": "TouristTrip",
      "name": tour.title,
      "description": tour.description,
      "image": `https://angotrans.cl${tour.heroImage}`,
      "provider": {
        "@type": "LocalBusiness",
        "name": "AngoTrans",
        "url": "https://angotrans.cl"
      },
      "areaServed": {
        "@type": "Place",
        "name": "Chiloé, Chile"
      }
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(schema)
    document.head.appendChild(script)

  }, [tour])

  if (!tour) {
    return <div>Tour no encontrado</div>
  }

  const whatsappUrl = `https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20el%20${encodeURIComponent(tour.title)}`

  return (
    <PageTransition>

      {/* ── INTRO: título + descripción + imagen ── */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Título arriba, ancho completo */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-10"
          >
            {tour.title}
          </motion.h1>

          {/* Grid: descripción + CTA a la izquierda, imagen a la derecha */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          >

            {/* Izquierda */}
            <div className="flex flex-col gap-6">
              <p className="text-lg text-black/70 leading-relaxed">
                {tour.description}
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:opacity-90 transition-opacity w-fit"
              >
                {/* WhatsApp icon */}
          <MessageCircle size={18} />
                Reservar por WhatsApp
              </a>
            </div>

            {/* Derecha: imagen */}
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={tour.heroImage}
                alt={tour.title}
                className="w-full h-full object-cover"
              />
            </div>

          </motion.div>
        </div>
      </section>

      {/* ── ITINERARIO ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Itinerario del tour
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-primary/10 rounded-2xl p-10 shadow-lg"
          >
            <ol className="relative">

              <div className="absolute left-[10px] top-2 bottom-2 w-px bg-primary/30" />

              {tour.itinerary.map((step, i) => (
                <li key={i} className="relative flex gap-6 pb-8 last:pb-0">

                  <div className="relative z-10 mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center shadow-sm">
                    <span className="text-white text-[10px] font-bold leading-none">
                      {i + 1}
                    </span>
                  </div>

                  <p className="text-black/70 text-base leading-snug pt-0.5">
                    {step}
                  </p>

                </li>
              ))}

            </ol>
          </motion.div>

        </div>
      </section>

      {/* ── MAPA ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-8"
          >
            Ubicaciones del recorrido
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg"
          >
            <TourMap route={tour.route} stops={tour.stops} />
          </motion.div>

        </div>
      </section>

{/* ── LUGARES DESTACADOS ── */}
<section className="py-20 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-3xl font-bold mb-12">
      Lugares destacados del recorrido
    </h2>

    <div className="space-y-10">
      {tour.highlights?.map((place, i) => (
        <div key={i} className="border-l-2 border-primary pl-6">

          <h3 className="text-xl font-semibold mb-2">
            {place.title}
          </h3>

          <p className="text-black/70 leading-relaxed">
            {place.description}
          </p>

        </div>
      ))}
    </div>

  </div>
</section>

    </PageTransition>
  )
}