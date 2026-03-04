import PageTransition from "../components/PageTransition"
import MisionValores from "../components/MisionValores"
import { motion } from "framer-motion"
import { useEffect } from "react"
import Gallery from "../components/GaleriaFotos"

export default function Nosotros() {

	const photos = [
	"/ford/ford-2.webp",
	"/ford/ford-3.webp",
	"/ford/ford-4.webp",
	"/ford/ford-5.webp",
	"/ford/ford-6.webp",
	"/ford/ford-7.webp",
	"/ford/ford-8.webp",
	"/ford/ford-9.webp",
	"/ford/ford-10.webp",
	"/ford/ford-11.webp",
	]

  useEffect(() => {
	document.title = "Sobre AngoTrans | Turismo y traslado privado en Chiloé"

	let meta = document.querySelector("meta[name='description']")
	if (!meta) {
	  meta = document.createElement("meta")
	  meta.name = "description"
	  document.head.appendChild(meta)
	}

	meta.setAttribute(
	  "content",
	  "Conoce la historia de AngoTrans, empresa local de tours y traslados privados en Chiloé. Servicio profesional desde Castro con cobertura en Ancud, Dalcahue, Chonchi y Quellón."
	)

    let link = document.querySelector("link[rel='canonical']")
    if (!link) {
      link = document.createElement("link")
      link.setAttribute("rel", "canonical")
      document.head.appendChild(link)
    }

    link.setAttribute("href", "https://angotrans.cl/nosotros")
  }, [])

	return (
		<PageTransition>
			<section className="pt-32 pb-16 px-6">
				<div className="max-w-5xl mx-auto">

					{/* Título */}
					<motion.h1
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-4xl md:text-5xl font-bold mb-6"
					>
					Sobre AngoTrans – Turismo y Traslados en Chiloé
					</motion.h1>

					{/* Card */}
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="
              bg-primary/10
              rounded-2xl
              p-10
              text-center
              shadow-lg
            "
					>
						{/* Foto */}
						<img
							src="/hernan-andrade.jpg"
							alt="Hernán - Fundador de AngoTrans"
							className="w-32 h-32 mx-auto rounded-full object-cover mb-6"
						/>

						{/* Texto */}
						<p className="text-lg text-black/70 leading-relaxed mb-4">
							¡Hola! Soy Hernán Andrade, chofer profesional con miles de kilómetros recorridos
							y fundador de AngoTrans. Les cuento un dato curioso ¿Sabían que Chiloé tiene 40 islas habitables? Soy Castreño,
							crecí en la Isla Grande de Chiloé, y conozco cada uno de sus caminos y rincones.
							Creé AngoTrans con la idea de ofrecer un servicio de transporte confiable,
							cercano y personalizado, donde cada viaje sea una experiencia segura, cómoda y agradable.
						</p>

						<div className="text-center">
							<p className="font-semibold">— Hernán</p>
							<p className="text-sm text-black/50">Fundador de AngoTrans</p>
						</div>
					</motion.div>

				</div>
			</section>

<section className="pt-32 pb-16 px-6">
  <Gallery images={photos} />
</section>

			<MisionValores />

		</PageTransition>
	)
}
