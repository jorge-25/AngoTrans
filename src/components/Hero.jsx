import { motion } from "framer-motion"
import QuienesSomos from "../components/QuienesSomos"

export default function Hero() {
	return (
		<motion.section className="min-h-screen pt-32 pb-20 relative overflow-hidden bg-[#cdfaff] bg-opacity-75 flex flex-col justify-center">

			{/* Fondo mapa */}
			<div className="absolute inset-0 z-0 pointer-events-none">
				<img
					src="/mapa-chiloe.svg"
					alt=""
					className="
          absolute
          top-[55%] md:top-1/2
          -translate-y-1/2
          left-1/2 -translate-x-1/2
          md:left-auto md:translate-x-0 md:right-0
          w-[1100px] md:w-[1200px]
          opacity-20 md:opacity-25
          pointer-events-none
        "
				/>
			</div>

			<div className="relative z-10 w-full flex-1 flex flex-col justify-center">
				<div className="max-w-4xl mx-auto md:mx-0 px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-center"
					>

						{/* Slogan */}
						<motion.h1
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							className="
							text-secondary
							text-3xl sm:text-4xl md:text-6xl
							font-bold
							tracking-tight
							leading-tight
							mb-4
						"
						>
							Tours en <span className="text-primary">Chiloé</span> y Traslado Privado de Pasajeros
						</motion.h1>

						{/* Marca */}
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.3 }}
							className="text-black/70 text-base sm:text-lg md:text-xl mb-8 md:mb-10"
						>
							Conectando destinos, creando recuerdos · AngoTrans
						</motion.p>

						{/* CTA - BOTÓN CON EFECTO DE LUZ EN EL BORDE */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
							className="flex justify-center"
						>
							<motion.a
								href="/#contacto"
								className="
                  relative overflow-hidden rounded-lg shadow-lg group
                  p-[3px] /* Este padding define el grosor del borde de luz */
                "
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{/* 1. La Luz Giratoria (Capa trasera) */}
								<motion.div
									className="absolute inset-[-1000%]"
									animate={{ rotate: 360 }}
									transition={{
										duration: 4, // Velocidad de la vuelta
										repeat: Infinity,
										ease: "linear",
									}}
									style={{
										// El gradiente crea el efecto de cola de cometa
										background: "conic-gradient(from 90deg at 50% 50%, #0000 0%, #0000 50%, #51708b 100%)"
									}}
								/>

								{/* 2. El cuerpo del botón (Capa frontal) */}
								<div className="
                  relative z-10 
                  bg-primary 
                  text-white 
                  px-8 py-3 
                  rounded-md 
                  h-full w-full 
                  flex items-center justify-center
                ">
									<span className="font-semibold text-lg">Reserva tu aventura</span>
								</div>
							</motion.a>
						</motion.div>

					</motion.div>

					{/* Descripción */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
						className="
							mt-8 md:mt-14
							max-w-3xl
							mx-auto
							px-4 sm:px-6
							py-5 sm:py-6
							rounded-xl
							bg-white/40
							backdrop-blur-sm
							shadow-sm
						"
					>
						<p className="text-sm sm:text-base md:text-lg text-black leading-relaxed text-center">
							En <span className="font-semibold">AngoTrans</span> realizamos tours en Chiloé y
							traslados privados de pasajeros para quienes están en la Isla Grande de Chiloé.
							Ofrecemos recorridos turísticos y transporte personalizado desde Castro, Dalcahue, Ancud, Chonchi y Quellón,
							además de transfer desde el aeropuerto de Mocopulli.
							Nuestro servicio es cercano, flexible y adaptado a tu tiempo y necesidades.
						</p>
					</motion.div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.2 }}
				className="absolute bottom-8 flex justify-center w-full"
			>
				<div className="flex flex-col items-center text-black/40 text-sm">
					<span>Desliza</span>
					<motion.div
						animate={{ y: [0, 8, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
						className="mt-1"
					>
						↓
					</motion.div>
				</div>
			</motion.div>

		</motion.section>
	)
}