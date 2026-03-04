import { motion } from "framer-motion"
import { HeartHandshake, Clock, ShieldCheck } from "lucide-react"

export default function MisionValores() {
	return (
		<section className="pt-32 pb-16 px-6">
			<div className="max-w-5xl mx-auto">

				{/* Misión */}
				<h2 className="text-3xl md:text-4xl font-bold mb-6">
					Nuestra misión y Valores
				</h2>
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
              mb-20
            "
				>

					<p className="text-lg text-black/70 leading-relaxed mb-4">
						Brindar un servicio de transporte cercano, confiable y flexible,
						acompañando a cada persona en sus viajes dentro y fuera de la Isla
						Grande de Chiloé, con puntualidad, respeto y compromiso.
					</p>
				</motion.div>

				{/* Valores */}
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: 0.2 }}
					className="grid grid-cols-1 sm:grid-cols-3 gap-8"
				>
					{[
						{ icon: HeartHandshake, title: "Cercanía" },
						{ icon: Clock, title: "Puntualidad" },
						{ icon: ShieldCheck, title: "Confianza" },
					].map((v, i) => {
						const Icon = v.icon
						return (
							<div
								key={i}
								className="p-8 rounded-2xl border border-black/10 text-center"
							>
								<Icon className="mx-auto text-primary mb-4" size={36} />
								<h3 className="text-lg font-semibold">{v.title}</h3>
							</div>
						)
					})}
				</motion.div>

			</div>
		</section>
	)
}
