import { useState, useEffect } from "react"
import { motion } from "framer-motion"

/**
 * Gallery component
 *
 * @param {string[]} images  - Array de URLs de imágenes
 * @param {number}   rows    - Filas de vista previa: 1 (default) o 2
 *
 * Uso:
 *   /nosotros  → <Gallery images={imgs} />
 *   /servicios → <Gallery images={imgs} rows={2} />
 */
export default function Gallery({ images, rows = 1 }) {
    const [openIndex, setOpenIndex] = useState(null)

    const previewCount = rows === 2 ? 8 : 4

    const closeModal = () => setOpenIndex(null)
    const prevImage = () =>
        setOpenIndex((openIndex - 1 + images.length) % images.length)
    const nextImage = () =>
        setOpenIndex((openIndex + 1) % images.length)

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") closeModal()
            if (e.key === "ArrowLeft") prevImage()
            if (e.key === "ArrowRight") nextImage()
        }
        if (openIndex !== null) document.addEventListener("keydown", handleKey)
        return () => document.removeEventListener("keydown", handleKey)
    }, [openIndex])

    return (
        <div className="max-w-5xl mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
            >
                Nuestra Galería
            </motion.h2>
            {/* Grid preview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {images.slice(0, previewCount).map((img, idx) => (
                    <div
                        key={idx}
                        onClick={() => setOpenIndex(idx)}
                        className="relative cursor-pointer overflow-hidden rounded-lg group"
                    >
                        <img
                            src={img}
                            alt={`Gallery image ${idx + 1}`}
                            className="w-full h-32 md:h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <svg className="w-7 h-7 text-white drop-shadow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6M8 11h6" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="flex justify-end mt-4"
            >
                {images.length > previewCount && (
                    <button
                        onClick={() => setOpenIndex(0)}
                        className="text-primary font-semibold text-lg hover:underline"
                    >
                        Ver todas las imágenes ({images.length})
                    </button>
                )}
            </motion.div>


            {/* MODAL */}
            {openIndex !== null && (
                <div
                    className="fixed inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    onClick={closeModal}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top bar: contador + cerrar */}
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-white/60 text-sm font-medium tracking-widest">
                                {String(openIndex + 1).padStart(2, "0")}
                                <span className="mx-1 text-white/30">/</span>
                                {String(images.length).padStart(2, "0")}
                            </span>

                            <button
                                onClick={closeModal}
                                className="bg-white/10 hover:bg-primary border border-white/10 hover:border-primary
                  text-white w-9 h-9 rounded-full flex items-center justify-center
                  transition-all duration-200 group"
                                title="Cerrar (Esc)"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Imagen + flechas superpuestas */}
                        <div className="relative">
                            <img
                                src={images[openIndex]}
                                alt={`Gallery image ${openIndex + 1}`}
                                className="w-full max-h-[78vh] object-contain rounded-xl shadow-2xl"
                            />

                            {/* Flecha izquierda — pegada a la imagen */}
                            <button
                                onClick={prevImage}
                                className="absolute left-3 top-1/2 -translate-y-1/2
                  bg-black/40 hover:bg-primary border border-white/10 hover:border-primary
                  text-white w-10 h-10 rounded-full
                  flex items-center justify-center shadow-lg
                  transition-all duration-200 backdrop-blur-sm"
                                title="Anterior (←)"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Flecha derecha — pegada a la imagen */}
                            <button
                                onClick={nextImage}
                                className="absolute right-3 top-1/2 -translate-y-1/2
                  bg-black/40 hover:bg-primary border border-white/10 hover:border-primary
                  text-white w-10 h-10 rounded-full
                  flex items-center justify-center shadow-lg
                  transition-all duration-200 backdrop-blur-sm"
                                title="Siguiente (→)"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Miniaturas */}
                        <div className="flex justify-center gap-1.5 mt-3">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setOpenIndex(idx)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${idx === openIndex
                                        ? "bg-primary scale-125"
                                        : "bg-white/30 hover:bg-white/60"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}